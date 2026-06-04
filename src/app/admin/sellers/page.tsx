import { Card } from "@/components/ui/card";

export default function AdminSellersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Seller approvals</h1>
      <Card>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Approve new seller applications, review store profiles, and manage disputes.
        </p>
      </Card>
    </div>
  );
}
