import { z } from "zod";

export const createAYSchema = z.object({
  name: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export type CreateAYSchema = z.infer<typeof createAYSchema>;
