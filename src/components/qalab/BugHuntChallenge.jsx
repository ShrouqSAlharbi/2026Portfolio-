import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, User, SlidersHorizontal, Search } from 'lucide-react'
import BugCard from './BugCard.jsx'
import BugReport from './BugReport.jsx'
import { bugs } from '../../data/qaLab.js'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function BugHuntChallenge({ foundBugs, onBugFound, onMiss }) {
  const [hint, setHint] = useState(null)

  const handleClick = (id, isBug) => {
    setHint(null)
    if (isBug) {
      if (!foundBugs.has(id)) onBugFound(id)
      return
    }
    onMiss()
    setHint('Nothing suspicious there — keep scanning the screen.')
  }

  const found001 = foundBugs.has('BUG-001')
  const found002 = foundBugs.has('BUG-002')

  return (
    <div>
      <div className="glass-panel relative overflow-hidden rounded-2xl">
        {/* header */}
        <div className="relative flex h-14 items-center justify-between border-b border-white/10 bg-white/[0.02] px-4">
          <span className="font-display text-sm font-semibold text-ink">RoomBook</span>
          <div className="flex items-center gap-2">
            <BugCard
              found={found002}
              disabled={found002}
              onSelect={() => handleClick('BUG-002', true)}
              label="Inspect notification icon"
              className="grid h-8 w-8 place-items-center"
            >
              {found002 ? (
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-ink-faint">
                  <Bell size={15} />
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-white/5" />
              )}
            </BugCard>
            <BugCard
              found={false}
              onSelect={() => handleClick('decoy-avatar', false)}
              label="Inspect profile avatar"
              className="grid h-8 w-8 place-items-center"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-void">
                <User size={14} />
              </div>
            </BugCard>
          </div>
        </div>

        {/* body */}
        <div className="relative p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <BugCard
              found={false}
              onSelect={() => handleClick('decoy-search', false)}
              label="Inspect search bar"
              className="flex flex-1 items-center gap-2 rounded-lg bg-white/5 px-3 py-2"
            >
              <Search size={13} className="text-ink-faint" />
              <span className="text-xs text-ink-faint">Search rooms…</span>
            </BugCard>
            <BugCard
              found={false}
              onSelect={() => handleClick('decoy-filters', false)}
              label="Inspect filters button"
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2"
            >
              <SlidersHorizontal size={13} className="text-ink-faint" />
              <span className="text-xs text-ink-faint">Filters</span>
            </BugCard>
          </div>

          <div className="relative">
            {/* calendar */}
            <div className="grid grid-cols-7 gap-1.5 rounded-xl bg-white/[0.03] p-3 pt-8">
              {days.map((d) => (
                <div key={d} className="text-center font-mono text-[9px] uppercase text-ink-faint">
                  {d}
                </div>
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <div key={i} className="h-9 rounded-md bg-white/5" />
              ))}
            </div>

            {/* overlapping book button — BUG-001 */}
            <BugCard
              found={found001}
              disabled={found001}
              onSelect={() => handleClick('BUG-001', true)}
              label="Inspect Book Room button"
              className="absolute -top-2 left-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-electric to-cyan px-4 py-2 font-mono text-[11px] font-semibold text-void shadow-lg"
            >
              Book Room
            </BugCard>
          </div>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {hint && !found001 && !found002 && (
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
        {found001 && <BugReport key="BUG-001" bug={bugs['BUG-001']} />}
      </AnimatePresence>
      <AnimatePresence>
        {found002 && <BugReport key="BUG-002" bug={bugs['BUG-002']} />}
      </AnimatePresence>
    </div>
  )
}
