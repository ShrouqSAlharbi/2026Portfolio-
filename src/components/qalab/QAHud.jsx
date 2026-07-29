import { motion } from 'framer-motion'
import { Bug } from 'lucide-react'
import { challenges, totalBugs } from '../../data/qaLab.js'

export default function QAHud({ step, bugsFoundCount }) {
  const isResults = step >= challenges.length

  return (
    <div className="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        {challenges.map((c, i) => (
          <div key={c.id} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs transition-colors ${
                isResults || i < step
                  ? 'border-cyan/60 bg-cyan/15 text-cyan'
                  : i === step
                  ? 'border-cyan bg-cyan text-void'
                  : 'border-white/10 text-ink-faint'
              }`}
            >
              {i + 1}
            </div>
            {i < challenges.length - 1 && (
              <div className={`h-px w-6 sm:w-10 ${i < step || isResults ? 'bg-cyan/50' : 'bg-white/10'}`} />
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={bugsFoundCount}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-ink-dim"
      >
        <Bug size={13} className="text-cyan" />
        {bugsFoundCount}/{totalBugs} bugs found
      </motion.div>
    </div>
  )
}
