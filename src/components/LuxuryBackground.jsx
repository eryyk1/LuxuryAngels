const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 7) % 94}%`,
  top: `${(i * 27 + 12) % 88}%`,
  size: 2 + (i % 4),
  delay: `${-(i * 1.4)}s`,
  duration: `${14 + (i % 10)}s`,
  opacity: 0.35 + (i % 5) * 0.1,
}))

export default function LuxuryBackground() {
  return (
    <div className="luxury-bg fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="luxury-bg-mesh" />
      <div className="luxury-bg-mesh luxury-bg-mesh-2" />

      <div className="luxury-bg-wave luxury-bg-wave-1" />
      <div className="luxury-bg-wave luxury-bg-wave-2" />
      <div className="luxury-bg-wave luxury-bg-wave-3" />

      <div className="absolute inset-0 luxury-pattern opacity-50" />

      <div className="luxury-bg-shimmer-line luxury-bg-shimmer-line-1" />
      <div className="luxury-bg-shimmer-line luxury-bg-shimmer-line-2" />
      <div className="luxury-bg-shimmer-line luxury-bg-shimmer-line-3" />

      <div
        className="luxury-bg-orb luxury-bg-orb-1 animate-gold-orb"
        style={{ background: 'radial-gradient(circle, rgba(196, 160, 98, 0.32) 0%, transparent 65%)' }}
      />
      <div
        className="luxury-bg-orb luxury-bg-orb-2 animate-gold-orb"
        style={{ background: 'radial-gradient(circle, rgba(143, 111, 56, 0.26) 0%, transparent 60%)', animationDelay: '-6s' }}
      />
      <div
        className="luxury-bg-orb luxury-bg-orb-3 animate-ambient-glow"
        style={{ background: 'radial-gradient(circle, rgba(168, 135, 74, 0.28) 0%, transparent 70%)', animationDelay: '-12s' }}
      />

      <div className="luxury-bg-shape luxury-bg-shape-1 animate-gold-orb" />
      <div className="luxury-bg-shape luxury-bg-shape-2 animate-gold-orb" style={{ animationDelay: '-9s' }} />

      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="luxury-bg-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="luxury-bg-vignette" />
    </div>
  )
}
