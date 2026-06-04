import Link from "next/link";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;

  const isAdmin = user?.role === "ADMIN";
  const isApprovedSeller = user?.role === "SELLER" && user?.sellerStatus === "APPROVED";
  const isPendingSeller = user?.sellerStatus === "PENDING";

  return (
    <div className="min-h-screen">
      <div className="px-6 pt-6">
        <SiteHeader />
      </div>

      <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 pb-20 pt-16">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">Account</p>
          <h1 className="text-3xl font-semibold">Your profile</h1>
          <p className="text-sm text-[var(--color-foreground)]/70">
            Manage your account and access marketplace tools.
          </p>
        </div>

        <Card className="space-y-4">
          <div>
            <p className="text-sm text-[var(--color-foreground)]/70">Signed in as</p>
            <p className="text-lg font-semibold">{user?.name ?? "Guest"}</p>
            <p className="text-sm text-[var(--color-foreground)]/70">{user?.email}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[var(--color-border)] px-3 py-1">
              Role: {user?.role ?? "USER"}
            </span>
            <span className="rounded-full border border-[var(--color-border)] px-3 py-1">
              Seller status: {user?.sellerStatus ?? "NONE"}
            </span>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {isAdmin ? (
            <Card className="space-y-3">
              <p className="text-lg font-semibold">Admin dashboard</p>
              <p className="text-sm text-[var(--color-foreground)]/70">
                Manage users, sellers, products, and orders.
              </p>
              <Link href="/admin">
                <Button className="w-full">Open admin</Button>
              </Link>
            </Card>
          ) : null}

          {isApprovedSeller ? (
            <Card className="space-y-3">
              <p className="text-lg font-semibold">Seller dashboard</p>
              <p className="text-sm text-[var(--color-foreground)]/70">
                Manage listings, orders, and store analytics.
              </p>
              <Link href="/seller">
                <Button className="w-full">Open seller tools</Button>
              </Link>
            </Card>
          ) : null}

          {!isAdmin && !isApprovedSeller ? (
            <Card className="space-y-3 sm:col-span-2">
              <p className="text-lg font-semibold">
                {isPendingSeller ? "Seller application pending" : "Become a seller"}
              </p>
              <p className="text-sm text-[var(--color-foreground)]/70">
                {isPendingSeller
                  ? "Your seller application is under review. An admin will approve your account soon."
                  : "Apply to sell on MarketDock and reach design-forward buyers. Contact support or ask an admin to upgrade your account."}
              </p>
              <Link href="/">
                <Button variant="ghost" className="w-fit">
                  Continue shopping
                </Button>
              </Link>
            </Card>
          ) : null}
        </div>

        <SignOutButton />
      </main>

      <SiteFooter />
    </div>
  );
}
