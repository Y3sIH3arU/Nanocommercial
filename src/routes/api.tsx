import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Code2 } from "lucide-react";

export const Route = createFileRoute("/api")({
  head: () => ({
    meta: [
      { title: "API — Nano Browser | STW" },
      {
        name: "description",
        content:
          "Nano Browser API — programmatic access to OSINT, breach intel, and identity correlation endpoints.",
      },
      { property: "og:title", content: "Nano Browser API" },
      {
        property: "og:description",
        content: "Programmatic access to threat intelligence endpoints.",
      },
    ],
  }),
  component: ApiPage,
});

function ApiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 grid-bg">
        <section className="mx-auto max-w-4xl px-4 md:px-8 py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card glow">
            <Code2 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            API_ACCESS
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Programmatic endpoints for breach correlation, identity resolution,
            and infrastructure scans. Available on Operator tier and above.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card/80 p-6 text-left font-mono text-xs text-muted-foreground shadow-card">
            <div className="flex items-center gap-2 mb-3 font-mono-tracked text-[10px]">
              <span className="h-2 w-2 rounded-full bg-primary" />
              POST /v1/correlate
            </div>
            <pre className="overflow-x-auto">
{`curl -X POST https://api.nano.stw.io/v1/correlate \\
  -H "Authorization: Bearer $NANO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "target": "user@example.com", "depth": 2 }'`}
            </pre>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
