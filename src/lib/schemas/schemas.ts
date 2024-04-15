import { z } from 'zod';

export const newContactSchema = z.object({
	name: z.string({ required_error: 'Name is required' }).min(1),
	email: z.string({ required_error: 'Email is required' }).email('Check your email address'),
	message: z
		.string({ required_error: 'A message is required' })
		.min(10)
		.max(1024, "That's a long message, try getting to the point quicker!")
});
