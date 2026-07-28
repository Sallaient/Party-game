import { useEffect, useRef, useState } from 'react'
import { useApp } from '../store/AppContext'
import { Timer as TimerIcon } from './Icon'

interface Props {
  /** Countdown length. Changing it (i.e. a new card) resets the timer. */
  seconds: number
  cardKey: string
}

export function CardTimer({ seconds, cardKey }: Props) {
  const { s, buzz } = useApp()
  const [remaining, setRemaining] = useState(seconds)
  const [running, setRunning] = useState(false)
  const deadline = useRef(0)

  // A new card means a fresh, unstarted timer.
  useEffect(() => {
    setRemaining(seconds)
    setRunning(false)
  }, [cardKey, seconds])

  useEffect(() => {
    if (!running) return
    const tick = () => {
      const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000))
      setRemaining(left)
      if (left === 0) {
        setRunning(false)
        buzz([120, 80, 120, 80, 220])
      }
    }
    const id = window.setInterval(tick, 200)
    tick()
    return () => window.clearInterval(id)
  }, [running, buzz])

  const start = () => {
    deadline.current = Date.now() + seconds * 1000
    setRemaining(seconds)
    setRunning(true)
    buzz(20)
  }

  const finished = !running && remaining === 0
  const progress = seconds > 0 ? remaining / seconds : 0

  return (
    <div
      className="flex flex-col gap-2.5"
      onClick={(event) => event.stopPropagation()}
      onPointerDownCapture={(event) => event.stopPropagation()}
    >
      {running || finished ? (
        <>
          <div className="flex items-baseline justify-between">
            <span className="label text-white/70">
              {finished ? s('gameTimerDone') : s('kindTimer')}
            </span>
            <span className="tabular text-[2.5rem] font-bold leading-none -tracking-[0.02em]">
              {remaining}
            </span>
          </div>
          {/* A straight bar, not a ring: it reads at a glance across a table. */}
          <div className="h-1 w-full overflow-hidden rounded-full bg-black/25">
            <div
              className="h-full bg-white"
              style={{ width: `${progress * 100}%`, transition: 'width 200ms linear' }}
            />
          </div>
        </>
      ) : (
        <button
          type="button"
          onClick={start}
          className="btn w-full border border-white/30 bg-black/15 text-white active:bg-black/25"
        >
          <TimerIcon className="h-[1.125rem] w-[1.125rem]" />
          {s('gameStartTimer')} · {seconds}s
        </button>
      )}
    </div>
  )
}
