import { _sendEmail } from './+server';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

const newContactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(10)
});

export const load = async (event) => {
	const form = await superValidate(event, zod(newContactSchema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());

		if (Object.keys(form).length > 0) {
			await _sendEmail(form?.name, form?.email, form?.message);
		}
	}
};
