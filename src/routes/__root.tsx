import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-mono-tracked text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-mono-tracked text-sm text-muted-foreground">
          MODULE_NOT_FOUND
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The route you requested does not exist on this node.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-primary px-5 py-2 font-mono-tracked text-xs font-medium text-primary-foreground glow transition-transform hover:scale-105"
          >
            RETURN_HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nano Browser — Investigate Digital Footprints | STW" },
      {
        name: "description",
        content:
          "Nano Browser by Secure The World (STW). Correlate breach intel, social identities, and infrastructure clues without leaving a single dashboard.",
      },
      { name: "author", content: "Secure The World" },
      { property: "og:title", content: "Nano Browser — Investigate Digital Footprints" },
      {
        property: "og:description",
        content:
          "Threat intelligence, OSINT and digital forensics in one nano-sized browser. Free for STW team & affiliates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SecureTheWorld" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
