import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { CardKind, DrawnCard } from '../types'
import { packColor, packName } from '../data/packs'
import { useApp } from '../store/AppContext'
import type { StringKey } from '../i18n/strings'
import { CardTimer } from './CardTimer'

const KIND_LABEL: Record<CardKind, StringKey> = {
  action: 'kindAction',
  question: 'kindQuestion',
  duel: 'kindDuel',
  group: 'kindGroup',
  rule: 'kindRule',
  timer: 'kindTimer',
  minigame: 'kindMinigame',
}

/**
 * Long dares step down so a card never scrolls. Sizes are a fixed scale rather
 * than a fluid clamp, so two cards of similar length always look identical.
 */
function textSize(length: number): string {
  if (length < 70) return 'text-[2.125rem] leading-[1.1]'
  if (length < 120) return 'text-[1.75rem] leading-[1.15]'
  if (length < 190) return 'text-[1.375rem] leading-[1.25]'
  return 'text-[1.125rem] leading-[1.4]'
}

interface Props {
  card: DrawnCard
  onNext: () => void
  onPrevious: () => void
  canGoBack: boolean
}

export function GameCard({ card, onNext, onPrevious, canGoBack }: Props) {
  const { s, L } = useApp()
  const text = L(card.text)
  const kind = card.def.kind
  // A swipe ends with a click event on some browsers; ignore it so one gesture
  // never advances two cards.
  const swipedAt = useRef(0)

  return (
    <motion.button
      type="button"
      key={card.key}
      aria-label={text}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      drag="x"
      dragSnapToOrigin
      dragElastic={0.12}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_event, info) => {
        const goForward = info.offset.x < -70 || info.velocity.x < -520
        const goBack = info.offset.x > 70 || info.velocity.x > 520
        if (!goForward && !goBack) return
        swipedAt.current = Date.now()
        if (goForward) onNext()
        else if (canGoBack) onPrevious()
      }}
      onClick={() => {
        if (Date.now() - swipedAt.current < 400) return
        onNext()
      }}
      style={{ backgroundColor: packColor(card.def.pack) }}
      className="flex w-full flex-1 cursor-pointer touch-pan-y select-none flex-col rounded-xl p-5 text-left"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="label text-white/70">{L(packName(card.def.pack))}</span>
        <span className="label text-white/70">{s(KIND_LABEL[kind])}</span>
      </div>
      <div className="mt-3 h-px w-full bg-white/25" />

      <div className="flex flex-1 items-center justify-center py-6">
        <p className={`text-center font-bold -tracking-[0.02em] ${textSize(text.length)}`}>{text}</p>
      </div>

      {kind === 'timer' && card.def.seconds && (
        <div className="pb-5">
          <CardTimer seconds={card.def.seconds} cardKey={card.key} />
        </div>
      )}

      <div className="h-px w-full bg-white/25" />
      <div className="mt-3 flex items-baseline justify-between gap-3">
        {/* Names keep the casing the group typed: uppercasing them mangles
            accented characters, and they are proper nouns, not metadata. */}
        <span className="truncate text-[0.8125rem] font-semibold text-white/75">
          {card.players.length > 0 ? card.players.join(' · ') : ' '}
        </span>
        {kind === 'rule' && card.def.duration && (
          <span className="label shrink-0 text-white/70">
            {card.def.duration} {s('gameTurnsLeft')}
          </span>
        )}
      </div>
    </motion.button>
  )
}
