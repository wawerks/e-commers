import { DashboardSidebar } from "@/components/dashboard/sidebar";

const links = [
  { label: "Overview", href: "/admin" },
  { label: "Users", href: "/admin/users" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Sellers", href: "/admin/sellers" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar title="Admin" links={links} />
      <div className="space-y-6">{children}</div>
    </div>
  );
}
