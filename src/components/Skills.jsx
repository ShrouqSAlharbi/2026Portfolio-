import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Hand,
  RotateCcw,
  Flame,
  Compass,
  SquareCheck,
  Webhook,
  Bug,
  Braces,
  Layers,
  CodeXml,
  Palette,
  GitBranch,
  Send,
  Kanban,
  Database,
  Sparkles,
} from 'lucide-react'
import { skills } from '../data/content.js'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowBackground from './ui/GlowBackground.jsx'
import { GithubIcon } from './ui/BrandIcons.jsx'

const iconMap = {
  'Manual Testing': Hand,
  'Regression Testing': RotateCcw,
  'Smoke Testing': Flame,
  'Exploratory Testing': Compass,
  'Functional Testing': SquareCheck,
  'API Testing': Webhook,
  'Bug Reporting': Bug,
  JavaScript: Braces,
  'Vue.js': Layers,
  HTML5: CodeXml,
  CSS3: Palette,
  Git: GitBranch,
  Postman: Send,
  JIRA: Kanban,
  SQL: Database,
  GitHub: GithubIcon,
}

const accentStyles = {
  cyan: { text: 'text-cyan', border: 'group-hover:border-cyan/50', glow: 'group-hover:shadow-[0_0_36px_-10px_var(--color-cyan)]' },
  electric: { text: 'text-electric-soft', border: 'group-hover:border-electric/50', glow: 'group-hover:shadow-[0_0_36px_-10px_var(--color-electric)]' },
  violet: { text: 'text-violet-soft', border: 'group-hover:border-violet/50', glow: 'group-hover:shadow-[0_0_36px_-10px_var(--color-violet)]' },
}

function SkillTile({ label, accent }) {
  const Icon = iconMap[label] ?? Sparkles
  const styles = accentStyles[accent]

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`group glass-panel relative flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300 ${styles.border} ${styles.glow}`}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.04] ${styles.text}`}>
        <Icon size={18} />
      </span>
      <span className="text-sm font-medium text-ink-dim transition-colors group-hover:text-ink">
        {label}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skills.groups[0].id)
  const current = skills.groups.find((g) => g.id === activeGroup)

  return (
    <section id="skills" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <GlowBackground
        orbs={[{ color: 'violet', top: '0%', left: '50%', size: 460, opacity: 0.12 }]}
      />
      <SectionHeading kicker={skills.kicker} title={skills.title} />

      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider">
          {skills.groups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`relative rounded-full px-5 py-2.5 transition-colors ${
                activeGroup === group.id ? 'text-void' : 'border border-white/10 text-ink-dim hover:text-ink'
              }`}
            >
              {activeGroup === group.id && (
                <motion.span
                  layoutId="skills-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-electric to-cyan"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{group.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {current.items.map((item) => (
              <SkillTile key={item} label={item} accent={current.accent} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
