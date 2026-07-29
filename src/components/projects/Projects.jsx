import { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderOpen, LayoutGrid, ShieldCheck } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import GlowBackground from '../ui/GlowBackground.jsx'
import MissionFile from './MissionFile.jsx'
import ProjectBookingSystem from './ProjectBookingSystem.jsx'
import QAShowcase from './QAShowcase.jsx'
import { bookingProject } from '../../data/projects.js'
import { qaShowcaseMeta } from '../../data/qaArtifacts.js'

const files = [
  {
    code: bookingProject.code,
    title: bookingProject.title,
    role: bookingProject.role,
    teaser: 'A Vue.js booking platform built for real office use — calendars, conflict handling, responsive from day one.',
    tags: bookingProject.stack.slice(0, 4),
    icon: LayoutGrid,
    Content: ProjectBookingSystem,
  },
  {
    code: qaShowcaseMeta.code,
    title: qaShowcaseMeta.title,
    role: qaShowcaseMeta.role,
    teaser: 'Real QA documentation standards: test cases, bug reports, checklists, API/SQL validation, and a severity matrix.',
    tags: ['Test Cases', 'Bug Reports', 'API Testing', 'SQL'],
    icon: ShieldCheck,
    Content: QAShowcase,
  },
]

export default function Projects() {
  const [openFile, setOpenFile] = useState(null)
  const active = files.find((f) => f.code === openFile)

  return (
    <section id="projects" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <GlowBackground
        orbs={[{ color: 'electric', bottom: '5%', left: '-8%', size: 420, opacity: 0.13 }]}
      />
      <SectionHeading
        kicker="Mission Files"
        title="Open a file. See how I actually work."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
      >
        {files.map((file) => (
          <motion.button
            key={file.code}
            variants={fadeUp}
            onClick={() => setOpenFile(file.code)}
            className="text-left"
            data-cursor-hover
          >
            <GlassCard className="h-full p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-cyan">
                  <file.icon size={20} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
                  {file.code}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{file.title}</h3>
              <p className="mt-1 text-xs text-ink-faint">{file.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{file.teaser}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {file.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-ink-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan">
                <FolderOpen size={14} />
                Open Mission File
              </div>
            </GlassCard>
          </motion.button>
        ))}
      </motion.div>

      <MissionFile
        open={Boolean(active)}
        onClose={() => setOpenFile(null)}
        code={active?.code}
        title={active?.title}
        role={active?.role}
      >
        {active && <active.Content />}
      </MissionFile>
    </section>
  )
}
