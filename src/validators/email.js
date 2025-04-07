export const EmailValidator = (value) => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(value)
		? null
		: 'Неверный адрес';
};
