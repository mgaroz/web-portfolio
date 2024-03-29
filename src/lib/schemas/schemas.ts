import { z } from 'zod';

export const newContactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(10)
});
