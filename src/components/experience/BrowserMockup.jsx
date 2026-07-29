const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const bookings = [
  { day: 0, row: 1, span: 2, label: 'Room A · Standup', color: 'bg-electric/70' },
  { day: 1, row: 2, span: 3, label: 'Room B · Client Call', color: 'bg-cyan/70' },
  { day: 2, row: 0, span: 2, label: 'Desk 12 · Focus', color: 'bg-violet/70' },
  { day: 3, row: 3, span: 2, label: 'Room A · Review', color: 'bg-electric/70' },
  { day: 4, row: 1, span: 2, label: 'Room C · Interview', color: 'bg-cyan/70' },
]

export default function BrowserMockup() {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-severity-high/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-severity-medium/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-severity-low/70" />
        <div className="ml-3 flex-1 truncate rounded-full bg-black/30 px-3 py-1 font-mono text-[10px] text-ink-faint">
          app.quickstep-office.internal/bookings
        </div>
      </div>

      <div className="grid grid-cols-[80px_1fr] gap-3 p-4 sm:p-5">
        <div className="space-y-2">
          <div className="h-7 rounded-md bg-gradient-to-r from-electric to-cyan opacity-80" />
          <div className="h-16 rounded-md bg-white/5" />
          <div className="h-16 rounded-md bg-white/5" />
          <div className="h-10 rounded-md bg-white/5" />
        </div>

        <div>
          <div className="mb-2 grid grid-cols-5 gap-2">
            {days.map((d) => (
              <div key={d} className="rounded-md bg-white/[0.04] py-1.5 text-center font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-2" style={{ gridAutoRows: '28px' }}>
            {bookings.map((b, i) => (
              <div
                key={i}
                className={`rounded-md px-2 py-1 text-[9px] font-medium text-void ${b.color}`}
                style={{
                  gridColumn: b.day + 1,
                  gridRow: `${b.row + 1} / span ${b.span}`,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
