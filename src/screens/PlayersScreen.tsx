import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'

const AVATARS = ['🦊', '🐼', '🦁', '🐸', '🐙', '🦄', '🐧', '🦖', '🐝', '🦩', '🐨', '🦋']

export function PlayersScreen({ onBack }: { onBack: () => void }) {
  const { s, n, players, setPlayers, buzz } = useApp()
  const [draft, setDraft] = useState('')
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const add = () => {
    const name = draft.trim().slice(0, 14)
    if (!name) return
    if (players.some((player) => player.toLowerCase() === name.toLowerCase())) {
      setError(s('playersDuplicate'))
      buzz([40, 40, 40])
      return
    }
    setPlayers([...players, name])
    setDraft('')
    setError(null)
    buzz(10)
    inputRef.current?.focus()
  }

  const remove = (name: string) => {
    setPlayers(players.filter((player) => player !== name))
    setError(null)
  }

  return (
    <div className="screen">
      <ScreenHeader title={s('playersTitle')} onBack={onBack} backLabel={s('back')} />
      <ScreenBody>
        <p className="mb-4 text-sm text-white/50">{s('playersSubtitle')}</p>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            add()
          }}
          className="mb-3 flex gap-2"
        >
          <input
            ref={inputRef}
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value)
              setError(null)
            }}
            placeholder={s('playersPlaceholder')}
            maxLength={14}
            autoComplete="off"
            autoCapitalize="words"
            className="field flex-1"
          />
          <button type="submit" disabled={!draft.trim()} className="btn-primary px-5">
            +
          </button>
        </form>

        {error && <p className="mb-3 text-sm font-medium text-rose-300">{error}</p>}
        {players.length < 2 && !error && (
          <p className="mb-3 text-sm text-white/40">{s('playersNeedTwo')}</p>
        )}

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pb-4">
          <AnimatePresence initial={false}>
            {players.map((player, index) => (
              <motion.div
                key={player}
                layout
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.18 }}
                className="surface flex items-center gap-3 px-4 py-3"
              >
                <span className="text-2xl">{AVATARS[index % AVATARS.length]}</span>
                <span className="flex-1 truncate font-semibold">{player}</span>
                <button
                  type="button"
                  onClick={() => remove(player)}
                  aria-label={`${s('delete')} ${player}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition active:scale-90 active:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={onBack}
          disabled={players.length < 2}
          className="btn-primary mb-4 w-full"
        >
          {s('done')} · {n(players.length, 'unitPlayerOne', 'unitPlayerMany')}
        </button>
      </ScreenBody>
    </div>
  )
}
