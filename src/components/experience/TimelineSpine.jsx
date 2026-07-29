import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery.js'

export default function TimelineSpine({ containerRef }) {
  const lineRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!containerRef.current || !lineRef.current || reducedMotion) return

    let ctx
    let cancelled = false

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 60%',
                scrub: 0.6,
              },
            }
          )
        }, containerRef)
      }
    )

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [containerRef, reducedMotion])

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block">
      <div
        ref={lineRef}
        className="h-full w-full origin-top bg-gradient-to-b from-electric via-cyan to-violet"
        style={{ transform: 'scaleY(0)' }}
      />
    </div>
  )
}
