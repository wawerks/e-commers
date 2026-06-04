import Link from "next/link";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const links = [
  { label: "Shop", href: "/" },
  { label: "Categories", href: "/#categories" },
  { label: "Sellers", href: "/#sellers" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-6 z-30 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/90 px-6 py-3 shadow-[var(--shadow-card)] backdrop-blur">
      <Logo />
      <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-foreground)] lg:flex">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition hover:text-[var(--color-accent)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link href="/login">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
        </Link>
        <Link href="/register">
          <Button className="hidden sm:inline-flex">Get started</Button>
        </Link>
      </div>
    </header>
  );
}
