import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, Flag, Users } from 'lucide-react'
import BugCard from './BugCard.jsx'
import BugReport from './BugReport.jsx'
import { bugs } from '../../data/qaLab.js'

const rooms = [
  { id: 'a', name: 'Room A', seats: 4 },
  { id: 'b', name: 'Room B', seats: 8 },
  { id: 'c', name: 'Room C', seats: 12 },
]

export default function UXChallenge({ foundBugs, onBugFound, onMiss }) {
  const [step, setStep] = useState('select')
  const [room, setRoom] = useState(null)
  const [hint, setHint] = useState(null)

  const found005 = foundBugs.has('BUG-005')

  const selectRoom = (r) => {
    setRoom(r)
    setStep('confirm')
  }

  const handleFlag = (id) => {
    setHint(null)
    if (id === 'BUG-005') {
      if (!found005) onBugFound('BUG-005')
      return
    }
    onMiss()
    setHint('That part works fine — look for where the flow leaves you stuck.')
  }

  return (
    <div>
      <div className="glass-panel min-h-[300px] rounded-2xl p-5 sm:p-6">
        <AnimatePresence mode="wait">
          {step === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                Step 1 — Select a meeting room
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => selectRoom(r)}
                    data-cursor-hover
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-cyan/40 hover:bg-cyan/5"
                  >
                    <p className="font-display text-sm font-semibold text-ink">{r.name}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
                      <Users size={12} />
                      Seats {r.seats}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'confirm' && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setStep('select')}
                className="mb-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint hover:text-ink-dim"
              >
                <ArrowLeft size={12} />
                Back
              </button>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                Step 2 — Confirm booking
              </p>
              <p className="mb-5 text-sm text-ink-dim">
                You selected <span className="text-ink">{room?.name}</span>. Review and confirm to finish.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <BugCard
                  found={found005}
                  disabled={found005}
                  onSelect={() => handleFlag('BUG-005')}
                  label="Inspect Confirm button"
                  className={`flex items-center gap-2 rounded-full px-5 py-3 font-mono text-xs uppercase tracking-wider ${
                    found005
                      ? 'bg-white/5 text-ink-faint'
                      : 'cursor-not-allowed bg-white/[0.06] text-ink-faint opacity-60'
                  }`}
                >
                  <Check size={14} />
                  Confirm
                </BugCard>

                <BugCard
                  found={false}
                  onSelect={() => handleFlag('decoy-cancel')}
                  label="Inspect Cancel button"
                  className="rounded-full border border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink-dim"
                >
                  Cancel
                </BugCard>

                <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
                  <Flag size={12} />
                  Click anything that seems unclear
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="popLayout">
        {hint && !found005 && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-center text-xs text-ink-faint"
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {found005 && (
          <BugReport key="BUG-005" bug={bugs['BUG-005']} celebrationText="Usability issue flagged!" />
        )}
      </AnimatePresence>
    </div>
  )
}
