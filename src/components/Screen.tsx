import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from './Icon'

interface HeaderProps {
  title: string
  onBack?: () => void
  backLabel: string
  action?: ReactNode
}

export function ScreenHeader({ title, onBack, backLabel, action }: HeaderProps) {
  return (
    <header className="flex shrink-0 items-center gap-1 py-4">
      {onBack ? (
        <button type="button" onClick={onBack} aria-label={backLabel} className="icon-btn -ml-2">
          <ChevronLeft />
        </button>
      ) : (
        <span className="w-1" />
      )}
      <h1 className="flex-1 truncate text-[1.0625rem] font-semibold -tracking-[0.01em]">{title}</h1>
      {action}
    </header>
  )
}

/** Shared enter/exit transition so every screen feels like one app. */
export function ScreenBody({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className="flex min-h-0 flex-1 flex-col"
    >
      {children}
    </motion.div>
  )
}

/** Section heading used down the settings and info screens. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="label mb-2 px-0.5 text-white/35">{children}</p>
}
