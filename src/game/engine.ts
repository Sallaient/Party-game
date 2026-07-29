import type { ActiveRule, CardDef, CustomCard, DrawnCard, PackId } from '../types'
import { PACKS } from '../data/packs'
import { drawCard, shuffle } from './template'

/** One card on screen, plus the rules that apply while it is showing. */
export interface Turn {
  card: DrawnCard
  /** Rules displayed in the banner next to this card. */
  banner: ActiveRule[]
  /** Rule set handed to the next turn (banner + a rule this card may create). */
  carry: ActiveRule[]
}

export interface GameState {
  players: string[]
  packs: PackId[]
  /** Cards not yet dealt in the current pass through the deck. */
  queue: CardDef[]
  turns: Turn[]
  index: number
  /** Recently targeted players, used to spread the pain around. */
  recent: string[]
}

export function customToCardDef(card: CustomCard): CardDef {
  return {
    id: `perso-${card.id}`,
    pack: 'perso',
    kind: card.kind,
    players: card.players,
    text: { fr: card.text, en: card.text },
    reveal: card.reveal ? { fr: card.reveal, en: card.reveal } : undefined,
    // 0 in the editor means "no countdown", i.e. a rule that lasts the game.
    duration: card.duration || undefined,
    seconds: card.seconds,
  }
}

/**
 * All playable cards for the chosen packs. Cards needing more distinct players
 * than the group has are dropped so no {p3} placeholder ever reaches the screen.
 */
export function buildDeck(
  packs: PackId[],
  playerCount: number,
  customCards: CustomCard[],
): CardDef[] {
  const selected = new Set(packs)
  const pool: CardDef[] = []

  for (const pack of PACKS) {
    if (!selected.has(pack.id)) continue
    pool.push(...pack.cards)
  }
  if (selected.has('perso')) {
    pool.push(...customCards.map(customToCardDef))
  }

  return pool.filter((card) => card.players <= playerCount)
}

export function createGame(
  players: string[],
  packs: PackId[],
  customCards: CustomCard[],
): GameState {
  const deck = buildDeck(packs, players.length, customCards)
  return {
    players,
    packs,
    queue: shuffle(deck),
    turns: [],
    index: -1,
    recent: [],
  }
}

/** Reshuffles when the deck runs dry, avoiding an immediate repeat at the seam. */
function takeCard(
  state: GameState,
  customCards: CustomCard[],
): { card: CardDef; queue: CardDef[] } | null {
  let queue = state.queue
  if (queue.length === 0) {
    const deck = buildDeck(state.packs, state.players.length, customCards)
    if (deck.length === 0) return null
    queue = shuffle(deck)
    const lastId = state.turns[state.turns.length - 1]?.card.def.id
    if (queue.length > 1 && queue[0].id === lastId) {
      ;[queue[0], queue[1]] = [queue[1], queue[0]]
    }
  }
  const [card, ...rest] = queue
  return { card, queue: rest }
}

let ruleCounter = 0

export function advance(state: GameState, customCards: CustomCard[]): GameState {
  // Replaying a card the group already saw: just move the pointer.
  if (state.index < state.turns.length - 1) {
    return { ...state, index: state.index + 1 }
  }

  const taken = takeCard(state, customCards)
  if (!taken) return state

  const previous = state.turns[state.index]
  // A `null` remaining marks a rule that lasts the whole game: never counted
  // down, never expired.
  const banner = (previous?.carry ?? [])
    .map((rule) => (rule.remaining === null ? rule : { ...rule, remaining: rule.remaining - 1 }))
    .filter((rule) => rule.remaining === null || rule.remaining > 0)

  const card = drawCard(taken.card, state.players, state.recent)

  const carry = [...banner]
  if (card.def.kind === 'rule') {
    ruleCounter += 1
    const fresh = {
      key: `${card.def.id}-${ruleCounter}`,
      cardId: card.def.id,
      text: card.text,
      remaining: card.def.duration ?? null,
    }
    // The deck reshuffles, so a rule can come round again. Refresh it in place
    // rather than stacking a second copy of the same rule on the banner.
    const existing = carry.findIndex((rule) => rule.cardId === fresh.cardId)
    if (existing === -1) carry.push(fresh)
    else carry[existing] = fresh
  }

  const turn: Turn = { card, banner, carry }

  return {
    ...state,
    queue: taken.queue,
    turns: [...state.turns, turn],
    index: state.turns.length,
    recent: [...state.recent, ...card.players].slice(-12),
  }
}

export function rewind(state: GameState): GameState {
  if (state.index <= 0) return state
  return { ...state, index: state.index - 1 }
}

export function currentTurn(state: GameState): Turn | null {
  return state.turns[state.index] ?? null
}
