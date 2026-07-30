import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Localized } from '../types'
import { useApp } from '../store/AppContext'

/**
 * Hides a trivia answer until the reader asks for it. Remounts with each card
 * (GameCard is keyed by draw), so an answer never leaks onto the next card.
 */
export function CardReveal({ answer }: { answer: Localized }) {
  const { s, L, buzz } = useApp()
  const [shown, setShown] = useState(false)

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      onPointerDownCapture={(event) => event.stopPropagation()}
    >
      {shown ? (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16 }}
          className="rounded-lg border border-white/30 bg-black/20 px-4 py-3"
        >
          <p className="text-[1.0625rem] font-semibold leading-snug">{L(answer)}</p>
        </motion.div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setShown(true)
            buzz(15)
          }}
          className="btn w-full border border-white/30 bg-black/15 text-white active:bg-black/25"
        >
          {s('gameReveal')}
        </button>
      )}
    </div>
  )
}
