import { useRef } from 'react'
import { motion } from 'framer-motion'
import { CircleCheckBig, Code, Search, ArrowDown, Gamepad2, HeartPulse } from 'lucide-react'
import { experience } from '../../data/content.js'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import GlowBackground from '../ui/GlowBackground.jsx'
import DashboardMockup from './DashboardMockup.jsx'
import ScreenshotFrame from '../projects/ScreenshotFrame.jsx'
import TimelineSpine from './TimelineSpine.jsx'

function RoleMeta({ company, role, duration, location }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="rounded-full bg-gradient-to-r from-electric to-cyan px-3 py-1 font-mono text-[11px] font-semibold text-void">
        {company}
      </span>
      <span className="font-display text-lg font-semibold text-ink sm:text-xl">{role}</span>
      <span className="ml-auto rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
        {location ? `${location} · ${duration}` : duration}
      </span>
    </div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)
  const { internship, quickStep, transition, qa } = experience

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <GlowBackground
        orbs={[{ color: 'cyan', top: '30%', right: '-10%', size: 420, opacity: 0.12 }]}
      />
      <SectionHeading kicker={experience.kicker} title={experience.title} />

      <div ref={containerRef} className="relative isolate mx-auto max-w-6xl space-y-24 sm:space-y-32">
        <TimelineSpine containerRef={containerRef} />

        {/* Prologue — Information System Intern */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative z-10 mx-auto max-w-2xl"
        >
          <GlassCard hover={false} className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-violet-soft">
                <HeartPulse size={20} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
                Where it started
              </span>
            </div>
            <RoleMeta {...internship} />
            <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{internship.summary}</p>
          </GlassCard>
        </motion.div>

        {/* Scene 1 — Quick Step */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
        >
          <motion.div variants={fadeUp}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              <RoleMeta {...quickStep} />
              <p className="text-sm leading-relaxed text-ink-dim sm:text-base">
                {quickStep.summary}
              </p>
              <ul className="mt-5 space-y-2.5">
                {quickStep.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {quickStep.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <ScreenshotFrame
              src={`${import.meta.env.BASE_URL}projects/booking-1.webp`}
              alt="Quick Booking admin dashboard with hall and meeting stats"
              width={1262}
              height={547}
            />
          </motion.div>
        </motion.div>

        {/* Scene 2 — Transition */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4 text-ink-faint">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-electric/40 text-electric">
              <Code size={20} />
            </span>
            <ArrowDown size={18} className="rotate-[-90deg] text-ink-faint sm:rotate-0" />
            <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan/40 text-cyan">
              <Search size={20} />
            </span>
            <ArrowDown size={18} className="rotate-[-90deg] text-ink-faint sm:rotate-0" />
            <span className="grid h-12 w-12 place-items-center rounded-full border border-violet/40 text-violet">
              <Gamepad2 size={20} />
            </span>
          </div>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            {transition.kicker}
          </span>
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {transition.title}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-balance text-ink-dim">{transition.body}</p>
        </motion.div>

        {/* Scene 3 — Mirai / Scopely */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <DashboardMockup />
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <GlassCard hover={false} className="p-6 sm:p-8">
              <RoleMeta {...qa} />
              <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{qa.summary}</p>
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {qa.responsibilities.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  >
                    <p className="text-xs font-semibold text-cyan">{item.label}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink-faint">{item.note}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
