import { AnimatePresence, motion } from 'framer-motion'
import type { ActiveRule } from '../types'
import { useApp } from '../store/AppContext'

export function RuleBanner({ rules }: { rules: ActiveRule[] }) {
  const { s, L } = useApp()

  return (
    <AnimatePresence initial={false}>
      {rules.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 overflow-hidden"
        >
          <div className="mb-3 space-y-1.5 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-3">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-amber-200/80">
              📜 {s('gameRules')}
            </p>
            {rules.map((rule) => (
              <div key={rule.key} className="flex items-start gap-2">
                <p className="flex-1 text-sm font-medium leading-snug text-amber-50">
                  {L(rule.text)}
                </p>
                <span className="mt-0.5 shrink-0 rounded-full bg-amber-300/20 px-2 py-0.5 text-[0.7rem] font-bold tabular-nums text-amber-100">
                  {rule.remaining}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
