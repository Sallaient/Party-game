import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Modal } from '../components/Modal'
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
        <p className="mb-4 text-sm text-white/50">{s('packsSubtitle')}</p>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pb-4">
          {PACKS.map((pack) => {
            const selected = packs.includes(pack.id)
            const count = cardCount(pack)
            const empty = pack.id === 'perso' && count === 0
            return (
              <motion.button
                key={pack.id}
                type="button"
                whileTap={{ scale: 0.975 }}
                onClick={() => toggle(pack)}
                disabled={empty}
                aria-pressed={selected}
                className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br p-4 text-left
                  transition disabled:opacity-40 ${pack.gradient}
                  ${selected ? 'ring-2 ring-white' : 'opacity-70'}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-black/25" />
                <div className="relative flex items-start gap-3">
                  <span className="text-3xl">{pack.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate font-bold">{L(pack.name)}</h2>
                      {pack.adult && (
                        <span className="rounded-full bg-black/40 px-2 py-0.5 text-[0.65rem] font-black">
                          {s('adultBadge')}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs leading-snug text-white/80">
                      {empty ? s('packsEmptyCustom') : L(pack.tagline)}
                    </p>
                    <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                      {n(count, 'unitCardOne', 'unitCardMany')}
                    </p>
                  </div>
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2
                      ${selected ? 'border-white bg-white text-night-900' : 'border-white/50'}`}
                  >
                    {selected && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </div>
              </motion.button>
            )
          })}
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
        title={`🔞 ${s('adultGateTitle')}`}
        footer={
          <>
            <button type="button" onClick={() => setGateFor(null)} className="btn-ghost flex-1">
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
