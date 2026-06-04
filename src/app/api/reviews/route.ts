import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { reviewSchema } from "@/lib/validators/review";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  const reviews = await prisma.review.findMany({
    where: productId ? { productId } : undefined,
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(reviews);
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = reviewSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const review = await prisma.review.create({
    data: {
      productId: parsed.data.productId,
      rating: parsed.data.rating,
      comment: parsed.data.comment,
      userId: session.user.id,
    },
  });

  return NextResponse.json(review, { status: 201 });
}
