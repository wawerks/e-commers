import { Card } from "@/components/ui/card";

const stats = [
  { label: "GMV", value: "$482k" },
  { label: "Active sellers", value: "138" },
  { label: "Conversion", value: "3.9%" },
  { label: "Orders", value: "5,204" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Analytics
        </p>
        <h1 className="text-3xl font-semibold">Admin overview</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="text-sm text-[var(--color-foreground)]/70">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>
      <Card className="space-y-2">
        <p className="text-sm text-[var(--color-foreground)]/70">Seller approvals</p>
        <p className="text-lg font-semibold">12 sellers pending review</p>
        <p className="text-sm text-[var(--color-foreground)]/70">
          Review applications to keep the marketplace curated.
        </p>
      </Card>
    </div>
  );
}
