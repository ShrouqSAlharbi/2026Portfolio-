import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import BugReport from './BugReport.jsx'
import { bugs } from '../../data/qaLab.js'

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default function EdgeCaseChallenge({ foundBugs, onBugFound, onMiss }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [message, setMessage] = useState(null)

  const found003 = foundBugs.has('BUG-003')
  const found004 = foundBugs.has('BUG-004')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(null)

    const hasEmptyField = !form.username.trim() || !form.email.trim() || !form.password.trim()
    if (hasEmptyField) {
      if (!found003) onBugFound('BUG-003')
      else setMessage("You've already logged that one — try a different kind of bad input.")
      return
    }

    if (!isValidEmail(form.email)) {
      if (!found004) onBugFound('BUG-004')
      else setMessage("You've already logged that one — try leaving a field empty instead.")
      return
    }

    onMiss()
    setMessage('The form handled that input correctly — no bug there. Try something trickier.')
  }

  return (
    <div>
      <div className="glass-panel rounded-2xl p-5 sm:p-6">
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div>
            <label htmlFor="qa-username" className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Username
            </label>
            <input
              id="qa-username"
              value={form.username}
              onChange={update('username')}
              placeholder="e.g. rana_qa"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>
          <div>
            <label htmlFor="qa-email" className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Email
            </label>
            <input
              id="qa-email"
              value={form.email}
              onChange={update('email')}
              placeholder="e.g. rana@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>
          <div>
            <label htmlFor="qa-password" className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Password
            </label>
            <input
              id="qa-password"
              type="password"
              value={form.password}
              onChange={update('password')}
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>

          <button
            type="submit"
            data-cursor-hover
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-5 py-3 font-mono text-xs uppercase tracking-wider text-void sm:w-auto"
          >
            <Send size={14} />
            Create Account
          </button>
        </form>
      </div>

      <AnimatePresence mode="popLayout">
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-center text-xs text-ink-faint"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {found003 && <BugReport key="BUG-003" bug={bugs['BUG-003']} celebrationText="Great exploratory testing!" />}
      </AnimatePresence>
      <AnimatePresence>
        {found004 && <BugReport key="BUG-004" bug={bugs['BUG-004']} celebrationText="Great exploratory testing!" />}
      </AnimatePresence>
    </div>
  )
}
