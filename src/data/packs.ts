import type { CardDef, Localized, PackId } from '../types'
import { classique } from './classique'

export interface PackMeta {
  id: PackId
  name: Localized
  tagline: Localized
  /** Single flat colour, used for the pack's cards and its swatch. */
  color: string
  /** Typographic mark shown in the swatch, in place of an icon. */
  mark: string
  cards: CardDef[]
}

export const PACKS: PackMeta[] = [
  {
    id: 'classique',
    name: { fr: 'Classique', en: 'Classic' },
    tagline: {
      fr: 'Le paquet de base. Questions, gages, règles et mini-jeux.',
      en: 'The base deck. Questions, dares, rules and mini-games.',
    },
    color: '#2F4FE0',
    mark: 'I',
    cards: classique,
  },
  {
    id: 'perso',
    name: { fr: 'Mes cartes', en: 'My cards' },
    tagline: {
      fr: 'Les cartes que vous écrivez vous-mêmes.',
      en: 'The cards you write yourselves.',
    },
    color: '#6B4FD8',
    mark: 'II',
    cards: [],
  },
]

export const PACK_BY_ID = new Map(PACKS.map((pack) => [pack.id, pack]))

export function packColor(id: PackId): string {
  return PACK_BY_ID.get(id)?.color ?? '#2B2B33'
}

export function packName(id: PackId): Localized {
  return PACK_BY_ID.get(id)?.name ?? { fr: '', en: '' }
}
