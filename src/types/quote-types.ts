import { createQuoteSchema, UpdateQuoteSchema } from "@/schemas/quote-schemas";
import { z } from "zod";

export type CreateQuotetypes = z.infer<typeof createQuoteSchema>;
export type UpdateQuotetypes = z.infer<typeof UpdateQuoteSchema>;