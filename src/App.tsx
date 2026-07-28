import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useApp } from './store/AppContext'
import { HomeScreen } from './screens/HomeScreen'
import { PlayersScreen } from './screens/PlayersScreen'
import { PacksScreen } from './screens/PacksScreen'
import { GameScreen } from './screens/GameScreen'
import { CustomCardsScreen } from './screens/CustomCardsScreen'
import { SettingsScreen } from './screens/SettingsScreen'
import { buildDeck } from './game/engine'
import type { Screen } from './types'

export function App() {
  const { players, packs, customCards } = useApp()
  const [screen, setScreen] = useState<Screen>('home')
  /** Remounts GameScreen so "Start" always deals a fresh deck. */
  const [gameId, setGameId] = useState(0)

  const go = useCallback((next: Screen) => setScreen(next), [])
  const home = useCallback(() => setScreen('home'), [])

  const deckSize = buildDeck(packs, players.length, customCards).length
  // With fewer than 2 players the button stays live and routes to the roster
  // instead of dead-ending; an empty deck is the only true blocker.
  const canPlay = players.length < 2 || deckSize > 0

  const startGame = useCallback(() => {
    if (players.length < 2) {
      setScreen('players')
      return
    }
    setGameId((id) => id + 1)
    setScreen('game')
  }, [players.length])

  return (
    <div className="aurora h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === 'home' && (
          <HomeScreen key="home" go={go} onPlay={startGame} canPlay={canPlay} />
        )}
        {screen === 'players' && <PlayersScreen key="players" onBack={home} />}
        {screen === 'packs' && <PacksScreen key="packs" onBack={home} />}
        {screen === 'custom' && <CustomCardsScreen key="custom" onBack={home} />}
        {screen === 'settings' && <SettingsScreen key="settings" onBack={home} />}
        {screen === 'game' && <GameScreen key={`game-${gameId}`} onQuit={home} />}
      </AnimatePresence>
    </div>
  )
}
