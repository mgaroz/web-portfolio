import { validateData } from '$lib/utils.js';
import { newContactSchema } from '$lib/schemas/schemas.js';
import { fail, type Actions } from '@sveltejs/kit';

import {
	SECRET_TO_EMAIL,
	SECRET_FROM_EMAIL,
	SECRET_MAIL_API_URL,
	SECRET_MAIL_API_KEY
} from '$env/static/private';

export const actions: Actions = {
	default: async ({ request }) => {
		const body = await request.formData();

		const { formData, errors } = await validateData(body, newContactSchema);
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		const options = {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Smtp2go-Api-Key': SECRET_MAIL_API_KEY
			},
			body: JSON.stringify({
				subject: 'New message from website',
				html_body: `<h4> You've got a new message from: ${formData?.name} - ${formData?.email}</h4>
					${formData?.company ? '<p>Company: ${formData?.company}</p>' : ''}
					
					<p>${formData?.message}</p>`,
				to: [`Miguel Garoz <${SECRET_TO_EMAIL}>`],
				sender: `Website Form <${SECRET_FROM_EMAIL}>`
			})
		};

		if (Object.keys(formData).length > 0) {
			try {
				const response = await fetch(SECRET_MAIL_API_URL, options);

				if (response.status === 200) {
					return { message: 'Message sent successfully' };
				} else if (response.status === 400) {
					return fail(400, { error: 'Bad request' });
				} else if (response.status === 403) {
					return fail(403, { error: 'Unauthorized' });
				} else if (response.status === 500) {
					return fail(500, { error: 'Internal server error' });
				} else {
					return fail(response.status, { error: 'Unexpected error' });
				}
			} catch (error) {
				return fail(500, { error: 'Network or server error' });
			}
		}
	}
};
