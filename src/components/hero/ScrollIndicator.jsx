import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#journey"
      aria-label="Scroll to next section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="grid h-8 w-8 place-items-center rounded-full border border-white/15"
      >
        <ChevronDown size={14} />
      </motion.span>
    </motion.a>
  )
}
