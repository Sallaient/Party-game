export type Lang = 'fr' | 'en'

/** Every piece of card copy exists in both languages. */
export interface Localized {
  fr: string
  en: string
}

export type PackId = 'classique' | 'defis' | 'hot' | 'hardcore' | 'perso'

/**
 * How a card behaves once drawn.
 * - `action`   : one player does something right now
 * - `question` : one player answers, or drinks
 * - `duel`     : two players face off, the loser drinks
 * - `group`    : everyone is involved ("tout le monde qui...")
 * - `rule`     : stays on screen and applies for N turns
 * - `timer`    : a countdown runs, something must happen before it ends
 * - `minigame` : a short group game explained on the card
 */
export type CardKind = 'action' | 'question' | 'duel' | 'group' | 'rule' | 'timer' | 'minigame'

export interface CardDef {
  id: string
  pack: PackId
  kind: CardKind
  /**
   * How many *distinct* players the engine must pick for this card.
   * Referenced from the text as {p1}, {p2}, {p3}.
   */
  players: number
  text: Localized
  /** Turns a `rule` card stays active. Ignored for other kinds. */
  duration?: number
  /** Countdown length in seconds for a `timer` card. */
  seconds?: number
}

/** A card after the engine has picked players and frozen the copy. */
export interface DrawnCard {
  /** Unique per draw, so React remounts (and re-animates) on every new card. */
  key: string
  def: CardDef
  /** Player names chosen for this draw, in {p1}, {p2}, {p3} order. */
  players: string[]
  /** Card copy with placeholders already replaced, per language. */
  text: Localized
}

export interface ActiveRule {
  key: string
  cardId: string
  text: Localized
  /** Turns left, decremented at the start of each new draw. */
  remaining: number
}

export interface CustomCard {
  id: string
  kind: CardKind
  players: number
  text: string
  /** Language the player wrote it in; shown in both, untranslated. */
  lang: Lang
  duration?: number
  seconds?: number
  createdAt: number
}

export interface Settings {
  lang: Lang
  haptics: boolean
  adultUnlocked: boolean
}

export type Screen = 'home' | 'players' | 'packs' | 'game' | 'custom' | 'settings'
