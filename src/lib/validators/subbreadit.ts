import { z } from "zod";

export const subbreaditValidator = z.object({
  name: z.string().min(3).max(21),
});

export const subbreaditSubscriptionValidator = z.object({
  subbreaditId: z.string(),
});

export type CreatesubbreaditPayload = z.infer<typeof subbreaditValidator>;
export type SubscribeTosubbreaditPayload = z.infer<
  typeof subbreaditSubscriptionValidator
>;
