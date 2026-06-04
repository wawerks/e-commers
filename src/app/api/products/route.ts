import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validators/product";

export async function GET() {
  const products = await prisma.product.findMany({
    where: { status: "ACTIVE" },
    include: { images: true, seller: true, category: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user || session.user.role !== "SELLER" || session.user.sellerStatus !== "APPROVED") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = productSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name: parsed.data.name,
      slug: parsed.data.slug,
      description: parsed.data.description,
      price: parsed.data.price,
      currency: parsed.data.currency,
      inventory: parsed.data.inventory,
      status: parsed.data.status,
      categoryId: parsed.data.categoryId,
      sellerId: session.user.id,
      images: parsed.data.images?.length
        ? {
            createMany: {
              data: parsed.data.images.map((image) => ({
                url: image.url,
                alt: image.alt,
                sortOrder: image.sortOrder ?? 0,
              })),
            },
          }
        : undefined,
    },
    include: { images: true },
  });

  return NextResponse.json(product, { status: 201 });
}
