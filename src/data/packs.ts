import type { CardDef, Localized, PackId } from '../types'
import { classique } from './classique'
import { defis } from './defis'
import { hot } from './hot'
import { hardcore } from './hardcore'

export interface PackMeta {
  id: PackId
  name: Localized
  tagline: Localized
  emoji: string
  /** Tailwind gradient used for the pack tile and its cards. */
  gradient: string
  adult: boolean
  cards: CardDef[]
}

export const PACKS: PackMeta[] = [
  {
    id: 'classique',
    name: { fr: 'Classique', en: 'Classic' },
    tagline: {
      fr: "Pour lancer la soirée. Tout le monde peut jouer.",
      en: 'To get the night going. Everyone can play.',
    },
    emoji: '🍻',
    gradient: 'from-sky-500 via-indigo-500 to-violet-600',
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
    emoji: '🎯',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
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
    emoji: '🔥',
    gradient: 'from-rose-500 via-pink-600 to-fuchsia-600',
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
    emoji: '💀',
    gradient: 'from-orange-500 via-red-600 to-rose-700',
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
    emoji: '✍️',
    gradient: 'from-amber-400 via-orange-500 to-amber-600',
    adult: false,
    cards: [],
  },
]

export const PACK_BY_ID = new Map(PACKS.map((pack) => [pack.id, pack]))

export function packGradient(id: PackId): string {
  return PACK_BY_ID.get(id)?.gradient ?? 'from-slate-600 to-slate-800'
}

/** Card counts, used on the pack picker. Custom cards are counted at runtime. */
export function builtInCardCount(id: PackId): number {
  return PACK_BY_ID.get(id)?.cards.length ?? 0
}
