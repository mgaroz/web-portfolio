import { fail, json } from '@sveltejs/kit';

export async function _sendEmail(name: string, email: string, message: string) {
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
		const respText = await response.text();
		// respStatus = response.status;

		respContent = response.status + ' ' + response.statusText + '\n\n' + respText;
		if (response.status >= 400) {
			console.error(`Error sending email: ${response.status} ${response.statusText}`);
			// this matters
			return fail(response.status, { status: response.status, message: response.statusText });
		}
	}
	// return new Response(respContent, {
	// 	status: respStatus
	// });
	return json({ data: respContent });
}
