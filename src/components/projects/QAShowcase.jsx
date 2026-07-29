import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ClipboardList,
  Bug,
  RotateCcw,
  Flame,
  Webhook,
  Database,
  Compass,
  ShieldAlert,
  Info,
} from 'lucide-react'
import {
  qaShowcaseMeta,
  testCases,
  bugReports,
  regressionChecklist,
  smokeChecklist,
  apiTesting,
  sqlValidation,
  exploratoryNotes,
  severityMatrix,
} from '../../data/qaArtifacts.js'

const severityTextClass = {
  Critical: 'text-severity-critical bg-severity-critical/10 border-severity-critical/30',
  High: 'text-severity-high bg-severity-high/10 border-severity-high/30',
  Medium: 'text-severity-medium bg-severity-medium/10 border-severity-medium/30',
  Low: 'text-severity-low bg-severity-low/10 border-severity-low/30',
}

const statusClass = {
  'Verified Fixed': 'text-severity-low bg-severity-low/10 border-severity-low/30',
  Open: 'text-severity-high bg-severity-high/10 border-severity-high/30',
}

function Panel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function TestCasesPanel() {
  return (
    <div className="space-y-3">
      {testCases.map((tc) => (
        <div key={tc.id} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-cyan">{tc.id}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] ${severityTextClass[tc.priority]}`}>
              {tc.priority} Priority
            </span>
          </div>
          <p className="text-sm font-semibold text-ink">{tc.title}</p>
          <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-ink-faint">
            {tc.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-ink-dim">
            <span className="text-ink-faint">Expected: </span>
            {tc.expected}
          </p>
        </div>
      ))}
    </div>
  )
}

function BugReportsPanel() {
  return (
    <div className="space-y-4">
      {bugReports.map((bug) => (
        <div key={bug.id} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-cyan">{bug.id}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] ${severityTextClass[bug.severity]}`}>
              {bug.severity}
            </span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] ${statusClass[bug.status]}`}>
              {bug.status}
            </span>
          </div>
          <p className="text-sm font-semibold text-ink">{bug.title}</p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint">{bug.environment}</p>
          <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-ink-faint">
            {bug.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <div className="mt-2 grid gap-1 text-xs">
            <p className="text-ink-dim"><span className="text-ink-faint">Expected: </span>{bug.expected}</p>
            <p className="text-ink-dim"><span className="text-ink-faint">Actual: </span>{bug.actual}</p>
            <p className="text-ink-faint italic">{bug.evidence}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ChecklistPanel({ title, groups, items }) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">{title}</p>
      {groups ? (
        <div className="space-y-4">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="mb-2 text-xs font-semibold text-cyan">{g.label}</p>
              <div className="space-y-1.5">
                {g.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-ink-dim">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded border border-severity-low/50 bg-severity-low/10 text-[10px] text-severity-low">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-1.5">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-ink-dim">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded border border-severity-low/50 bg-severity-low/10 text-[10px] text-severity-low">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ApiPanel() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-md bg-electric/20 px-2 py-1 font-mono text-[11px] font-semibold text-electric-soft">
          {apiTesting.method}
        </span>
        <span className="font-mono text-xs text-ink-dim">{apiTesting.endpoint}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Request</p>
          <pre className="overflow-x-auto font-mono text-xs text-cyan">
{JSON.stringify(apiTesting.request, null, 2)}
          </pre>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Response · 200</p>
          <pre className="overflow-x-auto font-mono text-xs text-severity-low">
{JSON.stringify(apiTesting.response.body, null, 2)}
          </pre>
        </div>
      </div>
      <p className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Assertions</p>
      <ul className="space-y-1.5">
        {apiTesting.assertions.map((a) => (
          <li key={a} className="flex items-start gap-2 text-xs text-ink-dim">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {a}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SqlPanel() {
  return (
    <div>
      <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Query</p>
        <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs text-cyan">{sqlValidation.query}</pre>
      </div>
      <p className="mt-4 text-sm text-ink-dim">{sqlValidation.purpose}</p>
      <p className="mt-2 rounded-lg border border-severity-low/30 bg-severity-low/10 px-3 py-2 font-mono text-xs text-severity-low">
        Result: {sqlValidation.result}
      </p>
    </div>
  )
}

function ExploratoryPanel() {
  return (
    <div>
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Charter</p>
      <p className="mb-4 text-sm text-ink-dim">{exploratoryNotes.charter}</p>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Observations</p>
      <ul className="space-y-2">
        {exploratoryNotes.observations.map((o, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-ink-dim">
            <Compass size={14} className="mt-1 shrink-0 text-violet-soft" />
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-cyan/20 bg-cyan/5 px-3 py-2.5">
        <Info size={14} className="mt-0.5 shrink-0 text-cyan" />
        <p className="text-xs text-ink-dim">{exploratoryNotes.followUp}</p>
      </div>
    </div>
  )
}

function SeverityPanel() {
  return (
    <div className="space-y-2.5">
      {severityMatrix.map((row) => (
        <div
          key={row.level}
          className="flex flex-col gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:gap-4"
        >
          <span className={`w-24 shrink-0 rounded-full border px-2.5 py-1 text-center text-[11px] font-semibold ${severityTextClass[row.level]}`}>
            {row.level}
          </span>
          <p className="flex-1 text-sm text-ink-dim">{row.description}</p>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-faint">{row.sla}</span>
        </div>
      ))}
    </div>
  )
}

const tabs = [
  { id: 'tests', label: 'Test Cases', icon: ClipboardList, render: TestCasesPanel },
  { id: 'bugs', label: 'Bug Reports', icon: Bug, render: BugReportsPanel },
  { id: 'regression', label: 'Regression', icon: RotateCcw, render: () => <ChecklistPanel {...regressionChecklist} /> },
  { id: 'smoke', label: 'Smoke', icon: Flame, render: () => <ChecklistPanel {...smokeChecklist} /> },
  { id: 'api', label: 'API Testing', icon: Webhook, render: ApiPanel },
  { id: 'sql', label: 'SQL', icon: Database, render: SqlPanel },
  { id: 'exploratory', label: 'Exploratory', icon: Compass, render: ExploratoryPanel },
  { id: 'severity', label: 'Severity Matrix', icon: ShieldAlert, render: SeverityPanel },
]

export default function QAShowcase() {
  const [active, setActive] = useState(tabs[0].id)
  const ActivePanel = tabs.find((t) => t.id === active).render

  return (
    <div>
      <p className="mb-6 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs italic text-ink-faint">
        {qaShowcaseMeta.disclaimer}
      </p>

      <div className="mb-6 flex gap-1.5 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                active === tab.id
                  ? 'border-cyan/50 bg-cyan/10 text-cyan'
                  : 'border-white/10 text-ink-faint hover:text-ink-dim'
              }`}
            >
              <Icon size={13} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <Panel key={active}>
          <ActivePanel />
        </Panel>
      </AnimatePresence>
    </div>
  )
}
