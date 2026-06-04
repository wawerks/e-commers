import { Card } from "@/components/ui/card";

const metrics = [
  { label: "GMV (30d)", value: "$12.4k", change: "+8.2%" },
  { label: "Units sold", value: "186", change: "+12%" },
  { label: "Conversion", value: "4.1%", change: "+0.3%" },
  { label: "Avg. order value", value: "$67", change: "+2.1%" },
];

const topProducts = [
  { name: "Coastal Ceramic Set", revenue: "$3.2k", units: 38 },
  { name: "Linen Travel Tote", revenue: "$2.8k", units: 23 },
  { name: "Botanical Night Oil", revenue: "$1.4k", units: 34 },
];

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Performance
        </p>
        <h1 className="text-3xl font-semibold">Seller analytics</h1>
        <p className="mt-2 text-sm text-[var(--color-foreground)]/70">
          Track revenue, conversion, and top-performing listings over time.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-sm text-[var(--color-foreground)]/70">{metric.label}</p>
            <p className="text-2xl font-semibold">{metric.value}</p>
            <p className="text-xs font-semibold text-[var(--color-primary)]">{metric.change}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <div>
          <p className="text-sm text-[var(--color-foreground)]/70">Top products</p>
          <p className="text-lg font-semibold">Best sellers this month</p>
        </div>
        <div className="space-y-3">
          {topProducts.map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] px-4 py-3"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-[var(--color-foreground)]/70">
                  {product.units} units sold
                </p>
              </div>
              <p className="font-semibold">{product.revenue}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-foreground)]/70">Traffic overview</p>
        <p className="text-lg font-semibold">Store visits up 14% week over week</p>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Detailed charts and export tools will appear here as your store grows.
        </p>
      </Card>
    </div>
  );
}
