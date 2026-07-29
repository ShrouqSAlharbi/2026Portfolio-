import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion.js'

export default function SectionHeading({
  kicker,
  title,
  align = 'center',
  id,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 sm:mb-20 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {kicker && (
        <span
          id={id}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  )
}
