export async function load() {
	const response = async () => {
		try {
			const res = await fetch('https://dev.to/api/articles?username=mgaroz').then((result) =>
				result.json()
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
