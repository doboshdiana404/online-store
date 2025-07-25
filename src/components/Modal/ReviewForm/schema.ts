import { z } from 'zod';

export const schema = z.object({
  rating: z.number().min(1, { message: 'Rating is required' }).max(5),
  comment: z
    .string()
    .min(5, { message: 'Comment must be at least 5 characters' }),
});

export type FormData = z.infer<typeof schema>;
