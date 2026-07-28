import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Modal } from '../components/Modal'
import { Minus, Plus, Trash } from '../components/Icon'
import { countPlaceholders } from '../game/template'
import { packColor } from '../data/packs'
import type { CardKind, CustomCard } from '../types'
import type { StringKey } from '../i18n/strings'

const KINDS: { kind: CardKind; label: StringKey }[] = [
  { kind: 'action', label: 'kindAction' },
  { kind: 'question', label: 'kindQuestion' },
  { kind: 'duel', label: 'kindDuel' },
  { kind: 'group', label: 'kindGroup' },
  { kind: 'rule', label: 'kindRule' },
  { kind: 'timer', label: 'kindTimer' },
  { kind: 'minigame', label: 'kindMinigame' },
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
            className="icon-btn -mr-2 text-white/70"
          >
            <Plus />
          </button>
        }
      />
      <ScreenBody>
        <p className="mb-5 text-[0.875rem] leading-snug text-white/45">{s('customSubtitle')}</p>

        <div className="min-h-0 flex-1 overflow-y-auto pb-4">
          {customCards.length === 0 ? (
            <div className="surface px-5 py-10 text-center">
              <p className="text-[0.875rem] text-white/45">{s('customEmpty')}</p>
              <button
                type="button"
                onClick={() => setDraft(emptyDraft(settings.lang))}
                className="btn-secondary mt-4"
              >
                {s('customNew')}
              </button>
            </div>
          ) : (
            <>
              <ul className="surface divide-y divide-ink-800 overflow-hidden">
                <AnimatePresence initial={false}>
                  {customCards.map((card) => {
                    const meta = KINDS.find((entry) => entry.kind === card.kind)
                    return (
                      <motion.li
                        key={card.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-3 px-4 py-3.5"
                      >
                        <span
                          className="mt-1 h-8 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: packColor('perso') }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setDraft(card)
                            setError(null)
                          }}
                          className="min-w-0 flex-1 text-left"
                        >
                          <span className="label block text-white/35">
                            {s(meta?.label ?? 'kindAction')}
                          </span>
                          <span className="mt-1.5 block text-[0.875rem] leading-snug">
                            {card.text}
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPendingDelete(card.id)}
                          aria-label={s('delete')}
                          className="icon-btn -mr-1.5 h-8 w-8"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </motion.li>
                    )
                  })}
                </AnimatePresence>
              </ul>
              <p className="px-1 pt-3 text-[0.75rem] leading-snug text-white/25">
                {s('customPlaceholderHint')}
              </p>
            </>
          )}
        </div>
      </ScreenBody>

      <Modal
        open={draft !== null}
        onClose={() => setDraft(null)}
        title={editing ? s('customEdit') : s('customNew')}
        footer={
          <>
            <button type="button" onClick={() => setDraft(null)} className="btn-secondary flex-1">
              {s('cancel')}
            </button>
            <button type="button" onClick={save} className="btn-primary flex-1">
              {s('save')}
            </button>
          </>
        }
      >
        {draft && (
          <div className="space-y-5">
            <div>
              <label htmlFor="card-text" className="label mb-2 block text-white/35">
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
                    className="rounded border border-ink-700 px-2.5 py-1.5 font-mono text-[0.75rem] text-white/70 transition-colors active:bg-ink-800"
                  >
                    {token}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="label mb-2 block text-white/35">{s('customKindLabel')}</span>
              <div className="flex flex-wrap gap-1.5">
                {KINDS.map((entry) => (
                  <button
                    key={entry.kind}
                    type="button"
                    onClick={() => setDraft({ ...draft, kind: entry.kind })}
                    aria-pressed={draft.kind === entry.kind}
                    className={`rounded border px-2.5 py-1.5 text-[0.75rem] font-medium transition-colors ${
                      draft.kind === entry.kind
                        ? 'border-bone bg-bone text-ink-950'
                        : 'border-ink-700 text-white/60'
                    }`}
                  >
                    {s(entry.label)}
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

            {error && <p className="text-[0.8125rem] text-pack-hardcore">{error}</p>}
          </div>
        )}
      </Modal>

      <Modal
        open={pendingDelete !== null}
        onClose={() => setPendingDelete(null)}
        title={s('customDeleteConfirm')}
        footer={
          <>
            <button
              type="button"
              onClick={() => setPendingDelete(null)}
              className="btn-secondary flex-1"
            >
              {s('cancel')}
            </button>
            <button
              type="button"
              onClick={() => {
                if (pendingDelete) removeCustomCard(pendingDelete)
                setPendingDelete(null)
              }}
              className="btn-danger flex-1"
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
      <span className="label mb-2 block text-white/35">{label}</span>
      <div className="inline-flex items-center overflow-hidden rounded-lg border border-ink-700">
        <button
          type="button"
          onClick={() => onChange(clamp(value - step))}
          aria-label="-"
          className="flex h-10 w-11 items-center justify-center text-white/60 transition-colors active:bg-ink-800"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="tabular w-12 text-center text-[0.9375rem] font-semibold">{value}</span>
        <button
          type="button"
          onClick={() => onChange(clamp(value + step))}
          aria-label="+"
          className="flex h-10 w-11 items-center justify-center text-white/60 transition-colors active:bg-ink-800"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
