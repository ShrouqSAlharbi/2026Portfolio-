import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react'
import { contact, profile } from '../data/content.js'
import { fadeUp, viewportOnce } from '../lib/motion.js'
import SectionHeading from './ui/SectionHeading.jsx'
import GlowBackground from './ui/GlowBackground.jsx'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons.jsx'

const commandLine = `whoami --role "${profile.role}"`

function useTypewriter(text, active, speed = 32) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!active) return
    setOutput('')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [active, text, speed])

  return output
}

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, Icon: Phone },
  { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, Icon: GithubIcon },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin, Icon: LinkedinIcon },
]

export default function ContactTerminal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const typed = useTypewriter(commandLine, inView)
  const doneTyping = typed.length === commandLine.length

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <GlowBackground
        orbs={[{ color: 'electric', top: '10%', left: '10%', size: 420, opacity: 0.14 }]}
      />
      <SectionHeading kicker={contact.kicker} title={contact.title} />

      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-3 text-ink-dim"
        >
          {contact.body}
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 flex items-center justify-center gap-1.5 font-mono text-xs text-ink-faint"
        >
          <MapPin size={12} />
          {profile.location}
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="glass-panel mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-severity-high/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-severity-medium/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-severity-low/70" />
          <span className="ml-3 font-mono text-[11px] text-ink-faint">contact — comms-terminal</span>
        </div>

        <div className="p-5 font-mono text-sm sm:p-7">
          <p className="text-ink-dim">
            <span className="text-cyan">guest@portfolio</span>
            <span className="text-ink-faint">:~$ </span>
            {typed}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse-glow bg-cyan align-middle" />
          </p>

          {doneTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 space-y-2.5"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? undefined : '_blank'}
                  rel="noreferrer"
                  download={link.download}
                  data-cursor-hover
                  className="group flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 transition-colors hover:border-cyan/40 hover:bg-cyan/5"
                >
                  <span className="flex items-center gap-2.5 text-ink-dim group-hover:text-ink">
                    <link.Icon size={14} className="text-cyan" />
                    {link.label}
                    <span className="text-ink-faint">— {link.value}</span>
                  </span>
                  <ArrowUpRight size={14} className="text-ink-faint transition-colors group-hover:text-cyan" />
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
