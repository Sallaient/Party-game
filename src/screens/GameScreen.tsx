import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { advance, createGame, currentTurn, rewind, type GameState } from '../game/engine'
import { GameCard } from '../components/GameCard'
import { RuleBanner } from '../components/RuleBanner'
import { Modal } from '../components/Modal'

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
      <div className="screen items-center justify-center gap-4 text-center">
        <p className="text-lg font-semibold text-white/70">{s('gameEmptyDeck')}</p>
        <button type="button" onClick={onQuit} className="btn-primary">
          {s('back')}
        </button>
      </div>
    )
  }

  return (
    <div className="screen py-3">
      <div className="flex shrink-0 items-center justify-between pb-3">
        <button
          type="button"
          onClick={previous}
          disabled={state.index <= 0}
          aria-label={s('back')}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition active:scale-90 disabled:opacity-25"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
          {s('gameCardCount')} {state.drawn}
        </span>

        <button
          type="button"
          onClick={() => setConfirmQuit(true)}
          aria-label={s('gameQuit')}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <RuleBanner rules={turn.banner} />

      <div className="flex min-h-0 flex-1 flex-col pb-4">
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

      <Modal
        open={confirmQuit}
        onClose={() => setConfirmQuit(false)}
        title={s('gameQuitConfirm')}
        footer={
          <>
            <button type="button" onClick={() => setConfirmQuit(false)} className="btn-ghost flex-1">
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
