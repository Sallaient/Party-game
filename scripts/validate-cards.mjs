/**
 * Content guard for the card decks.
 *
 * The engine fills {p1}..{pN} from a list of N picked players, so a card that
 * skips an index (uses {p2} but never {p1}) would ship an unreplaced token to
 * the table. Language variants must also agree on which players they name.
 *
 * Run with: npm run validate
 */
import { build } from 'esbuild'
import { readFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outfile = resolve(root, 'node_modules/.cache/cards-bundle.mjs')

await build({
  entryPoints: [resolve(root, 'src/data/packs.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  logLevel: 'error',
})

const { PACKS } = await import(pathToFileURL(outfile).href)
rmSync(outfile, { force: true })

const PLACEHOLDER = /\{p(\d+)\}/g
const indices = (text) => [...text.matchAll(PLACEHOLDER)].map((match) => Number(match[1]))
const unique = (list) => [...new Set(list)].sort((a, b) => a - b)

const problems = []
let total = 0

for (const pack of PACKS) {
  for (const card of pack.cards) {
    total += 1
    const fr = unique(indices(card.text.fr))
    const en = unique(indices(card.text.en))

    if (fr.join(',') !== en.join(',')) {
      problems.push(`${card.id}: FR uses {p${fr.join('} {p')}} but EN uses {p${en.join('} {p')}}`)
    }

    // Indices must be a contiguous run starting at 1.
    for (const [position, index] of fr.entries()) {
      if (index !== position + 1) {
        problems.push(`${card.id}: placeholder gap — uses {p${index}} at position ${position + 1}`)
        break
      }
    }

    if (card.players !== fr.length) {
      problems.push(`${card.id}: players=${card.players} but text needs ${fr.length}`)
    }
    if (card.kind === 'rule' && !card.duration) {
      problems.push(`${card.id}: rule card without a duration`)
    }
    if (card.kind === 'timer' && !card.seconds) {
      problems.push(`${card.id}: timer card without seconds`)
    }
    for (const lang of ['fr', 'en']) {
      if (!card.text[lang]?.trim()) problems.push(`${card.id}: empty ${lang} text`)
    }
  }
}

// Ids must be unique across every pack, since the deck merges them.
const ids = PACKS.flatMap((pack) => pack.cards.map((card) => card.id))
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
if (duplicates.length) problems.push(`duplicate card ids: ${[...new Set(duplicates)].join(', ')}`)

// Every UI string must exist in both languages.
// Blocks are matched line-anchored: card copy legitimately contains "}," inside
// its own text (e.g. "{p1}, {p2}"), so scanning for the first one would truncate.
const strings = readFileSync(resolve(root, 'src/i18n/strings.ts'), 'utf8')
const blocks = [...strings.matchAll(/^ {2}(\w+): \{$([\s\S]*?)^ {2}\},$/gm)]
const inline = [...strings.matchAll(/^ {2}(\w+): \{ (.*) \},$/gm)]
const keys = [...blocks, ...inline].map((match) => match[1])
for (const [, key, body] of [...blocks, ...inline]) {
  if (!/\bfr:/.test(body) || !/\ben:/.test(body)) problems.push(`string "${key}" is missing a language`)
}

const counts = PACKS.map((pack) => `${pack.id}=${pack.cards.length}`).join(' ')
console.log(`Checked ${total} cards and ${keys.length} UI strings. ${counts}`)

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`)
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}
console.log('All content checks passed.')
