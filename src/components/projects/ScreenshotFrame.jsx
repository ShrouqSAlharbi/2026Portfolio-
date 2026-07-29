export default function ScreenshotFrame({ src, alt, url }) {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-severity-high/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-severity-medium/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-severity-low/70" />
        {url && (
          <div className="ml-3 flex-1 truncate rounded-full bg-black/30 px-3 py-1 font-mono text-[10px] text-ink-faint">
            {url}
          </div>
        )}
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
  )
}
