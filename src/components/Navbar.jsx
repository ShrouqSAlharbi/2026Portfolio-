import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { nav, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => nav.map((n) => n.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:mt-4 sm:px-6">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-wide text-ink sm:text-base"
          >
            {profile.name}
            <span className="ml-1.5 text-cyan">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active === item.id ? 'text-void' : 'text-ink-dim hover:text-ink'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan sm:inline-flex"
            >
              Let's talk
              <ArrowUpRight size={14} />
            </a>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="glass-panel mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <div className="flex flex-col p-2">
                {nav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider ${
                      active === item.id ? 'bg-white/5 text-cyan' : 'text-ink-dim'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
