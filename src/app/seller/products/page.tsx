import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Coastal Ceramic Set",
    status: "ACTIVE",
    inventory: 42,
    price: "$84",
  },
  {
    name: "Linen Travel Tote",
    status: "ACTIVE",
    inventory: 18,
    price: "$120",
  },
  {
    name: "Botanical Night Oil",
    status: "DRAFT",
    inventory: 0,
    price: "$42",
  },
];

export default function SellerProductsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-[var(--color-foreground)]/70">
            Manage your catalog, inventory, and listing status.
          </p>
        </div>
        <Button>Add product</Button>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] gap-4 border-b border-[var(--color-border)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-foreground)]/60">
          <span>Product</span>
          <span>Status</span>
          <span>Stock</span>
          <span>Price</span>
        </div>
        {products.map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] gap-4 border-b border-[var(--color-border)] px-6 py-4 last:border-b-0"
          >
            <span className="font-medium">{product.name}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{product.status}</span>
            <span className="text-sm text-[var(--color-foreground)]/70">{product.inventory}</span>
            <span className="text-sm font-semibold">{product.price}</span>
          </div>
        ))}
      </Card>

      <Card>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Create drafts, publish active listings, and archive seasonal drops from this view.
        </p>
      </Card>
    </div>
  );
}
