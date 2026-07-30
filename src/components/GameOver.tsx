import { motion } from 'framer-motion'
import type { ActiveRule } from '../types'
import { useApp } from '../store/AppContext'
import { ChevronLeft, Play } from './Icon'

interface Props {
  cardsPlayed: number
  players: string[]
  /** Rules that were still in force on the last card. */
  rules: ActiveRule[]
  onReplay: () => void
  onQuit: () => void
  onBack: () => void
}

export function GameOver({ cardsPlayed, players, rules, onReplay, onQuit, onBack }: Props) {
  const { s, L } = useApp()
  // Rules that never expire are the ones worth carrying into the next round.
  const standing = rules.filter((rule) => rule.remaining === null)

  return (
    <div className="screen py-3">
      <div className="flex shrink-0 items-center pb-3">
        <button type="button" onClick={onBack} aria-label={s('back')} className="icon-btn -ml-2">
          <ChevronLeft />
        </button>
        <span className="flex-1" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-0 flex-1 flex-col"
      >
        {/* Top-anchored like the home masthead, so the page has one deliberate
            void above the actions rather than two around the middle. */}
        <div className="flex flex-1 flex-col pt-4">
          <h1 className="text-[2.75rem] font-bold leading-none -tracking-[0.035em]">
            {s('gameOverTitle')}
          </h1>
          <p className="mt-3 max-w-[18rem] text-[0.9375rem] leading-snug text-white/45">
            {s('gameOverBody')}
          </p>

          <dl className="mt-8 flex gap-8">
            <div>
              <dt className="label text-white/35">{s('unitCardMany')}</dt>
              <dd className="tabular mt-1.5 text-2xl font-semibold -tracking-[0.02em]">
                {cardsPlayed}
              </dd>
            </div>
            <div>
              <dt className="label text-white/35">{s('homePlayers')}</dt>
              <dd className="tabular mt-1.5 text-2xl font-semibold -tracking-[0.02em]">
                {players.length}
              </dd>
            </div>
          </dl>

          {standing.length > 0 && (
            <div className="mt-8 max-h-[26vh] overflow-y-auto rounded-lg border border-ink-800 bg-ink-900 px-3.5 py-3">
              <p className="label mb-2.5 text-white/35">{s('gameOverRules')}</p>
              <ul className="space-y-2">
                {standing.map((rule) => (
                  <li key={rule.key} className="text-[0.8125rem] leading-snug text-white/80">
                    {L(rule.text)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="shrink-0 space-y-2 pb-4">
          <button type="button" onClick={onReplay} className="btn-primary w-full">
            <Play className="h-4 w-4" />
            {s('gameOverReplay')}
          </button>
          <button type="button" onClick={onQuit} className="btn-secondary w-full">
            {s('gameOverHome')}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
