import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js'

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const delay = reducedMotion ? 0 : 500
    const timer = setTimeout(() => setVisible(false), delay)
    return () => clearTimeout(timer)
  }, [reducedMotion])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-void"
        >
          <div className="relative flex h-16 w-16 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-cyan/30 border-t-cyan"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
            />
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_16px_2px_var(--color-cyan)]" />
          </div>
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.4em] text-ink-faint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Initializing Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
