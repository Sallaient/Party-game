import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../store/AppContext'
import { ScreenBody, ScreenHeader } from '../components/Screen'
import { Close, Plus } from '../components/Icon'

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
        <p className="mb-5 text-[0.875rem] leading-snug text-white/45">{s('playersSubtitle')}</p>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            add()
          }}
          className="mb-2 flex gap-2"
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
          <button
            type="submit"
            disabled={!draft.trim()}
            aria-label={s('playersAdd')}
            className="btn-primary w-12 px-0"
          >
            <Plus />
          </button>
        </form>

        <p className="mb-4 h-4 text-[0.8125rem] text-white/40">
          {error ? (
            <span className="text-pack-hardcore">{error}</span>
          ) : players.length < 2 ? (
            s('playersNeedTwo')
          ) : (
            ''
          )}
        </p>

        <div className="min-h-0 flex-1 overflow-y-auto pb-4">
          {players.length > 0 && (
            <ul className="surface divide-y divide-ink-800 overflow-hidden">
              <AnimatePresence initial={false}>
                {players.map((player, index) => (
                  <motion.li
                    key={player}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <span className="tabular label w-4 shrink-0 text-white/25">{index + 1}</span>
                    <span className="flex-1 truncate text-[0.9375rem] font-medium">{player}</span>
                    <button
                      type="button"
                      onClick={() => remove(player)}
                      aria-label={`${s('delete')} ${player}`}
                      className="icon-btn -mr-1.5 h-8 w-8"
                    >
                      <Close className="h-4 w-4" />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
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
