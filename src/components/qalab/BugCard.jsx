import { motion, AnimatePresence } from 'framer-motion'
import { Bug } from 'lucide-react'

/**
 * Wraps a piece of a fake app mockup and makes it clickable/inspectable.
 * The wrapped content IS the visual bug (or a decoy) — no coordinate math,
 * so it stays aligned at any viewport width.
 */
export default function BugCard({ found, onSelect, label, disabled, className = '', children }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      aria-label={label}
      aria-pressed={found}
      data-cursor-hover
      className={`group relative rounded-lg text-left outline-none transition-shadow duration-200 ${
        found
          ? 'ring-2 ring-severity-low/70'
          : 'ring-1 ring-transparent hover:ring-cyan/50 focus-visible:ring-cyan/70'
      } ${className}`}
    >
      {children}
      <AnimatePresence>
        {found && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 20 }}
            className="absolute -right-2 -top-2 z-10 grid h-6 w-6 place-items-center rounded-full bg-severity-low text-void shadow-[0_0_16px_2px_rgba(74,222,128,0.5)]"
          >
            <Bug size={13} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
