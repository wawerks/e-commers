import Link from "next/link";

type SidebarProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export function DashboardSidebar({ title, links }: SidebarProps) {
  return (
    <aside className="flex h-full flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">{title}</p>
        <p className="text-xl font-semibold">Dashboard</p>
      </div>
      <nav className="flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-transparent px-3 py-2 transition hover:border-[var(--color-border)] hover:bg-[var(--color-muted)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
