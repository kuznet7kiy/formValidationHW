import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { registrationFieldScheme } from './../schemas';

export const useRegistrationField = () => {
	const registerButtonRef = useRef(null);

	const {
		register,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isValid, dirtyFields },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordCheck: '',
		},
		mode: 'onChange',
		resolver: yupResolver(registrationFieldScheme),
	});

	useEffect(() => {
		if (isValid) {
			setTimeout(() => {
				registerButtonRef.current?.focus();
			}, 1000);
		}
	}, [isValid]);

	const watchPassword = watch('password');

	useEffect(() => {
		if (dirtyFields.password && dirtyFields.passwordCheck) {
			trigger('passwordCheck');
		}
	}, [watchPassword, trigger, dirtyFields.password, dirtyFields.passwordCheck]);

	return { errors, register, handleSubmit, isValid };
};
