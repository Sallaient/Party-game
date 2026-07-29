import type { CardDef, DrawnCard, Lang, Localized } from '../types'

const PLACEHOLDER = /\{p([1-9])\}/g

/**
 * Pick `count` distinct players, biased away from whoever played most recently
 * so the same person is not targeted twice in a row when the group is big
 * enough to avoid it.
 */
export function pickPlayers(all: string[], count: number, recent: string[]): string[] {
  if (count <= 0) return []
  if (all.length === 0) return []

  // Everyone the card cannot avoid: if we need more players than exist, repeat.
  if (count >= all.length) return shuffle(all).slice(0, Math.min(count, all.length))

  const cooldown = new Set(recent.slice(-Math.max(1, Math.floor(all.length / 3))))
  const fresh = shuffle(all.filter((p) => !cooldown.has(p)))
  const stale = shuffle(all.filter((p) => cooldown.has(p)))
  return [...fresh, ...stale].slice(0, count)
}

export function shuffle<T>(input: readonly T[]): T[] {
  const out = input.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Replace {p1}/{p2}/{p3} with the chosen names. */
export function fillTemplate(text: string, players: string[]): string {
  return text.replace(PLACEHOLDER, (match, index: string) => {
    const name = players[Number(index) - 1]
    return name ?? match
  })
}

export function fillLocalized(text: Localized, players: string[]): Localized {
  return {
    fr: fillTemplate(text.fr, players),
    en: fillTemplate(text.en, players),
  }
}

/** How many distinct {pN} slots a piece of text actually uses. */
export function countPlaceholders(text: string): number {
  const found = new Set<number>()
  for (const match of text.matchAll(PLACEHOLDER)) found.add(Number(match[1]))
  return found.size
}

let drawCounter = 0

export function drawCard(def: CardDef, allPlayers: string[], recent: string[]): DrawnCard {
  const players = pickPlayers(allPlayers, def.players, recent)
  drawCounter += 1
  return {
    key: `${def.id}-${drawCounter}`,
    def,
    players,
    text: fillLocalized(def.text, players),
    reveal: def.reveal ? fillLocalized(def.reveal, players) : undefined,
  }
}

export function t(text: Localized, lang: Lang): string {
  return text[lang]
}
