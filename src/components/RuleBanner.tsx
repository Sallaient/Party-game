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
          transition={{ duration: 0.18 }}
          className="shrink-0 overflow-hidden"
        >
          <div className="mb-3 rounded-lg border border-ink-800 bg-ink-900 px-3.5 py-3">
            <p className="label mb-2.5 text-white/35">{s('gameRules')}</p>
            <ul className="space-y-2">
              {rules.map((rule) => (
                <li key={rule.key} className="flex items-start gap-3">
                  <span className="flex-1 text-[0.8125rem] leading-snug text-white/80">
                    {L(rule.text)}
                  </span>
                  <span className="tabular label mt-0.5 shrink-0 text-white/35">
                    {rule.remaining}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
