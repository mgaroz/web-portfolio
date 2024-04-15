import { fail } from '@sveltejs/kit';
import { SECRET_SG_API_KEY } from '$env/static/private';

export async function _sendEmail(
	name: FormDataEntryValue,
	email: FormDataEntryValue,
	message: FormDataEntryValue
) {
	const request = new Request('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: 'mgaroz@gmail.com' }]
				}
			],
			from: {
				email: 'noreply@mgaroz.pro',
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
	// let respStatus: number = 0;
	if (request.method == 'POST') {
		const response = await fetch(request);
		// const respText = await response.text();
		// respStatus = response.status;

		console.log(response);
		respContent = response.status + ' ' + response.statusText;
		if (response.status >= 400) {
			console.error(`Error sending email: ${response.status} ${response.statusText}`);
			// this matters
			return fail(response.status, { status: response.status, message: response.statusText });
		}
	}
	// return new Response(respContent, {
	// 	status: respStatus
	// });

	// LOOK INTO THIS
	return JSON.parse(JSON.stringify(respContent));
}

export async function _sgMail() {
	const API_KEY = SECRET_SG_API_KEY;

	const message = {
		to: 'mgaroz@gmail.com',
		from: 'noreply@mgaroz.pro',
		subject: 'Message from website',
		text: 'Hello from sendgrid',
		html: '<h1>Hello from sendgrid</h1>'
	};

	try {
		const email = await fetch('https://api.sendgrid.com/v3/mail/send', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(message)
		});
		return { data: JSON.parse(JSON.stringify(email)) };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		return { status: 500, error: err.message };
	}
}
