import { useState } from 'react'
import { useApp } from '../store/AppContext'
import { Modal } from '../components/Modal'
import { PACKS } from '../data/packs'
import { Cards, ChevronLeft, Pencil, People, Play, Settings } from '../components/Icon'
import type { Screen } from '../types'

interface Props {
  go: (screen: Screen) => void
  onPlay: () => void
  canPlay: boolean
}

export function HomeScreen({ go, onPlay, canPlay }: Props) {
  const { s, n, players, packs, customCards } = useApp()
  const [howTo, setHowTo] = useState(false)

  const chosen = PACKS.filter((pack) => packs.includes(pack.id))
  const deckSize = chosen.reduce(
    (total, pack) => total + (pack.id === 'perso' ? customCards.length : pack.cards.length),
    0,
  )

  return (
    <div className="screen py-6">
      {/* Masthead: the colour bar is the pack palette, doubling as a legend. */}
      <div className="flex shrink-0 gap-1 pb-6">
        {PACKS.map((pack) => (
          <span
            key={pack.id}
            className="h-1 flex-1 rounded-full transition-opacity"
            style={{
              backgroundColor: pack.color,
              opacity: packs.includes(pack.id) ? 1 : 0.18,
            }}
          />
        ))}
      </div>

      {/* Masthead sits high and the controls sit low, so the page has one
          deliberate void rather than two accidental ones. */}
      <div className="flex flex-1 flex-col pt-4">
        <h1 className="text-[3.25rem] font-bold leading-none -tracking-[0.035em]">
          {s('appName')}
        </h1>
        <p className="mt-3 max-w-[17rem] text-[0.9375rem] leading-snug text-white/45">
          {s('tagline')}
        </p>

        <dl className="mt-8 flex gap-8">
          <div>
            <dt className="label text-white/35">{s('homePlayers')}</dt>
            <dd className="tabular mt-1.5 text-2xl font-semibold -tracking-[0.02em]">
              {players.length}
            </dd>
          </div>
          <div>
            <dt className="label text-white/35">{s('homePacks')}</dt>
            <dd className="tabular mt-1.5 text-2xl font-semibold -tracking-[0.02em]">
              {packs.length}
            </dd>
          </div>
          <div>
            <dt className="label text-white/35">{s('unitCardMany')}</dt>
            <dd className="tabular mt-1.5 text-2xl font-semibold -tracking-[0.02em]">{deckSize}</dd>
          </div>
        </dl>
      </div>

      <div className="shrink-0 space-y-2 pb-1">
        <button type="button" onClick={onPlay} disabled={!canPlay} className="btn-primary w-full">
          <Play className="h-4 w-4" />
          {s('homeStart')}
        </button>

        <nav className="surface divide-y divide-ink-800 overflow-hidden">
          <MenuRow
            label={s('homePlayers')}
            hint={n(players.length, 'unitPlayerOne', 'unitPlayerMany')}
            icon={<People />}
            onClick={() => go('players')}
          />
          <MenuRow
            label={s('homePacks')}
            hint={n(packs.length, 'unitPackOne', 'unitPackMany')}
            icon={<Cards />}
            onClick={() => go('packs')}
          />
          <MenuRow
            label={s('homeCustom')}
            hint={n(customCards.length, 'unitCardOne', 'unitCardMany')}
            icon={<Pencil />}
            onClick={() => go('custom')}
          />
          <MenuRow label={s('homeSettings')} icon={<Settings />} onClick={() => go('settings')} />
        </nav>

        <button
          type="button"
          onClick={() => setHowTo(true)}
          className="w-full py-3 text-[0.8125rem] font-normal text-white/35 transition-colors active:text-white"
        >
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
        <p className="mt-4 border-l-2 border-ink-600 pl-3 text-white/50">{s('howToSafety')}</p>
      </Modal>
    </div>
  )
}

function MenuRow({
  label,
  hint,
  icon,
  onClick,
}: {
  label: string
  hint?: string
  icon: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors active:bg-ink-850"
    >
      <span className="text-white/40">{icon}</span>
      <span className="flex-1 text-[0.9375rem] font-medium">{label}</span>
      {hint && <span className="tabular text-[0.8125rem] text-white/35">{hint}</span>}
      <ChevronLeft className="h-4 w-4 rotate-180 text-white/25" />
    </button>
  )
}
