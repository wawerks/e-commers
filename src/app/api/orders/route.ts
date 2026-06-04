import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  if (session.user.role === "ADMIN") {
    const orders = await prisma.order.findMany({
      include: { items: true, user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(orders);
  }

  if (session.user.role === "SELLER") {
    const orders = await prisma.order.findMany({
      where: { items: { some: { sellerId: session.user.id } } },
      include: { items: true, user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(orders);
  }

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(orders);
}
