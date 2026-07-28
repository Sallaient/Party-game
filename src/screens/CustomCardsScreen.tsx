import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Modal } from '../components/Modal'
import { countPlaceholders } from '../game/template'
import type { CardKind, CustomCard } from '../types'
import type { StringKey } from '../i18n/strings'

const KINDS: { kind: CardKind; label: StringKey; emoji: string }[] = [
  { kind: 'action', label: 'kindAction', emoji: '⚡' },
  { kind: 'question', label: 'kindQuestion', emoji: '💬' },
  { kind: 'duel', label: 'kindDuel', emoji: '⚔️' },
  { kind: 'group', label: 'kindGroup', emoji: '👯' },
  { kind: 'rule', label: 'kindRule', emoji: '📜' },
  { kind: 'timer', label: 'kindTimer', emoji: '⏱️' },
  { kind: 'minigame', label: 'kindMinigame', emoji: '🎲' },
]

const emptyDraft = (lang: CustomCard['lang']): CustomCard => ({
  id: crypto.randomUUID(),
  kind: 'action',
  players: 0,
  text: '',
  lang,
  duration: 5,
  seconds: 30,
  createdAt: Date.now(),
})

export function CustomCardsScreen({ onBack }: { onBack: () => void }) {
  const { s, settings, customCards, upsertCustomCard, removeCustomCard, buzz } = useApp()
  const [draft, setDraft] = useState<CustomCard | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pendingDelete, setPendingDelete] = useState<string | null>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const editing = customCards.some((card) => card.id === draft?.id)

  const insertPlaceholder = (token: string) => {
    if (!draft) return
    const field = textRef.current
    const at = field?.selectionStart ?? draft.text.length
    const text = `${draft.text.slice(0, at)}${token}${draft.text.slice(at)}`
    setDraft({ ...draft, text })
    requestAnimationFrame(() => {
      field?.focus()
      field?.setSelectionRange(at + token.length, at + token.length)
    })
  }

  const save = () => {
    if (!draft) return
    const text = draft.text.trim()
    if (!text) {
      setError(s('customNeedText'))
      return
    }
    upsertCustomCard({ ...draft, text, players: countPlaceholders(text) })
    setDraft(null)
    setError(null)
    buzz(10)
  }

  return (
    <div className="screen">
      <ScreenHeader
        title={s('customTitle')}
        onBack={onBack}
        backLabel={s('back')}
        action={
          <button
            type="button"
            onClick={() => {
              setDraft(emptyDraft(settings.lang))
              setError(null)
            }}
            aria-label={s('customNew')}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-night-950 transition active:scale-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </button>
        }
      />
      <ScreenBody>
        <p className="mb-4 text-sm text-white/50">{s('customSubtitle')}</p>

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pb-4">
          {customCards.length === 0 && (
            <div className="surface flex flex-col items-center gap-3 p-8 text-center">
              <span className="text-4xl">✍️</span>
              <p className="text-sm text-white/50">{s('customEmpty')}</p>
              <button
                type="button"
                onClick={() => setDraft(emptyDraft(settings.lang))}
                className="btn-ghost"
              >
                {s('customNew')}
              </button>
            </div>
          )}

          <AnimatePresence initial={false}>
            {customCards.map((card) => {
              const meta = KINDS.find((entry) => entry.kind === card.kind)
              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 24, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.18 }}
                  className="surface flex items-start gap-3 p-4"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDraft(card)
                      setError(null)
                    }}
                    className="min-w-0 flex-1 text-left"
                  >
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">
                      {meta?.emoji} {s(meta?.label ?? 'kindAction')}
                    </span>
                    <p className="mt-1 text-sm leading-snug">{card.text}</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingDelete(card.id)}
                    aria-label={s('delete')}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/35 transition active:scale-90 active:bg-white/10"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {customCards.length > 0 && (
            <p className="px-1 pt-2 text-xs text-white/30">{s('customPlaceholderHint')}</p>
          )}
        </div>
      </ScreenBody>

      <Modal
        open={draft !== null}
        onClose={() => setDraft(null)}
        title={editing ? s('customEdit') : s('customNew')}
        footer={
          <>
            <button type="button" onClick={() => setDraft(null)} className="btn-ghost flex-1">
              {s('cancel')}
            </button>
            <button type="button" onClick={save} className="btn-primary flex-1">
              {s('save')}
            </button>
          </>
        }
      >
        {draft && (
          <div className="space-y-4">
            <div>
              <label htmlFor="card-text" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/40">
                {s('customTextLabel')}
              </label>
              <textarea
                id="card-text"
                ref={textRef}
                value={draft.text}
                onChange={(event) => {
                  setDraft({ ...draft, text: event.target.value })
                  setError(null)
                }}
                rows={3}
                maxLength={280}
                placeholder={s('customTextPlaceholder')}
                className="field resize-none"
              />
              <div className="mt-2 flex gap-1.5">
                {['{p1}', '{p2}', '{p3}'].map((token) => (
                  <button
                    key={token}
                    type="button"
                    onClick={() => insertPlaceholder(token)}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold transition active:scale-95"
                  >
                    + {token}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/40">
                {s('customKindLabel')}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {KINDS.map((entry) => (
                  <button
                    key={entry.kind}
                    type="button"
                    onClick={() => setDraft({ ...draft, kind: entry.kind })}
                    aria-pressed={draft.kind === entry.kind}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition active:scale-95
                      ${draft.kind === entry.kind ? 'bg-white text-night-950' : 'bg-white/10 text-white/70'}`}
                  >
                    {entry.emoji} {s(entry.label)}
                  </button>
                ))}
              </div>
            </div>

            {draft.kind === 'rule' && (
              <NumberField
                label={s('customDurationLabel')}
                value={draft.duration ?? 5}
                min={1}
                max={15}
                onChange={(duration) => setDraft({ ...draft, duration })}
              />
            )}
            {draft.kind === 'timer' && (
              <NumberField
                label={s('customSecondsLabel')}
                value={draft.seconds ?? 30}
                min={5}
                max={180}
                step={5}
                onChange={(seconds) => setDraft({ ...draft, seconds })}
              />
            )}

            {error && <p className="text-sm font-medium text-rose-300">{error}</p>}
          </div>
        )}
      </Modal>

      <Modal
        open={pendingDelete !== null}
        onClose={() => setPendingDelete(null)}
        title={s('customDeleteConfirm')}
        footer={
          <>
            <button type="button" onClick={() => setPendingDelete(null)} className="btn-ghost flex-1">
              {s('cancel')}
            </button>
            <button
              type="button"
              onClick={() => {
                if (pendingDelete) removeCustomCard(pendingDelete)
                setPendingDelete(null)
              }}
              className="btn flex-1 bg-rose-500 text-white"
            >
              {s('delete')}
            </button>
          </>
        }
      >
        <span className="sr-only">{s('customDeleteConfirm')}</span>
      </Modal>
    </div>
  )
}

function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
}) {
  const clamp = (next: number) => Math.min(max, Math.max(min, next))
  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/40">
        {label}
      </span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(clamp(value - step))}
          aria-label="-"
          className="h-10 w-10 rounded-full bg-white/10 text-lg font-bold transition active:scale-90"
        >
          −
        </button>
        <span className="min-w-[3ch] text-center text-lg font-bold tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(clamp(value + step))}
          aria-label="+"
          className="h-10 w-10 rounded-full bg-white/10 text-lg font-bold transition active:scale-90"
        >
          +
        </button>
      </div>
    </div>
  )
}
