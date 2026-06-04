export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-2xl bg-[var(--color-accent)] p-2 shadow-[var(--shadow-card)]">
        <div className="h-full w-full rounded-xl bg-[var(--color-background)]" />
      </div>
      <div className="leading-tight">
        <p className="text-base font-semibold">MarketDock</p>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-primary)]">
          Multi-Vendor
        </p>
      </div>
    </div>
  );
}
