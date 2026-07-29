import { motion } from 'framer-motion'
import { journey } from '../data/content.js'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'
import GlowBackground from './ui/GlowBackground.jsx'
import GlassCard from './ui/GlassCard.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'

export default function Journey() {
  return (
    <section id="journey" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <GlowBackground
        orbs={[
          { color: 'electric', top: '10%', left: '-6%', size: 380, opacity: 0.14 },
          { color: 'violet', bottom: '0%', right: '-8%', size: 420, opacity: 0.14 },
        ]}
      />

      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
        >
          {journey.kicker}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl"
        >
          {journey.title}
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.18, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 space-y-2"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-xl text-ink-dim sm:text-2xl"
          >
            {journey.lineOne}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-display text-xl font-semibold text-gradient sm:text-2xl"
          >
            {journey.lineTwo}
          </motion.p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 max-w-2xl text-balance text-ink-dim"
        >
          {journey.body}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4"
      >
        {journey.stats.map((stat) => (
          <GlassCard key={stat.label} variants={fadeUp} className="p-6 text-center">
            <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs text-ink-faint sm:text-sm">{stat.label}</p>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  )
}
