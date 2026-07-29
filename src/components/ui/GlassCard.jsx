import { motion } from 'framer-motion'

export default function GlassCard({
  as = 'div',
  children,
  className = '',
  hover = true,
  variants,
  ...rest
}) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      variants={variants}
      className={`glass-panel relative rounded-2xl ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_0_40px_-12px_var(--color-cyan)]'
          : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
