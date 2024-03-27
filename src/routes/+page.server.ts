import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('fetching posts...');
	const response = await fetch('https://dev.to/api/articles/latest?username=mgaroz&per_page=3');
	const resp = await response.json();

	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return {
		response: resp
	};
};
