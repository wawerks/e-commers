import { Card } from "@/components/ui/card";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>
      <Card>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Track fulfillment status, payment events, and escalations.
        </p>
      </Card>
    </div>
  );
}
