export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 11c0-3.5-2.5-6-6-6" />
          <path d="M12 11c0-2 1.5-4 4-4" />
          <path d="M12 11v10" />
          <path d="M8 21c0-4 1.5-7 4-10" />
          <path d="M16 21c-1-3-2.5-5-4-7" />
          <circle cx="12" cy="11" r="1.2" fill="currentColor" />
        </svg>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10" />
      </div>
      <span className="font-mono-tracked text-sm font-bold tracking-[0.2em] text-foreground">
        NANO_BROWSER
      </span>
    </div>
  );
}
