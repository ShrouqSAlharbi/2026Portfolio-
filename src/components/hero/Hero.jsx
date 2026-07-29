import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { hero } from '../../data/content.js'
import Button from '../ui/Button.jsx'
import ScrollIndicator from './ScrollIndicator.jsx'

const ParticleField = lazy(() => import('./ParticleField.jsx'))

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const headlineLine = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(59,107,255,0.16),transparent)]" />
      <Suspense fallback={<div className="absolute inset-0 -z-10 bg-void" />}>
        <ParticleField />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-transparent to-void" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
          {hero.kicker}
        </motion.span>

        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl md:text-7xl"
        >
          {hero.headline.map((line, i) => (
            <motion.span key={i} variants={headlineLine} className="block">
              {i === 1 ? <span className="text-gradient">{line}</span> : line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-ink-dim sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {hero.actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
