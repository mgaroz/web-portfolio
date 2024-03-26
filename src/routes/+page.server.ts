export async function load() {
	const response = await fetch('https://dev.to/api/articles/latest?username=mgaroz&per_page=3');

	return {
		response: await response.json()
	};
}
