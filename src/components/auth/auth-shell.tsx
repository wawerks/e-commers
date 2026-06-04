import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Card } from "@/components/ui/card";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({ eyebrow, title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-6">
        <SiteHeader />
      </div>

      <main className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 pb-20 pt-16">
        <Card className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-sm text-[var(--color-foreground)]/70">{subtitle}</p>
          </div>
          {children}
        </Card>
        {footer}
      </main>

      <SiteFooter />
    </div>
  );
}
