import type { CardDef, Localized, PackId } from '../types'
import { classique } from './classique'
import { defis } from './defis'
import { hot } from './hot'
import { hardcore } from './hardcore'

export interface PackMeta {
  id: PackId
  name: Localized
  tagline: Localized
  /** Single flat colour, used for the pack's cards and its swatch. */
  color: string
  /** Typographic mark shown in the swatch, in place of an icon. */
  mark: string
  adult: boolean
  cards: CardDef[]
}

export const PACKS: PackMeta[] = [
  {
    id: 'classique',
    name: { fr: 'Classique', en: 'Classic' },
    tagline: {
      fr: 'Pour lancer la soirée. Tout le monde peut jouer.',
      en: 'To get the night going. Everyone can play.',
    },
    color: '#2F4FE0',
    mark: 'I',
    adult: false,
    cards: classique,
  },
  {
    id: 'defis',
    name: { fr: 'Défis & mini-jeux', en: 'Challenges & games' },
    tagline: {
      fr: 'Chronos, règles qui durent et jeux de groupe.',
      en: 'Timers, lasting rules and group games.',
    },
    color: '#0E8A5F',
    mark: 'II',
    adult: false,
    cards: defis,
  },
  {
    id: 'hot',
    name: { fr: 'Hot', en: 'Hot' },
    tagline: {
      fr: 'Ça chauffe. Réservé aux adultes consentants.',
      en: 'Things heat up. Consenting adults only.',
    },
    color: '#C3286B',
    mark: 'III',
    adult: true,
    cards: hot,
  },
  {
    id: 'hardcore',
    name: { fr: 'Grosse cuite', en: 'Hardcore' },
    tagline: {
      fr: 'Gorgées XXL et gages sans pitié. Buvez responsable.',
      en: 'XXL sips and merciless dares. Drink responsibly.',
    },
    color: '#D2401E',
    mark: 'IV',
    adult: true,
    cards: hardcore,
  },
  {
    id: 'perso',
    name: { fr: 'Mes cartes', en: 'My cards' },
    tagline: {
      fr: 'Les cartes que vous écrivez vous-mêmes.',
      en: 'The cards you write yourselves.',
    },
    color: '#6B4FD8',
    mark: 'V',
    adult: false,
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
