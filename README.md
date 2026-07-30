# 🍸 Soirée — one-phone party game

A Picolo-style drinking game as an installable, offline-first PWA. Put one phone
in the middle of the table, one person reads the card out loud, the group does
it, tap for the next one. Player names are injected straight into the cards.

**64 cards**, every one written in both French and English.

## Features

- **Rounds of 20 cards** — the deck is shuffled once at the start and dealt off
  the front, so a round never repeats a card. It ends on an outro screen offering
  a replay (fresh shuffle) or a return home.
- **Names in the cards** — add the players once and cards read *"Enzo, bois 2
  gorgées"*. The engine spreads targets around so the same person is not picked
  twice in a row.
- **Persistent rules** — rule cards stay in a banner at the top with a turn
  counter and expire on their own. A rule with no duration runs until the game
  ends and shows ∞ instead of a countdown.
- **Hidden reveals** — a card can hold back a trivia answer or a delayed twist
  behind a tap, so whoever is holding the phone cannot read it out by accident.
- **Timed challenges** — countdown cards with a progress bar and a buzz at zero.
- **Custom cards** — write your own with a `{p1}` / `{p2}` placeholder picker,
  stored on the device and mixed into the deck.
- **FR / EN** — switchable at any time, including mid-game.
- **Offline** — service worker precaches everything; installs to the home screen.
- **Swipe or tap** — tap anywhere to advance, swipe right to go back, arrow keys
  work too. Optional haptics.

Nothing is ever sent anywhere: players, custom cards and settings live in
`localStorage` only.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production bundle + service worker into dist/
npm run preview    # serve the built bundle
npm run check      # typecheck + card content validation
```

## Deploying

### Vercel

Import the repository from the Vercel dashboard — no CLI needed. `vercel.json`
pins the build and the response headers, so the defaults do not need touching:

- **Build** runs `npm run validate && npm run build`, so a card with a broken
  placeholder or a missing translation fails the deploy instead of reaching the
  table.
- **`sw.js` and the manifest** are served `max-age=0, must-revalidate`. This is
  the one header that really matters: if a CDN pins the service worker, clients
  stay on the build they first saw and stop receiving updates.
- **`/assets/*` and the Workbox runtime** are fingerprinted by the build, so
  they are `immutable` for a year. Icons keep stable filenames and revalidate
  daily instead.
- **A strict CSP** (`default-src 'self'`, no external origins at all), plus
  `nosniff`, `no-referrer`, and a `Permissions-Policy` denying camera,
  microphone, geolocation, payment and USB. `'unsafe-inline'` is confined to
  `style-src`, which React and Framer Motion require for style attributes.

The default `base` of `/` is correct here; leave `BASE_PATH` unset.

`Strict-Transport-Security` is set without `includeSubDomains` or `preload`. Add
them if you attach a custom domain and own every subdomain of it — preload in
particular is hard to reverse.

### GitHub Pages

A *project* site is served from a subpath, so the base has to be set at build
time:

```bash
BASE_PATH=/Party-game/ npm run build
```

## Project layout

```
src/
├── data/          the card deck, plus pack metadata
├── game/
│   ├── engine.ts    deck building, turn history, rule lifecycle
│   └── template.ts  player picking, {pN} substitution, shuffling
├── i18n/          UI copy in both languages
├── store/         app state (React context) + localStorage
├── components/    card, rule banner, timer, modal
└── screens/       home, players, packs, game, custom cards, settings
scripts/
└── validate-cards.mjs   content guard, run via `npm run validate`
```

## Writing cards

Cards live in `src/data/classique.ts`. A card is:

```ts
{
  kind: 'action',            // action | question | duel | group | rule | timer | minigame
  text: {
    fr: '{p1} distribue 3 gorgées comme bon lui semble.',
    en: '{p1} hands out 3 sips however they like.',
  },
}
```

`{p1}`, `{p2}`, `{p3}` are replaced with distinct random player names. **You do
not declare how many players a card needs** — it is derived from the
placeholders in the text, so the two can never drift apart. Cards needing more
players than the group has are dropped from the deck automatically.

`rule` cards take a `duration` (turns to stay on the banner) — omit it and the
rule lasts the whole game. `timer` cards take `seconds`. Any card may carry a
`reveal`, held back behind a button until the reader taps for it — an answer,
or a twist that lands after the group has committed:

```ts
{
  kind: 'question',
  text: { fr: '{p1} : capitale de la Finlande ?', en: '{p1}: capital of Finland?' },
  reveal: { fr: 'Helsinki', en: 'Helsinki' },
}
```

`npm run validate` enforces the invariants that would otherwise reach the table:
placeholders must start at `{p1}` and run contiguously across the card text and
its answer, FR and EN must name the same players, a declared duration must not
expire instantly and only belongs on rule cards, timer cards need seconds, ids
must be unique, and every UI string must exist in both languages.

## A note on the content

Dares are written with a stated way out, because passing has to stay free — the
app says so on the home screen and in Settings. Drink responsibly.
