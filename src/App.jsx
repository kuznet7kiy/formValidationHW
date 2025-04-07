import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { Button, Field } from './Components';
import { EmailValidator, passwordCheckValidation, PasswordValidator } from './validators';

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
	const registerButtonRef = useRef(null);

	const isFormValid = isEmailValid && isPasswordValid && isPasswordCheckValid;

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
	};

	useEffect(() => {
		if (isFormValid) {
			registerButtonRef.current.focus();
		}
	}, [isFormValid]);

	return (
		<div className={styles.app}>
			<form onSubmit={handleFormSubmit}>
				<Field
					type="text"
					name="email"
					placeholder="Почта"
					value={email}
					setValue={setEmail}
					validator={EmailValidator}
					setFieldValid={setIsEmailValid}
				/>
				<Field
					type="password"
					name="password"
					placeholder="Пароль"
					value={password}
					setValue={setPassword}
					validator={PasswordValidator}
					setFieldValid={setIsPasswordValid}
				/>
				<Field
					type="password"
					name="passwordCheck"
					placeholder="Повторите пароль"
					value={passwordCheck}
					setValue={setPasswordCheck}
					validator={(value) => passwordCheckValidation(value, password)}
					forceValidation={(value) => value.length > 0}
					dependencies={{ password }}
					setFieldValid={setIsPasswordCheckValid}
				/>
				<Button
					type="submit"
					textValue="Зарегистрироваться"
					disabled={!isFormValid}
					ref={registerButtonRef}
				/>
			</form>
		</div>
	);
};
