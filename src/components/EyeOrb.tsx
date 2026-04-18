export function EyeOrb() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-2xl">
      <svg viewBox="0 0 600 240" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.65 0.28 305)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.65 0.28 305)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="120" rx="280" ry="110" fill="url(#eyeGlow)" />
        <path
          d="M 40 120 Q 300 -20 560 120 Q 300 260 40 120 Z"
          stroke="oklch(0.65 0.28 305 / 0.4)"
          strokeWidth="1"
        />
        <circle cx="180" cy="80" r="3" fill="oklch(0.7 0.3 305)" />
        <circle cx="430" cy="170" r="2.5" fill="oklch(0.7 0.3 305)" />
        <text x="475" y="110" fill="oklch(0.7 0.3 305 / 0.7)" fontSize="14">+</text>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card glow">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
      </div>
    </div>
  );
}
