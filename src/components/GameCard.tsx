import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { CardKind, DrawnCard } from '../types'
import { packGradient } from '../data/packs'
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

const KIND_EMOJI: Record<CardKind, string> = {
  action: '⚡',
  question: '💬',
  duel: '⚔️',
  group: '👯',
  rule: '📜',
  timer: '⏱️',
  minigame: '🎲',
}

/** Long dares need to shrink so the card never scrolls. */
function textSize(length: number): string {
  if (length < 70) return 'text-[2rem] leading-[1.15]'
  if (length < 120) return 'text-[1.6rem] leading-[1.2]'
  if (length < 190) return 'text-[1.35rem] leading-[1.28]'
  return 'text-[1.15rem] leading-[1.35]'
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
      initial={{ opacity: 0, y: 26, scale: 0.94, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
      drag="x"
      dragSnapToOrigin
      dragElastic={0.14}
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
      className={`relative flex w-full flex-1 cursor-pointer touch-pan-y select-none flex-col
        overflow-hidden rounded-[2rem] bg-gradient-to-br p-6 text-left shadow-2xl shadow-black/50
        ${packGradient(card.def.pack)}`}
    >
      {/* Soft light sweep so the flat gradient reads as a physical card. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/15" />

      <div className="relative flex items-center gap-2">
        <span className="rounded-full bg-black/25 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur">
          {KIND_EMOJI[kind]} {s(KIND_LABEL[kind])}
        </span>
        {kind === 'rule' && card.def.duration && (
          <span className="rounded-full bg-black/25 px-3 py-1.5 text-xs font-bold backdrop-blur">
            {card.def.duration} {s('gameTurnsLeft')}
          </span>
        )}
      </div>

      <div className="relative flex flex-1 items-center justify-center py-6">
        <p className={`text-balance text-center font-extrabold drop-shadow-sm ${textSize(text.length)}`}>
          {text}
        </p>
      </div>

      {kind === 'timer' && card.def.seconds && (
        <div className="relative pb-4">
          <CardTimer seconds={card.def.seconds} cardKey={card.key} />
        </div>
      )}

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {card.players.map((player) => (
            <span
              key={player}
              className="rounded-full bg-black/25 px-2.5 py-1 text-xs font-semibold backdrop-blur"
            >
              {player}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-white/70">
          {s('gameTapToContinue')}
        </span>
      </div>
    </motion.button>
  )
}
