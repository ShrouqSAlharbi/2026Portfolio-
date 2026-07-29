import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import ConfettiBurst from './ConfettiBurst.jsx'

const severityClass = {
  Critical: 'text-severity-critical border-severity-critical/30 bg-severity-critical/10',
  High: 'text-severity-high border-severity-high/30 bg-severity-high/10',
  Medium: 'text-severity-medium border-severity-medium/30 bg-severity-medium/10',
  Low: 'text-severity-low border-severity-low/30 bg-severity-low/10',
}

function Field({ label, value }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">{label}</p>
      <p className="mt-0.5 text-sm text-ink-dim">{value}</p>
    </div>
  )
}

export default function BugReport({ bug, celebrationText = 'Bug Found!' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel relative mt-5 overflow-hidden rounded-2xl border-cyan/30 p-5 sm:p-6"
    >
      <ConfettiBurst small />
      <div className="mb-4 flex items-center gap-2">
        <span className="text-lg">🐞</span>
        <span className="font-display text-base font-semibold text-ink">{celebrationText}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gradient-to-r from-electric to-cyan px-3 py-1 font-mono text-[11px] font-semibold text-void">
          {bug.id}
        </span>
        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${severityClass[bug.severity]}`}>
          {bug.severity} Severity
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-faint">
          {bug.priority} Priority
        </span>
      </div>

      <p className="mb-4 font-display text-base font-semibold text-ink sm:text-lg">{bug.title}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Type" value={bug.type} />
        <Field label="Priority" value={bug.priority} />
        <Field label="Expected Result" value={bug.expected} />
        <Field label="Actual Result" value={bug.actual} />
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg border border-cyan/20 bg-cyan/5 px-3 py-2.5">
        <Sparkles size={14} className="shrink-0 text-cyan" />
        <p className="text-xs text-ink-dim">
          <span className="text-cyan">QA Skill: </span>
          {bug.qaSkill}
        </p>
      </div>
    </motion.div>
  )
}
