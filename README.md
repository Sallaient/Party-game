# 🍸 Soirée — one-phone party game

A Picolo-style drinking game as an installable, offline-first PWA. Put one phone
in the middle of the table, one person reads the card out loud, the group does
it, tap for the next one. Player names are injected straight into the cards.

**222 cards**, every one written in both French and English.

## Features

- **Four packs** — Classique (81), Défis & mini-jeux (44), Hot 18+ (45),
  Grosse cuite 18+ (52). Mix any combination; the cards get shuffled together.
- **Names in the cards** — add the players once and cards read *"Enzo, bois 2
  gorgées"* or pair two people up for a duel. The engine spreads targets around
  so the same person is not picked twice in a row.
- **Persistent rules** — rule cards stay in a banner at the top with a turn
  counter and expire on their own.
- **Timed challenges** — countdown cards with a progress ring and a buzz at zero.
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

Deploying to a GitHub Pages *project* site (served from a subpath):

```bash
BASE_PATH=/Party-game/ npm run build
```

## Project layout

```
src/
├── data/          card decks, one file per pack, plus pack metadata
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

Cards live in `src/data/<pack>.ts`. A card is:

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

`rule` cards take a `duration` (turns to stay on the banner), `timer` cards take
`seconds`.

`npm run validate` enforces the invariants that would otherwise reach the table:
placeholders must start at `{p1}` and run contiguously, FR and EN must name the
same players, rule cards need a duration, timer cards need seconds, ids must be
unique, and every UI string must exist in both languages.

## A note on the content

The 18+ packs are gated behind an age confirmation and are suggestive and
chaotic rather than explicit. Dares are written with a stated way out, because
passing has to stay free — the app says so on the home screen and in Settings.
Drink responsibly.
