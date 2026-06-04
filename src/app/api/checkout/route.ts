import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { checkoutSchema } from "@/lib/validators/order";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const products = await prisma.product.findMany({
    where: { id: { in: parsed.data.items.map((item) => item.productId) } },
  });

  const lineItems = parsed.data.items.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    const unitPrice = product ? Number(product.price) : 0;
    return {
      productId: item.productId,
      quantity: item.quantity,
      unitPrice,
      totalPrice: unitPrice * item.quantity,
      sellerId: product?.sellerId ?? "",
    };
  });

  const total = lineItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const order = await prisma.order.create({
    data: {
      userId: session.user.id,
      total,
      currency: "USD",
      shippingName: parsed.data.shipping.name,
      shippingLine1: parsed.data.shipping.line1,
      shippingLine2: parsed.data.shipping.line2,
      shippingCity: parsed.data.shipping.city,
      shippingState: parsed.data.shipping.state,
      shippingPostalCode: parsed.data.shipping.postalCode,
      shippingCountry: parsed.data.shipping.country,
      items: {
        createMany: {
          data: lineItems,
        },
      },
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: "usd",
    metadata: {
      orderId: order.id,
      userId: session.user.id,
    },
  });

  await prisma.order.update({
    where: { id: order.id },
    data: { stripePaymentIntentId: paymentIntent.id },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
    orderId: order.id,
  });
}
