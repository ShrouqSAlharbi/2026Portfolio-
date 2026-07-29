import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../data/content.js'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons.jsx'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {profile.name}
            <span className="text-cyan">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-faint">
            QA Game Tester &amp; Web Developer — built for players and users alike.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Mail size={18} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-electric to-cyan text-void"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-ink-faint/70">
        © {new Date().getFullYear()} {profile.name} — All rights reserved.
      </p>
    </footer>
  )
}
