import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Revenue (30d)", value: "$12.4k" },
  { label: "Active listings", value: "24" },
  { label: "Pending orders", value: "8" },
  { label: "Avg. rating", value: "4.8" },
];

export default function SellerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Overview
        </p>
        <h1 className="text-3xl font-semibold">Seller dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="text-sm text-[var(--color-foreground)]/70">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <div>
          <p className="text-sm text-[var(--color-foreground)]/70">Quick actions</p>
          <p className="text-lg font-semibold">Keep your storefront moving</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/seller/products">
            <Button variant="secondary">Manage products</Button>
          </Link>
          <Link href="/seller/orders">
            <Button variant="ghost">View orders</Button>
          </Link>
          <Link href="/seller/analytics">
            <Button variant="ghost">See analytics</Button>
          </Link>
        </div>
      </Card>

      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-foreground)]/70">Recent activity</p>
        <p className="text-lg font-semibold">3 orders awaiting fulfillment</p>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Review open orders and update inventory to avoid stockouts.
        </p>
        <Link href="/seller/orders" className="inline-block pt-2 text-sm font-semibold text-[var(--color-accent)]">
          Go to orders →
        </Link>
      </Card>
    </div>
  );
}
