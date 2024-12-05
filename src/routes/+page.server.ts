import { error as svelteError } from '@sveltejs/kit';
import { validateData } from '$lib/utils.js';
import { newContactSchema } from '$lib/schemas/schemas.js';
import { fail, type Actions } from '@sveltejs/kit';

import {
	SECRET_TO_EMAIL,
	SECRET_FROM_EMAIL,
	SECRET_MAIL_API_URL,
	SECRET_SG_API_KEY
} from '$env/static/private';

export const load = async () => {
	try {
		const result = await fetch('https://dev.to/api/articles/latest?username=mgaroz&per_page=3', {
			headers: {
				Accept: 'application/json'
			}
		});

		if (!result.ok) {
			// Log the error details for debugging
			console.error(`Error fetching data: ${result.status} - ${result.statusText}`);
			throw svelteError(result.status, 'Failed to fetch data from dev.to API');
		}

		const res = await result.json();

		return {
			result: res
		};
	} catch (error) {
		console.error('Unexpected error fetching data:', error);
		throw svelteError(500, 'Internal server error');
	}
};

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

		const response = await fetch(SECRET_MAIL_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${SECRET_SG_API_KEY}`
			},
			body: JSON.stringify({
				personalizations: [{ to: [{ email: SECRET_TO_EMAIL }] }],
				from: { email: SECRET_FROM_EMAIL, name: 'Website Form' },
				subject: 'New message from website',
				content: [
					{
						type: 'text/html',
						value: `<h4> You've got a new message from: ${formData?.name} - ${formData?.email}</h4> 
							${formData?.company ? '<p>Company: ${formData?.company}</p>' : ''}
							
							<p>${formData?.message}</p>`
					}
				]
			})
		});

		if (Object.keys(formData).length > 0) {
			return {
				response: structuredClone(response.status)
			};
		}
	}
};
