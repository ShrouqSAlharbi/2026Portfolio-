import { motion } from 'framer-motion'
import { Trophy, RefreshCw } from 'lucide-react'
import { totalBugs } from '../../data/qaLab.js'
import ConfettiBurst from './ConfettiBurst.jsx'

export default function ScoreBoard({ bugsFoundCount, score, testingStyle, strength, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel relative mx-auto max-w-2xl overflow-hidden rounded-2xl p-6 text-center sm:p-10"
    >
      <ConfettiBurst />

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.15 }}
        className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan text-void shadow-[0_0_36px_-6px_var(--color-cyan)]"
      >
        <Trophy size={26} />
      </motion.div>

      <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
        QA Mission Completed
      </span>
      <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        You think like a QA Engineer.
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
        Observe → Explore → Break → Report → Improve
      </p>

      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="font-display text-xl font-semibold text-ink">
            {bugsFoundCount}/{totalBugs}
          </p>
          <p className="mt-1 text-[10px] text-ink-faint">Bugs Found</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="font-display text-xl font-semibold text-cyan">{score}%</p>
          <p className="mt-1 text-[10px] text-ink-faint">QA Score</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="font-display text-sm font-semibold leading-tight text-ink">{testingStyle}</p>
          <p className="mt-1 text-[10px] text-ink-faint">Testing Style</p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="font-display text-sm font-semibold leading-tight text-ink">{strength}</p>
          <p className="mt-1 text-[10px] text-ink-faint">Strength</p>
        </div>
      </div>

      <button
        onClick={onRestart}
        data-cursor-hover
        className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan"
      >
        <RefreshCw size={13} />
        Restart Mission
      </button>
    </motion.div>
  )
}
