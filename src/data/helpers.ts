import type { CardDef, PackId } from '../types'
import { countPlaceholders } from '../game/template'

export type RawCard = Omit<CardDef, 'id' | 'pack' | 'players'> & {
  /**
   * Optional. The number of players is normally derived from the {pN} tokens in
   * the text, which is what actually has to be filled in — declaring it by hand
   * only risks drifting out of sync with the copy.
   */
  players?: number
}

/** Builds a pack, numbering ids automatically so content stays easy to edit. */
export function deck(pack: PackId, prefix: string, cards: RawCard[]): CardDef[] {
  return cards.map((card, index) => ({
    ...card,
    pack,
    id: `${prefix}-${String(index + 1).padStart(3, '0')}`,
    players: Math.max(
      card.players ?? 0,
      countPlaceholders(card.text.fr),
      countPlaceholders(card.text.en),
      countPlaceholders(card.reveal?.fr ?? ''),
      countPlaceholders(card.reveal?.en ?? ''),
    ),
  }))
}
