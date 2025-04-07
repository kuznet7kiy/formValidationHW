export const passwordCheckValidation = (passcheckValue, passwordValue) => {
	return passcheckValue === passwordValue ? null : 'Пароли должны совпадать';
};
