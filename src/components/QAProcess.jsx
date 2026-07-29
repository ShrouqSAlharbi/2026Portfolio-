import { motion } from 'framer-motion'
import { Search, Brain, ListTodo, Play, FileText, CircleCheckBig, TrendingUp } from 'lucide-react'
import { qaProcess } from '../data/content.js'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowBackground from './ui/GlowBackground.jsx'

const icons = [Search, Brain, ListTodo, Play, FileText, CircleCheckBig, TrendingUp]

export default function QAProcess() {
  return (
    <section id="process" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <GlowBackground
        orbs={[{ color: 'cyan', top: '10%', right: '-10%', size: 380, opacity: 0.12 }]}
      />
      <SectionHeading kicker={qaProcess.kicker} title={qaProcess.title} />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3"
      >
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-electric via-cyan to-violet opacity-30 lg:block" />

        {qaProcess.steps.map((step, i) => {
          const Icon = icons[i]
          return (
            <motion.div key={step.title} variants={fadeUp} className="group relative">
              <div className="glass-panel relative flex h-full flex-col items-start gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40">
                <div className="flex w-full items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric to-cyan text-void">
                    <Icon size={16} />
                  </span>
                  <span className="font-mono text-[10px] text-ink-faint">0{i + 1}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-xs leading-relaxed text-ink-faint">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
