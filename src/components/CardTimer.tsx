import { useEffect, useRef, useState } from 'react'
import { useApp } from '../store/AppContext'

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
  const circumference = 2 * Math.PI * 34

  return (
    <div
      className="flex flex-col items-center gap-3"
      onClick={(event) => event.stopPropagation()}
      onPointerDownCapture={(event) => event.stopPropagation()}
    >
      {running || finished ? (
        <div className="relative flex h-24 w-24 items-center justify-center">
          <svg viewBox="0 0 80 80" className="absolute h-full w-full -rotate-90">
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="6" />
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 200ms linear' }}
            />
          </svg>
          <span className="text-3xl font-black tabular-nums">{remaining}</span>
        </div>
      ) : (
        <button type="button" onClick={start} className="btn bg-black/25 text-white backdrop-blur">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 2M9 2h6" strokeLinecap="round" />
          </svg>
          {s('gameStartTimer')} · {seconds}s
        </button>
      )}
      {finished && (
        <p className="animate-pop-in text-sm font-bold uppercase tracking-wide">
          {s('gameTimerDone')}
        </p>
      )}
    </div>
  )
}
