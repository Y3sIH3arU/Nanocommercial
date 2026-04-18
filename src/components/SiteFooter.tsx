export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono-tracked text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Nano Browser
        </p>
      </div>
    </footer>
  );
}
