const palette = {
  electric: 'bg-electric',
  cyan: 'bg-cyan',
  violet: 'bg-violet',
  magenta: 'bg-magenta',
}

export default function GlowBackground({ variant = 'grid', orbs = [] }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {variant === 'grid' && (
        <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      )}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[110px] animate-float-slow ${palette[orb.color] ?? palette.electric}`}
          style={{
            width: orb.size ?? 380,
            height: orb.size ?? 380,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity ?? 0.18,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}
    </div>
  )
}
