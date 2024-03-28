<<<<<<< HEAD
export async function load({ fetch }) {
	const response = async () => {
		try {
			const res = await fetch('https://dev.to/api/articles/latest?username=mgaroz&per_page=3').then(
				(result) => result.json()
			);
			return res;
		} catch (error) {
			console.error(error);
		}
	};

	return {
		response: response()
	};
}
=======
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async () => {
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
>>>>>>> cf-mailchannels
