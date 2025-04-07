export const PasswordValidator = (value) => {
	if (value.length < 8) {
		return 'Пароль должен состоять хотя бы из 8 символов';
	} else {
		return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W).+$/.test(value)
			? null
			: 'Пароль должен содержать буквы, цифры и символы';
	}
};
