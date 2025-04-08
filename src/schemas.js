import * as yup from 'yup';

export const registrationFieldScheme = yup.object().shape({
	email: yup
		.string()
		.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, 'Неверный адрес')
		.min(3, 'должно быть больше 3 символов'),
	password: yup
		.string()
		.min(8, 'Пароль должен состоять хотя бы из 8 символов')
		.matches(
			/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W).+$/,
			'Пароль должен содержать буквы, цифры и символы',
		),
	passwordCheck: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
