import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    sellerStatus?: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      sellerStatus: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    sellerStatus?: string;
  }
}
