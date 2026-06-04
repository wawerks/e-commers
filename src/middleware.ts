import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/register", "/api/auth"];
const ADMIN_ROLE = "ADMIN";
const SELLER_ROLE = "SELLER";
const APPROVED_SELLER = "APPROVED";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  if (publicRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (path.startsWith("/admin") && token.role !== ADMIN_ROLE) {
    return NextResponse.redirect(new URL("/profile", nextUrl));
  }

  if (
    path.startsWith("/seller") &&
    (token.role !== SELLER_ROLE || token.sellerStatus !== APPROVED_SELLER)
  ) {
    return NextResponse.redirect(new URL("/profile", nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
