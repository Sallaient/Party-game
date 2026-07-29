import type { CustomCard, PackId, Settings } from '../types'
import { PACKS } from '../data/packs'

const PACK_IDS = new Set<PackId>(PACKS.map((pack) => pack.id))

const KEYS = {
  players: 'pg.players',
  packs: 'pg.packs',
  settings: 'pg.settings',
  custom: 'pg.customCards',
} as const

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Private browsing or a full quota: the game still works, it just forgets.
  }
}

const defaultSettings: Settings = {
  lang: navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en',
  haptics: true,
}

export const storage = {
  loadPlayers: (): string[] => read<string[]>(KEYS.players, []),
  savePlayers: (players: string[]) => write(KEYS.players, players),

  /**
   * Drops pack ids that no longer exist, so a device that played an earlier
   * version does not carry a dead selection forward.
   */
  loadPacks: (): PackId[] => {
    const stored = read<PackId[]>(KEYS.packs, ['classique'])
    const known = stored.filter((id) => PACK_IDS.has(id))
    return known.length > 0 ? known : ['classique']
  },
  savePacks: (packs: PackId[]) => write(KEYS.packs, packs),

  loadSettings: (): Settings => ({ ...defaultSettings, ...read(KEYS.settings, {}) }),
  saveSettings: (settings: Settings) => write(KEYS.settings, settings),

  loadCustom: (): CustomCard[] => read<CustomCard[]>(KEYS.custom, []),
  saveCustom: (cards: CustomCard[]) => write(KEYS.custom, cards),
}
