import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChevronRight, Download, Apple, Monitor, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nano Browser | STW" },
      {
        name: "description",
        content:
          "Nano Browser pricing tiers — free for STW team & affiliates. Operator, Intelligence, and Director plans for professional threat hunters.",
      },
      { property: "og:title", content: "Pricing — Nano Browser" },
      {
        property: "og:description",
        content: "Free for STW affiliates. Pro plans for power users.",
      },
    ],
  }),
  component: Pricing,
});

type Tier = {
  id: string;
  name: string;
  price: string;
  suffix: string;
  features: string[];
  recommended?: boolean;
};

const TIERS: Tier[] = [
  {
    id: "commence",
    name: "COMMENCE",
    price: "$0",
    suffix: "FOREVER",
    features: ["100 SCRAPES", "PUBLIC PROXY", "BASIC LAB"],
  },
  {
    id: "operator",
    name: "OPERATOR",
    price: "$49",
    suffix: "/MO",
    features: ["1K SCRAPES", "STANDARD PROXIES", "DASHBOARD ACCESS"],
  },
  {
    id: "intelligence",
    name: "INTELLIGENCE",
    price: "$149",
    suffix: "/MO",
    features: ["10K SCRAPES", "RESIDENTIAL MESH", "AI SYNTHESIS"],
    recommended: true,
  },
  {
    id: "director",
    name: "DIRECTOR",
    price: "$499",
    suffix: "/MO",
    features: ["UNLIMITED", "DEDICATED NODES", "24/7 SUPPORT"],
  },
];

const SHOPIFY_URL = "https://nano-browser.myshopify.com";

function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 grid-bg">
        <section className="mx-auto max-w-7xl px-4 md:px-8 pt-12 md:pt-16">
          <p className="text-center font-mono-tracked text-[10px] md:text-xs text-muted-foreground">
            NANO BROWSER IS{" "}
            <span className="text-foreground font-bold">FREE</span> FOR ANYONE
            INSIDE{" "}
            <span className="text-foreground font-bold">
              SECURE THE WORLD TEAM &amp; AFFILIATES
            </span>
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((tier) => (
              <div key={tier.id} className="relative">
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full gradient-primary px-3 py-1 font-mono-tracked text-[10px] font-bold text-primary-foreground glow">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    "h-full rounded-2xl border bg-card/80 backdrop-blur p-6 flex flex-col shadow-card transition-all hover:-translate-y-1",
                    tier.recommended
                      ? "border-primary/50 glow"
                      : "border-border",
                  )}
                >
                  <span className="font-mono-tracked text-[10px] text-muted-foreground">
                    {tier.name}
                  </span>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground tracking-tight">
                      {tier.price}
                    </span>
                    <span className="font-mono-tracked text-[10px] text-muted-foreground">
                      {tier.suffix}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 font-mono-tracked text-[11px] text-muted-foreground"
                      >
                        <ChevronRight className="h-3 w-3 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.id === "commence" ? "#download" : SHOPIFY_URL}
                    target={tier.id === "commence" ? undefined : "_blank"}
                    rel={tier.id === "commence" ? undefined : "noreferrer"}
                    className={cn(
                      "mt-8 inline-flex items-center justify-center rounded-full px-4 py-3 font-mono-tracked text-xs font-bold transition-transform hover:scale-[1.02]",
                      tier.recommended
                        ? "gradient-primary text-primary-foreground glow"
                        : "border border-border bg-secondary/40 text-foreground hover:bg-secondary",
                    )}
                  >
                    DEPLOY_MODULE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mx-auto max-w-5xl px-4 md:px-8 py-24 mt-12 border-t border-border/40">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card glow">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              DOWNLOAD_NANO_AGENT
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Free build. Pick your platform.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <DownloadCard icon={<Apple className="h-5 w-5" />} label="MACOS" href="/download/nano-browser-macos.dmg" />
            <DownloadCard icon={<Monitor className="h-5 w-5" />} label="WINDOWS" href="/download/nano-browser-setup.exe" />
            <DownloadCard icon={<Terminal className="h-5 w-5" />} label="LINUX" href="/download/nano-browser-linux.zip" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function DownloadCard({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 text-center transition-all hover:border-primary/50 hover:-translate-y-1 hover:glow"
    >
      <div className="flex items-center justify-center gap-2 font-mono-tracked text-[10px] text-muted-foreground">
        {icon}
        <span>BINARY_FOR</span>
      </div>
      <div className="mt-3 font-mono-tracked text-base font-bold text-foreground group-hover:text-primary transition-colors">
        {label}
      </div>
    </a>
  );
}
