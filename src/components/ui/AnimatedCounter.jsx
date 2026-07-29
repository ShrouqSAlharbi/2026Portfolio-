import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const numericValue = Number(value) || 0
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 })

  useEffect(() => {
    if (inView) motionValue.set(numericValue)
  }, [inView, motionValue, numericValue])

  const displayRef = useRef(null)

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`
      }
    })
  }, [spring, suffix])

  return (
    <motion.span ref={ref} className={className}>
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  )
}
