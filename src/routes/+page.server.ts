import { _sendEmail } from './+server';

export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		if (Object.keys(form).length > 0) {
			await _sendEmail(form?.name, form?.email, form?.subject, form?.message);
		}
	}
};
