import { DashboardSidebar } from "@/components/dashboard/sidebar";

const links = [
  { label: "Overview", href: "/seller" },
  { label: "Products", href: "/seller/products" },
  { label: "Orders", href: "/seller/orders" },
  { label: "Analytics", href: "/seller/analytics" },
];

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar title="Seller" links={links} />
      <div className="space-y-6">{children}</div>
    </div>
  );
}
