export async function _sendEmail(
	name: FormDataEntryValue,
	email: FormDataEntryValue,
	subject: FormDataEntryValue,
	message: FormDataEntryValue
) {
	const request = new Request('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: 'mgaroz@gmail.com', name: 'Miguel Garoz' }]
				}
			],
			from: {
				email: 'noreply@mgaroz.workers.dev',
				name: 'Website contact form'
			},
			subject: 'New message from website',
			content: [
				{
					type: 'text/plain',
					value: `<p> You've got a new message from: <strong>${name}</strong> - ${email}</p>

        <h3>${subject}</h3>
        <p>${message}</p>`
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
