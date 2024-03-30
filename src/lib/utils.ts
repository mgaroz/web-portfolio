// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateData = async (formData: FormData, schema: any) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};
