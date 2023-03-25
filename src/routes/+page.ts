export async function load({ fetch }) {
	const response = async () => {
		try {
			const res = await fetch('https://dev.to/api/articles?username=mgaroz&per_page=3').then(
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
