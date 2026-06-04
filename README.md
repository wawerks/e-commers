# MarketDock

Multi-vendor e-commerce platform built with Next.js App Router, Prisma, MySQL, and Auth.js.

## Stack

- Next.js App Router + TypeScript
- Prisma ORM (MySQL)
- Auth.js (NextAuth) with credentials provider
- Tailwind CSS v4
- Stripe (Payment Intents)

## Environment

Create a `.env` file in the project root:

```env
DATABASE_URL="mysql://root:password@localhost:3306/e-commers"
NEXTAUTH_SECRET="replace-with-a-strong-secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_replace"
```

## Install

```bash
npm install
```

## Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Run

```bash
npm run dev
```

## Role-based routes

- `/admin/*` -> Admin only
- `/seller/*` -> Seller only (approved)
- `/profile/*` -> Authenticated users

## Notes

- Middleware validates JWT tokens only and remains Edge-compatible.
- Prisma client is initialized server-side using a singleton pattern.
# e-commers
