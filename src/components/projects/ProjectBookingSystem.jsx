import { Lightbulb } from 'lucide-react'
import { bookingProject } from '../../data/projects.js'
import BrowserMockup from '../experience/BrowserMockup.jsx'

function Block({ title, children }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">{title}</h4>
      {children}
    </div>
  )
}

export default function ProjectBookingSystem() {
  return (
    <div>
      <Block title="Overview">
        <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{bookingProject.overview}</p>
      </Block>

      <Block title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {bookingProject.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </Block>

      <Block title="Screens">
        <BrowserMockup />
      </Block>

      <Block title="Features">
        <ul className="space-y-2">
          {bookingProject.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-ink-dim">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {f}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Challenges">
        <div className="space-y-3">
          {bookingProject.challenges.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-ink">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-faint">{c.detail}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Lessons Learned">
        <ul className="space-y-2">
          {bookingProject.lessons.map((l) => (
            <li key={l} className="flex items-start gap-2.5 text-sm text-ink-dim">
              <Lightbulb size={15} className="mt-0.5 shrink-0 text-violet-soft" />
              {l}
            </li>
          ))}
        </ul>
      </Block>
    </div>
  )
}
