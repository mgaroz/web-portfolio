import { fail } from '@sveltejs/kit';
import { _sendEmail } from './+server';

export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		let response;

		if (Object.keys(form).length > 0) {
			response = await _sendEmail(form?.name, form?.email, form?.message);
		}
	}
};
