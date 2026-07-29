import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/content.js'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlassCard from './ui/GlassCard.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <SectionHeading kicker={certifications.kicker} title={certifications.title} />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-2xl space-y-5 border-l border-white/10 pl-8"
      >
        {certifications.items.map((cert) => (
          <motion.div key={cert.name} variants={fadeUp} className="relative">
            <span className="absolute -left-[38px] top-5 grid h-6 w-6 place-items-center rounded-full border border-cyan/40 bg-void text-cyan">
              <Award size={12} />
            </span>
            <GlassCard hover={false} className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-ink">{cert.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  {cert.date}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-cyan">{cert.issuer}</p>
              <p className="mt-2 text-sm text-ink-dim">{cert.note}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
