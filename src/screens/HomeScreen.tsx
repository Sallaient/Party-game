import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { Modal } from '../components/Modal'
import { PACKS } from '../data/packs'
import type { Screen } from '../types'

interface Props {
  go: (screen: Screen) => void
  onPlay: () => void
  canPlay: boolean
}

export function HomeScreen({ go, onPlay, canPlay }: Props) {
  const { s, n, L, players, packs, customCards } = useApp()
  const [howTo, setHowTo] = useState(false)

  const chosen = PACKS.filter((pack) => packs.includes(pack.id))

  return (
    <div className="screen justify-between py-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mb-5 text-7xl"
        >
          🍸
        </motion.div>
        <h1 className="bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-5xl font-black tracking-tight text-transparent">
          {s('appName')}
        </h1>
        <p className="mt-3 max-w-[16rem] text-sm text-white/50">{s('tagline')}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-1.5">
          {chosen.map((pack) => (
            <span
              key={pack.id}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
            >
              {pack.emoji} {L(pack.name)}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 pb-2">
        <button type="button" onClick={onPlay} disabled={!canPlay} className="btn-primary w-full text-lg">
          ▶ {s('homeStart')}
        </button>

        <div className="grid grid-cols-2 gap-2.5">
          <MenuTile
            label={s('homePlayers')}
            hint={n(players.length, 'unitPlayerOne', 'unitPlayerMany')}
            emoji="👥"
            onClick={() => go('players')}
          />
          <MenuTile
            label={s('homePacks')}
            hint={n(packs.length, 'unitPackOne', 'unitPackMany')}
            emoji="🎴"
            onClick={() => go('packs')}
          />
          <MenuTile
            label={s('homeCustom')}
            hint={n(customCards.length, 'unitCardOne', 'unitCardMany')}
            emoji="✍️"
            onClick={() => go('custom')}
          />
          <MenuTile label={s('homeSettings')} hint="" emoji="⚙️" onClick={() => go('settings')} />
        </div>

        <button type="button" onClick={() => setHowTo(true)} className="btn-quiet w-full text-sm">
          {s('homeHowTo')}
        </button>
      </div>

      <Modal
        open={howTo}
        onClose={() => setHowTo(false)}
        title={s('homeHowTo')}
        footer={
          <button type="button" onClick={() => setHowTo(false)} className="btn-primary w-full">
            {s('close')}
          </button>
        }
      >
        <p>{s('howToBody')}</p>
        <p className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-white/60">
          ⚠️ {s('howToSafety')}
        </p>
      </Modal>
    </div>
  )
}

function MenuTile({
  label,
  hint,
  emoji,
  onClick,
}: {
  label: string
  hint: string
  emoji: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="surface flex flex-col items-start gap-0.5 p-4 text-left transition active:scale-[0.97]"
    >
      <span className="text-xl">{emoji}</span>
      <span className="text-sm font-semibold">{label}</span>
      {hint && <span className="text-xs text-white/40">{hint}</span>}
    </button>
  )
}
