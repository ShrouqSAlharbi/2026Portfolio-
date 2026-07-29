import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export default function MissionFile({ open, onClose, code, title, role, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto px-3 py-6 sm:items-center sm:px-6 sm:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mission-file-title"
        >
          <motion.div
            className="absolute inset-0 bg-void/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative w-full max-w-3xl overflow-hidden rounded-2xl bg-void-soft"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                  Mission File · {code}
                </span>
                <h3 id="mission-file-title" className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm text-ink-faint">{role}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close mission file"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-ink-dim transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <X size={18} />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
