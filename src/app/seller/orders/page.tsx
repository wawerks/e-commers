import { Card } from "@/components/ui/card";

const orders = [
  {
    id: "ORD-1042",
    buyer: "Alex Rivera",
    items: 2,
    total: "$204",
    status: "PAID",
    date: "Jun 2, 2026",
  },
  {
    id: "ORD-1038",
    buyer: "Jordan Lee",
    items: 1,
    total: "$84",
    status: "FULFILLING",
    date: "Jun 1, 2026",
  },
  {
    id: "ORD-1031",
    buyer: "Sam Chen",
    items: 3,
    total: "$318",
    status: "SHIPPED",
    date: "May 30, 2026",
  },
];

export default function SellerOrdersPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Track fulfillment status, payment events, and buyer communications.
        </p>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="grid grid-cols-[0.8fr_1fr_0.5fr_0.6fr_0.7fr_0.7fr] gap-4 border-b border-[var(--color-border)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-foreground)]/60">
          <span>Order</span>
          <span>Buyer</span>
          <span>Items</span>
          <span>Total</span>
          <span>Status</span>
          <span>Date</span>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-[0.8fr_1fr_0.5fr_0.6fr_0.7fr_0.7fr] gap-4 border-b border-[var(--color-border)] px-6 py-4 last:border-b-0"
          >
            <span className="font-medium">{order.id}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{order.buyer}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{order.items}</span>
            <span className="text-sm font-semibold">{order.total}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{order.status}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{order.date}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
