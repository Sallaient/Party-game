import { useEffect, useState } from 'react'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader, SectionLabel } from '../components/Screen'
import { Modal } from '../components/Modal'
import { Download, Lock, Unlock } from '../components/Icon'
import type { Lang } from '../types'

/** The event Chromium fires when the app is installable. */
interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>
}

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

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
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto pb-6">
          <section>
            <SectionLabel>{s('settingsLang')}</SectionLabel>
            <div className="surface flex overflow-hidden p-1">
              {LANGUAGES.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => {
                    setLang(option.code)
                    buzz(10)
                  }}
                  aria-pressed={settings.lang === option.code}
                  className={`flex-1 rounded-md py-2.5 text-[0.875rem] font-medium transition-colors ${
                    settings.lang === option.code ? 'bg-bone text-ink-950' : 'text-white/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>{s('settingsPrefs')}</SectionLabel>
            <div className="surface divide-y divide-ink-800">
              <div className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1">
                  <p className="text-[0.9375rem] font-medium">{s('settingsHaptics')}</p>
                  <p className="mt-0.5 text-[0.8125rem] leading-snug text-white/35">
                    {s('settingsHapticsHint')}
                  </p>
                </div>
                <Toggle
                  checked={settings.haptics}
                  label={s('settingsHaptics')}
                  onChange={(next) => {
                    setHaptics(next)
                    if (next) navigator.vibrate?.(15)
                  }}
                />
              </div>

              <div className="flex items-center gap-4 px-4 py-3.5">
                <p className="flex-1 text-[0.9375rem] font-medium">{s('settingsAdult')}</p>
                <span className="text-white/40">
                  {settings.adultUnlocked ? <Unlock /> : <Lock />}
                </span>
              </div>
            </div>
          </section>

          {installEvent && (
            <section>
              <SectionLabel>{s('settingsInstall')}</SectionLabel>
              <div className="surface p-4">
                <p className="text-[0.8125rem] leading-snug text-white/45">
                  {s('settingsInstallHint')}
                </p>
                <button
                  type="button"
                  onClick={async () => {
                    await installEvent.prompt()
                    setInstallEvent(null)
                  }}
                  className="btn-secondary mt-3 w-full"
                >
                  <Download className="h-[1.125rem] w-[1.125rem]" />
                  {s('settingsInstall')}
                </button>
              </div>
            </section>
          )}

          <section>
            <SectionLabel>{s('settingsAbout')}</SectionLabel>
            <div className="surface p-4">
              <p className="text-[0.875rem] leading-relaxed text-white/55">
                {s('settingsAboutBody')}
              </p>
              <p className="mt-3 border-l-2 border-ink-700 pl-3 text-[0.8125rem] leading-relaxed text-white/40">
                {s('howToSafety')}
              </p>
            </div>
          </section>

          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="btn-danger w-full"
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
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="btn-secondary flex-1"
            >
              {s('cancel')}
            </button>
            <button
              type="button"
              onClick={() => {
                resetAll()
                setConfirmReset(false)
                onBack()
              }}
              className="btn-danger flex-1"
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
      className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
        checked ? 'bg-bone' : 'bg-ink-700'
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition-all ${
          checked ? 'left-5 bg-ink-950' : 'left-1 bg-white/60'
        }`}
      />
    </button>
  )
}
