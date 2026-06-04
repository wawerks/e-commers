import { Card } from "@/components/ui/card";

export default function AdminProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Products</h1>
      <Card>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Review catalog changes, highlight featured drops, and moderate listings.
        </p>
      </Card>
    </div>
  );
}
