const severityBars = [
  { label: 'Critical', value: 8, color: 'bg-severity-critical' },
  { label: 'High', value: 22, color: 'bg-severity-high' },
  { label: 'Medium', value: 41, color: 'bg-severity-medium' },
  { label: 'Low', value: 29, color: 'bg-severity-low' },
]

export default function DashboardMockup() {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          QA Dashboard · Build 3.4.1
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-severity-low/10 px-2.5 py-1 font-mono text-[10px] text-severity-low">
          <span className="h-1.5 w-1.5 rounded-full bg-severity-low" />
          Build Healthy
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-5">
        {[
          { label: 'Test Cases Executed', value: '186' },
          { label: 'Pass Rate', value: '94%' },
          { label: 'Bugs Verified Fixed', value: '52' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/[0.04] p-3">
            <p className="font-display text-xl font-semibold text-ink">{stat.value}</p>
            <p className="mt-1 text-[10px] leading-tight text-ink-faint">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2.5 px-5 pb-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          Open Issues by Severity
        </p>
        {severityBars.map((bar) => (
          <div key={bar.label} className="flex items-center gap-3">
            <span className="w-14 shrink-0 text-[10px] text-ink-dim">{bar.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.value}%` }} />
            </div>
            <span className="w-6 shrink-0 text-right font-mono text-[10px] text-ink-faint">
              {bar.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
