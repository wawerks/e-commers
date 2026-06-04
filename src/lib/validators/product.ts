import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  price: z.number().positive(),
  currency: z.string().default("USD"),
  inventory: z.number().int().min(0),
  status: z.enum(["DRAFT", "ACTIVE", "ARCHIVED"]).default("DRAFT"),
  categoryId: z.string().optional(),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        alt: z.string().optional(),
        sortOrder: z.number().int().min(0).default(0),
      })
    )
    .optional(),
});
