import Image from "next/image";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  name: string;
  price: string;
  seller: string;
  image: string;
};

export function ProductCard({ name, price, seller, image }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-[var(--color-foreground)]/70">{seller}</p>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-base font-medium text-[var(--color-accent)]">{price}</p>
      </div>
    </Card>
  );
}
