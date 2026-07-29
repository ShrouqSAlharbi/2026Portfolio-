import { motion } from 'framer-motion'

const colors = ['#22e5ec', '#3b6bff', '#a855f7', '#4ade80', '#ff4fa3']

function pieceStyle(i) {
  const angle = (i / 14) * Math.PI * 2
  const distance = 60 + Math.random() * 50
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 20,
    rotate: Math.random() * 360,
    color: colors[i % colors.length],
  }
}

export default function ConfettiBurst({ small = false }) {
  const count = small ? 10 : 16
  const pieces = Array.from({ length: count }, (_, i) => pieceStyle(i))

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" aria-hidden="true">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 1, rotate: p.rotate }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 block h-2 w-2 rounded-sm"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}
