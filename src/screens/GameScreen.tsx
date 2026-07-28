import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { advance, createGame, currentTurn, rewind, type GameState } from '../game/engine'
import { GameCard } from '../components/GameCard'
import { RuleBanner } from '../components/RuleBanner'
import { Modal } from '../components/Modal'
import { ChevronLeft, Close } from '../components/Icon'

export function GameScreen({ onQuit }: { onQuit: () => void }) {
  const { s, players, packs, customCards, buzz } = useApp()
  const [confirmQuit, setConfirmQuit] = useState(false)

  // The deck is built once per game so mid-game setting changes cannot reshuffle
  // the table out from under the players.
  const [state, setState] = useState<GameState>(() =>
    advance(createGame(players, packs, customCards), customCards),
  )

  const next = useCallback(() => {
    setState((prev) => {
      const nextState = advance(prev, customCards)
      if (nextState !== prev) buzz(12)
      return nextState
    })
  }, [customCards, buzz])

  const previous = useCallback(() => {
    setState((prev) => rewind(prev))
  }, [])

  // Keyboard support: handy when someone casts the phone to a TV.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        next()
      }
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'Escape') setConfirmQuit(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, previous])

  const turn = currentTurn(state)

  if (!turn) {
    return (
      <div className="screen items-start justify-center gap-5">
        <p className="text-[0.9375rem] leading-snug text-white/60">{s('gameEmptyDeck')}</p>
        <button type="button" onClick={onQuit} className="btn-secondary">
          {s('back')}
        </button>
      </div>
    )
  }

  return (
    <div className="screen py-3">
      <div className="flex shrink-0 items-center pb-3">
        <button
          type="button"
          onClick={previous}
          disabled={state.index <= 0}
          aria-label={s('back')}
          className="icon-btn -ml-2"
        >
          <ChevronLeft />
        </button>

        <span className="tabular label flex-1 text-center text-white/35">
          {s('gameCardCount')} {state.index + 1}
        </span>

        <button
          type="button"
          onClick={() => setConfirmQuit(true)}
          aria-label={s('gameQuit')}
          className="icon-btn -mr-2"
        >
          <Close />
        </button>
      </div>

      <RuleBanner rules={turn.banner} />

      <div className="flex min-h-0 flex-1 flex-col pb-3">
        <AnimatePresence mode="wait">
          <GameCard
            key={turn.card.key}
            card={turn.card}
            onNext={next}
            onPrevious={previous}
            canGoBack={state.index > 0}
          />
        </AnimatePresence>
      </div>

      <p className="label shrink-0 pb-2 text-center text-white/20">{s('gameTapToContinue')}</p>

      <Modal
        open={confirmQuit}
        onClose={() => setConfirmQuit(false)}
        title={s('gameQuitConfirm')}
        footer={
          <>
            <button
              type="button"
              onClick={() => setConfirmQuit(false)}
              className="btn-secondary flex-1"
            >
              {s('cancel')}
            </button>
            <button type="button" onClick={onQuit} className="btn-primary flex-1">
              {s('gameQuit')}
            </button>
          </>
        }
      >
        <span className="sr-only">{s('gameQuitConfirm')}</span>
      </Modal>
    </div>
  )
}
