export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

	return response;
};
