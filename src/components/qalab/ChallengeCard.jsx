import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../../lib/motion.js'

export default function ChallengeCard({
  kicker,
  title,
  instructions,
  complete,
  isLast,
  onNext,
  onSkip,
  children,
}) {
  return (
    <motion.div
      key={kicker}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="glass-panel mx-auto max-w-2xl rounded-2xl p-5 sm:p-8"
    >
      <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
        {kicker}
      </span>
      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{instructions}</p>

      <div className="mt-6">{children}</div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          onClick={onSkip}
          className="text-xs text-ink-faint underline-offset-4 transition-colors hover:text-ink-dim hover:underline"
        >
          Skip this challenge
        </button>
        <motion.button
          onClick={onNext}
          disabled={!complete}
          whileHover={complete ? { y: -2 } : {}}
          whileTap={complete ? { scale: 0.97 } : {}}
          data-cursor-hover
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
            complete
              ? 'bg-gradient-to-r from-electric to-cyan text-void shadow-[0_0_24px_-6px_var(--color-cyan)]'
              : 'cursor-not-allowed border border-white/10 text-ink-faint'
          }`}
        >
          {isLast ? 'See Results' : 'Next Challenge'}
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </motion.div>
  )
}
