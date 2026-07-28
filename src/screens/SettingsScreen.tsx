import { useEffect, useState } from 'react'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Modal } from '../components/Modal'
import type { Lang } from '../types'

/** The event Chromium fires when the app is installable. */
interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>
}

export function SettingsScreen({ onBack }: { onBack: () => void }) {
  const { s, settings, setLang, setHaptics, resetAll, buzz } = useApp()
  const [confirmReset, setConfirmReset] = useState(false)
  const [installEvent, setInstallEvent] = useState<InstallPromptEvent | null>(null)

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as InstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [])

  return (
    <div className="screen">
      <ScreenHeader title={s('settingsTitle')} onBack={onBack} backLabel={s('back')} />
      <ScreenBody>
        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pb-6">
          <section className="surface p-4">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              {s('settingsLang')}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { code: 'fr', label: 'Français', flag: '🇫🇷' },
                  { code: 'en', label: 'English', flag: '🇬🇧' },
                ] as { code: Lang; label: string; flag: string }[]
              ).map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => {
                    setLang(option.code)
                    buzz(10)
                  }}
                  aria-pressed={settings.lang === option.code}
                  className={`btn ${
                    settings.lang === option.code
                      ? 'bg-white text-night-950'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  {option.flag} {option.label}
                </button>
              ))}
            </div>
          </section>

          <section className="surface flex items-center gap-4 p-4">
            <div className="flex-1">
              <h2 className="font-semibold">{s('settingsHaptics')}</h2>
              <p className="mt-0.5 text-xs text-white/40">{s('settingsHapticsHint')}</p>
            </div>
            <Toggle
              checked={settings.haptics}
              label={s('settingsHaptics')}
              onChange={(next) => {
                setHaptics(next)
                if (next) navigator.vibrate?.(15)
              }}
            />
          </section>

          <section className="surface flex items-center gap-4 p-4">
            <div className="flex-1">
              <h2 className="font-semibold">{s('settingsAdult')}</h2>
            </div>
            <span className="text-2xl">{settings.adultUnlocked ? '🔓' : '🔒'}</span>
          </section>

          {installEvent && (
            <section className="surface p-4">
              <h2 className="font-semibold">{s('settingsInstall')}</h2>
              <p className="mt-0.5 text-xs text-white/40">{s('settingsInstallHint')}</p>
              <button
                type="button"
                onClick={async () => {
                  await installEvent.prompt()
                  setInstallEvent(null)
                }}
                className="btn-ghost mt-3 w-full"
              >
                📲 {s('settingsInstall')}
              </button>
            </section>
          )}

          <section className="surface p-4">
            <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              {s('settingsAbout')}
            </h2>
            <p className="text-sm text-white/60">{s('settingsAboutBody')}</p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-white/50">
              ⚠️ {s('howToSafety')}
            </p>
          </section>

          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="btn w-full bg-rose-500/15 text-rose-300"
          >
            {s('settingsReset')}
          </button>
        </div>
      </ScreenBody>

      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title={s('settingsResetConfirm')}
        footer={
          <>
            <button type="button" onClick={() => setConfirmReset(false)} className="btn-ghost flex-1">
              {s('cancel')}
            </button>
            <button
              type="button"
              onClick={() => {
                resetAll()
                setConfirmReset(false)
                onBack()
              }}
              className="btn flex-1 bg-rose-500 text-white"
            >
              {s('settingsReset')}
            </button>
          </>
        }
      >
        <span className="sr-only">{s('settingsResetConfirm')}</span>
      </Modal>
    </div>
  )
}

function Toggle({
  checked,
  label,
  onChange,
}: {
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition ${
        checked ? 'bg-emerald-400' : 'bg-white/15'
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
          checked ? 'left-6' : 'left-1'
        }`}
      />
    </button>
  )
}
