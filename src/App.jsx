import { useRegistrationField } from './ hooks';
import styles from './App.module.css';
import { Button, Field } from './Components';

export const App = () => {
	const { register, handleSubmit, isValid, errors, registerButtonRef } =
		useRegistrationField();

	const onSubmit = (data) => {
		const { email, password } = data;
		console.log({ userEmail: email, userPassword: password });
	};
	return (
		<div className={styles.app}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type="text"
					name="email"
					placeholder="Почта"
					error={errors.email?.message}
					{...register('email')}
				/>
				<Field
					type="password"
					name="password"
					placeholder="Пароль"
					error={errors.password?.message}
					{...register('password')}
				/>
				<Field
					type="password"
					name="passwordCheck"
					placeholder="Повторите пароль"
					error={errors.passwordCheck?.message}
					{...register('passwordCheck')}
				/>
				<Button
					type="submit"
					textValue="Зарегистрироваться"
					disabled={!isValid}
					ref={registerButtonRef}
				/>
			</form>
		</div>
	);
};
