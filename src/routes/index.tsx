import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EyeOrb } from "@/components/EyeOrb";
import { Search, Layers, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 grid-bg">
        <section className="mx-auto max-w-6xl px-4 md:px-8 pt-16 md:pt-28 pb-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
            Investigate Digital Footprints
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.78_0.22_320)] bg-clip-text text-transparent">
              Nano Browser
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            Correlate breach intel, social identities, and infrastructure clues
            without leaving a single dashboard.
          </p>

          <p className="mt-10 font-mono-tracked text-[10px] md:text-xs text-muted-foreground">
            IN DAILY USE BY THREAT HUNTERS, DIGITAL FORENSICS TEAMS, AND FRAUD UNITS ACROSS 40+ ORGANIZATIONS
          </p>

          <div className="mt-10">
            <EyeOrb />
          </div>

          <div className="mt-2 mx-auto max-w-2xl">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur p-2 shadow-card">
              <Search className="ml-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter target UID, hash, or identity..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="layers">
                <Layers className="h-4 w-4 text-muted-foreground" />
              </button>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.02]"
              >
                Search <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-3 flex items-center justify-between px-2">
              <span className="font-mono-tracked text-[10px] text-muted-foreground">
                # 1274857827508424818
              </span>
              <span className="font-mono-tracked text-[10px] text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                SYSTEM ANALYSIS ACTIVE
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
