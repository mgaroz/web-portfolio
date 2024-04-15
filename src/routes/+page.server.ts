import { _sendEmail } from './+server.js';
import { validateData } from '$lib/utils.js';
import { newContactSchema } from '$lib/schemas/schemas.js';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		// const form = Object.fromEntries(await request.formData());
		const body = await request.formData();
		const form = Object.fromEntries(body);

		const { formData, errors } = await validateData(body, newContactSchema);
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
		let response;

		if (Object.keys(formData).length > 0) {
			response = await _sendEmail(form?.name, form?.email, form?.message);
			return structuredClone(response);
		}
	}
};
