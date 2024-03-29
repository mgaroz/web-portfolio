import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';
import { fail, type ActionFailure } from '@sveltejs/kit';
import { newContactSchema } from '$lib/schemas/schemas.js';
import { _sendEmail } from './+server.js';

export const load: PageServerLoad = async (event) => {
	const super_form = await superValidate(event, zod(newContactSchema));

	return { form: super_form };
};

// export const actions = {
// 	default: async ({ request }) => {
// 		const form = Object.fromEntries(await request.formData());

// 		if (Object.keys(form).length > 0) {
// 			await _sendEmail(form?.name, form?.email, form?.message);
// 		}
// 	}
// };

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(newContactSchema));
		let formStatus: Response | ActionFailure<{ status: number; message: string }>;

		if (Object.keys(form.errors).length > 0 && !form.valid) {
			return fail(400, { form });
		}

		if (Object.keys(form.data).length > 0 && form.valid) {
			formStatus = await _sendEmail(form.data.name, form.data.email, form.data.message);
			console.log(form, formStatus.status);
		}

		return { form };
	}
};
