import { Lightbulb, ExternalLink } from 'lucide-react'
import { taibahMapProject } from '../../data/projects.js'
import ScreenshotFrame from './ScreenshotFrame.jsx'

const screenshots = [
  { src: '/projects/taibahmap-1.png', alt: 'Building detail panel showing floors and description' },
  { src: '/projects/taibahmap-2.png', alt: 'Campus overview with a route drawn between two points' },
  { src: '/projects/taibahmap-3.png', alt: 'Search highlighting a matched building on the map' },
]

function Block({ title, children }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">{title}</h4>
      {children}
    </div>
  )
}

export default function ProjectTaibahMap() {
  return (
    <div>
      <Block title="Overview">
        <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{taibahMapProject.overview}</p>
        <a
          href={taibahMapProject.repoUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline"
        >
          View Repository
          <ExternalLink size={12} />
        </a>
      </Block>

      <Block title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {taibahMapProject.stack.map((tech) => (
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
        <div className="space-y-4">
          {screenshots.map((shot) => (
            <ScreenshotFrame key={shot.src} src={shot.src} alt={shot.alt} />
          ))}
        </div>
      </Block>

      <Block title="Features">
        <ul className="space-y-2">
          {taibahMapProject.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-ink-dim">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {f}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Challenges">
        <div className="space-y-3">
          {taibahMapProject.challenges.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-ink">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-faint">{c.detail}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Lessons Learned">
        <ul className="space-y-2">
          {taibahMapProject.lessons.map((l) => (
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
