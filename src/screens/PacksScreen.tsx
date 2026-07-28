import { useState } from 'react'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Modal } from '../components/Modal'
import { Check } from '../components/Icon'
import { PACKS, type PackMeta } from '../data/packs'
import type { PackId } from '../types'

export function PacksScreen({ onBack }: { onBack: () => void }) {
  const { s, n, L, packs, setPacks, customCards, settings, unlockAdult, buzz } = useApp()
  const [gateFor, setGateFor] = useState<PackId | null>(null)

  const cardCount = (pack: PackMeta) =>
    pack.id === 'perso' ? customCards.length : pack.cards.length

  const toggle = (pack: PackMeta) => {
    const selected = packs.includes(pack.id)
    if (!selected && pack.adult && !settings.adultUnlocked) {
      setGateFor(pack.id)
      return
    }
    buzz(10)
    setPacks(selected ? packs.filter((id) => id !== pack.id) : [...packs, pack.id])
  }

  const confirmAdult = () => {
    unlockAdult()
    if (gateFor && !packs.includes(gateFor)) setPacks([...packs, gateFor])
    setGateFor(null)
    buzz(10)
  }

  return (
    <div className="screen">
      <ScreenHeader title={s('packsTitle')} onBack={onBack} backLabel={s('back')} />
      <ScreenBody>
        <p className="mb-5 text-[0.875rem] leading-snug text-white/45">{s('packsSubtitle')}</p>

        <div className="min-h-0 flex-1 overflow-y-auto pb-4">
          <div className="surface divide-y divide-ink-800 overflow-hidden">
            {PACKS.map((pack) => {
              const selected = packs.includes(pack.id)
              const count = cardCount(pack)
              const empty = pack.id === 'perso' && count === 0
              return (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => toggle(pack)}
                  disabled={empty}
                  aria-pressed={selected}
                  className="flex w-full items-start gap-3.5 px-4 py-4 text-left transition-colors active:bg-ink-850 disabled:opacity-35"
                >
                  {/* Swatch carries the pack colour used by its cards in play. */}
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[0.6875rem] font-bold tracking-wider"
                    style={{
                      backgroundColor: selected ? pack.color : 'transparent',
                      boxShadow: selected ? 'none' : `inset 0 0 0 1px ${pack.color}`,
                      color: selected ? '#fff' : pack.color,
                    }}
                  >
                    {pack.mark}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="truncate text-[0.9375rem] font-medium">{L(pack.name)}</span>
                      {pack.adult && (
                        <span className="label shrink-0 rounded border border-ink-600 px-1 py-0.5 text-white/40">
                          {s('adultBadge')}
                        </span>
                      )}
                    </span>
                    {/* Taglines wrap rather than truncate: a half-sentence tells
                        the group nothing about what they are turning on. */}
                    <span className="mt-1 block text-[0.8125rem] leading-snug text-white/40">
                      {empty ? s('packsEmptyCustom') : L(pack.tagline)}
                    </span>
                    <span className="tabular label mt-2 block text-white/25">
                      {n(count, 'unitCardOne', 'unitCardMany')}
                    </span>
                  </span>

                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      selected ? 'border-bone bg-bone text-ink-950' : 'border-ink-600'
                    }`}
                  >
                    {selected && <Check className="h-3.5 w-3.5" />}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          disabled={packs.length === 0}
          className="btn-primary mb-4 w-full"
        >
          {packs.length === 0 ? s('packsNeedOne') : s('done')}
        </button>
      </ScreenBody>

      <Modal
        open={gateFor !== null}
        onClose={() => setGateFor(null)}
        title={s('adultGateTitle')}
        footer={
          <>
            <button type="button" onClick={() => setGateFor(null)} className="btn-secondary flex-1">
              {s('cancel')}
            </button>
            <button type="button" onClick={confirmAdult} className="btn-primary flex-1">
              {s('adultGateConfirm')}
            </button>
          </>
        }
      >
        {s('adultGateBody')}
      </Modal>
    </div>
  )
}
