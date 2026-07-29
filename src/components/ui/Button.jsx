import { motion } from 'framer-motion'

export default function Button({
  as = 'a',
  href,
  onClick,
  download,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const Component = motion[as] ?? motion.a
  const style =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan)] text-[var(--color-void)] font-semibold shadow-[0_0_30px_-6px_var(--color-electric)]'
      : variant === 'secondary'
      ? 'glass-panel text-[var(--color-ink)]'
      : 'text-[var(--color-ink-dim)] border border-white/10'

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base transition-colors duration-200 ${style} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
