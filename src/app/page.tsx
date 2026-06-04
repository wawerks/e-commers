import Image from "next/image";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductCard } from "@/components/products/product-card";

const products = [
  {
    name: "Coastal Ceramic Set",
    price: "$84",
    seller: "Studio Tide",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Linen Travel Tote",
    price: "$120",
    seller: "Nomad Loom",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Botanical Night Oil",
    price: "$42",
    seller: "Vera Apothecary",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
  },
];

const metrics = [
  { label: "Active sellers", value: "1.4k" },
  { label: "Monthly orders", value: "92k" },
  { label: "Curated collections", value: "280" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-6">
        <SiteHeader />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-12">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-primary)]">
              Curated commerce
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight text-[var(--color-foreground)] sm:text-5xl">
              The multi-vendor market built for design-forward brands.
            </h1>
            <p className="text-lg text-[var(--color-foreground)]/70">
              Launch a fully managed marketplace where sellers, buyers, and operators feel at home.
              MarketDock blends premium shopping with operational clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Start selling</Button>
              <Button variant="ghost">Explore the market</Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[var(--color-foreground)]/70">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="text-xl font-semibold text-[var(--color-foreground)]">
                    {metric.value}
                  </p>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/15 via-transparent to-[var(--color-accent)]/15" />
            <div className="relative grid gap-6">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Featured drop
                </p>
                <h2 className="text-2xl font-semibold">Summer Studio Edit</h2>
                <p className="text-sm text-[var(--color-foreground)]/70">
                  Lightweight textiles, handcrafted decor, and essentials for slow travel.
                </p>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative h-52 overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
                    alt="Summer edit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-foreground)]/70">
                    18 products curated
                  </span>
                  <Button variant="secondary" className="text-xs">
                    View collection
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section id="categories" className="grid gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Shop by mood
            </p>
            <h2 className="text-3xl font-semibold">Seasonal collections with a boutique touch.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["New arrivals", "Studio favorites", "Wellness essentials"].map((item) => (
              <Card key={item} className="flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-lg font-semibold">{item}</p>
                  <p className="text-sm text-[var(--color-foreground)]/70">
                    Curated by our marketplace editors for a refined shopping experience.
                  </p>
                </div>
                <Button variant="ghost" className="mt-6 w-fit">
                  Explore
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section id="sellers" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Trending from verified sellers.</h2>
            <Button variant="secondary">View all</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Marketplace control
            </p>
            <h3 className="text-2xl font-semibold">Operate with visibility and confidence.</h3>
            <p className="text-sm text-[var(--color-foreground)]/70">
              Admins approve sellers, track fulfillment, and see real-time analytics. Sellers get
              tailored dashboards for inventory, payouts, and performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">Admin dashboard</Button>
              <Button variant="secondary">Seller tools</Button>
            </div>
          </Card>
          <Card className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Buyer experience
            </p>
            <h3 className="text-2xl font-semibold">Checkout built for loyalty.</h3>
            <p className="text-sm text-[var(--color-foreground)]/70">
              Wishlists, reorders, and review prompts turn first-time shoppers into long-term fans.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">View wishlist</Button>
              <Button>Start shopping</Button>
            </div>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
