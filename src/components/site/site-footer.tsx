import Link from "next/link";

const footerLinks = [
  { label: "Support", href: "/#support" },
  { label: "Partners", href: "/#partners" },
  { label: "Shipping", href: "/#shipping" },
  { label: "Privacy", href: "/#privacy" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold">MarketDock</p>
          <p className="text-xs text-[var(--color-foreground)]/70">
            Crafted for independent brands and thoughtful buyers.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--color-foreground)]/70 transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
