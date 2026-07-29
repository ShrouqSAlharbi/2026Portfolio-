import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsTouchDevice, usePrefersReducedMotion } from '../hooks/useMediaQuery.js'

export default function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const reducedMotion = usePrefersReducedMotion()
  const [hovering, setHovering] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 300, damping: 28, mass: 0.4 })
  const ringY = useSpring(dotY, { stiffness: 300, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (isTouch || reducedMotion) return

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onOver = (e) => {
      setHovering(Boolean(e.target.closest('a, button, [data-cursor-hover]')))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
    }
  }, [isTouch, reducedMotion, dotX, dotY])

  if (isTouch || reducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden lg:block" aria-hidden="true">
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-cyan"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="absolute -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border border-cyan"
      />
    </div>
  )
}
