import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
  onBack?: () => void
  backLabel: string
  action?: ReactNode
}

export function ScreenHeader({ title, onBack, backLabel, action }: HeaderProps) {
  return (
    <header className="flex shrink-0 items-center gap-2 py-4">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label={backLabel}
          className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition active:scale-90 active:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : (
        <span className="w-2" />
      )}
      <h1 className="flex-1 truncate text-xl font-bold">{title}</h1>
      {action}
    </header>
  )
}

/** Shared enter/exit transition so every screen feels like one app. */
export function ScreenBody({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-h-0 flex-1 flex-col"
    >
      {children}
    </motion.div>
  )
}
