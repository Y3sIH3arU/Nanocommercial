import { Link, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/pricing", label: "PRICING" },
  { to: "/api", label: "API" },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1.5">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono-tracked text-xs transition-colors",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
          <span className="font-mono-tracked text-[10px] text-muted-foreground">
            STW_SECURE_NET
          </span>
        </div>
      </div>
    </header>
  );
}
