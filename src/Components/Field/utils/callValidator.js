export const callValidator = (value, validator) => {
	const error = validator(value);
	return error;
};
