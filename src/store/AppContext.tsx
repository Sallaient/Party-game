import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CustomCard, Lang, Localized, PackId, Settings } from '../types'
import { storage } from './persist'
import { STRINGS, type StringKey } from '../i18n/strings'

interface AppValue {
  settings: Settings
  setLang: (lang: Lang) => void
  setHaptics: (on: boolean) => void

  players: string[]
  setPlayers: (players: string[]) => void

  packs: PackId[]
  setPacks: (packs: PackId[]) => void

  customCards: CustomCard[]
  upsertCustomCard: (card: CustomCard) => void
  removeCustomCard: (id: string) => void

  resetAll: () => void

  /** UI string lookup in the active language. */
  s: (key: StringKey) => string
  /** Counted noun, e.g. n(1, 'unitPlayerOne', 'unitPlayerMany') -> "1 joueur". */
  n: (count: number, one: StringKey, many: StringKey) => string
  /** Card-content lookup in the active language. */
  L: (text: Localized) => string
  buzz: (pattern?: number | number[]) => void
}

const AppContext = createContext<AppValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => storage.loadSettings())
  const [players, setPlayersState] = useState<string[]>(() => storage.loadPlayers())
  const [packs, setPacksState] = useState<PackId[]>(() => storage.loadPacks())
  const [customCards, setCustomCards] = useState<CustomCard[]>(() => storage.loadCustom())

  useEffect(() => storage.saveSettings(settings), [settings])
  useEffect(() => storage.savePlayers(players), [players])
  useEffect(() => storage.savePacks(packs), [packs])
  useEffect(() => storage.saveCustom(customCards), [customCards])

  useEffect(() => {
    document.documentElement.lang = settings.lang
  }, [settings.lang])

  const setLang = useCallback((lang: Lang) => setSettings((prev) => ({ ...prev, lang })), [])
  const setHaptics = useCallback(
    (haptics: boolean) => setSettings((prev) => ({ ...prev, haptics })),
    [],
  )

  const setPlayers = useCallback((next: string[]) => setPlayersState(next), [])
  const setPacks = useCallback((next: PackId[]) => setPacksState(next), [])

  const upsertCustomCard = useCallback((card: CustomCard) => {
    setCustomCards((prev) => {
      const index = prev.findIndex((existing) => existing.id === card.id)
      if (index === -1) return [card, ...prev]
      const next = prev.slice()
      next[index] = card
      return next
    })
  }, [])

  const removeCustomCard = useCallback((id: string) => {
    setCustomCards((prev) => prev.filter((card) => card.id !== id))
  }, [])

  const resetAll = useCallback(() => {
    setPlayersState([])
    setPacksState(['classique'])
    setCustomCards([])
  }, [])

  const buzz = useCallback(
    (pattern: number | number[] = 12) => {
      if (!settings.haptics) return
      navigator.vibrate?.(pattern)
    },
    [settings.haptics],
  )

  const value = useMemo<AppValue>(
    () => ({
      settings,
      setLang,
      setHaptics,
      players,
      setPlayers,
      packs,
      setPacks,
      customCards,
      upsertCustomCard,
      removeCustomCard,
      resetAll,
      s: (key: StringKey) => STRINGS[key][settings.lang],
      n: (count: number, one: StringKey, many: StringKey) => {
        const singular = settings.lang === 'fr' ? count < 2 : count === 1
        return `${count} ${STRINGS[singular ? one : many][settings.lang]}`
      },
      L: (text: Localized) => text[settings.lang],
      buzz,
    }),
    [
      settings,
      setLang,
      setHaptics,
      players,
      setPlayers,
      packs,
      setPacks,
      customCards,
      upsertCustomCard,
      removeCustomCard,
      resetAll,
      buzz,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp(): AppValue {
  const value = useContext(AppContext)
  if (!value) throw new Error('useApp must be used inside <AppProvider>')
  return value
}
