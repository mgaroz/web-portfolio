export async function load() {
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
		response: await response()
	};
}
