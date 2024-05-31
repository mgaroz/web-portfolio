// import { _sendEmail } from './+server.js';
import { validateData } from '$lib/utils.js';
import { newContactSchema } from '$lib/schemas/schemas.js';
import { fail, type Actions } from '@sveltejs/kit';

// import { fail } from '@sveltejs/kit';
import { SECRET_TO_EMAIL, SECRET_FROM_EMAIL, SECRET_MAIL_API_URL } from '$env/static/private';

async function _sendEmail(
	name: FormDataEntryValue,
	email: FormDataEntryValue,
	message: FormDataEntryValue
) {
	const request = new Request(SECRET_MAIL_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: SECRET_TO_EMAIL }]
				}
			],
			from: {
				email: SECRET_FROM_EMAIL,
				name: 'Website form'
			},
			subject: 'New message from website',
			content: [
				{
					type: 'text/html',
					value: `<p> You've got a new message from: <strong>${name}</strong> - ${email}</p>

        <p>${message}</p>`
				}
			]
		})
	});

	let respContent = '';
	if (request.method == 'POST') {
		const response = await fetch(request);

		respContent = response.status + ' ' + response.statusText;
		if (response.status >= 400) {
			console.error(`Error sending email: ${response.status} ${response.statusText}`);
			return fail(response.status, { status: response.status, message: response.statusText });
		}
	}

	return JSON.parse(JSON.stringify(respContent));
}

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
		let response;

		if (Object.keys(formData).length > 0) {
			response = await _sendEmail(formData?.name, formData?.email, formData?.message);
			return response;
		}
	}
};
