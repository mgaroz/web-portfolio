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
				email: 'noreply@web-portfolio-8xt.pages.dev'
			},
			subject: 'New message from website',
			content: [
				{
					type: 'text/plain',
					value: `<p> You've got a new message from: <strong>${name ?? 'Test Message'}</strong> - ${email ?? 'test@test.com'}</p>

        <p>${message ?? 'Hello world this is my mailchannels test mail'}</p>`
				}
			]
		})
	});

	let respContent = '';
	if (request.method == 'POST') {
		const response = await fetch(request);
		const respText = await response.text();

		respContent = response.status + ' ' + response.statusText + '\n\n' + respText;
		if (response.status >= 400) {
			console.error(
				`Error sending email: ${response.status} ${response.statusText} ${await response.text()}`
			);
		}
	}
	return new Response(respContent, {
		status: 200
	});
}
