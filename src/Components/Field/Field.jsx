import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { callValidator } from './utils';

export const Field = ({
	value,
	validator,
	forceValidation = () => false,
	setValue,
	setFieldValid,
	dependencies = {},
	...props
}) => {
	const [error, setError] = useState('');
	const [isDirty, setIsDirty] = useState(false);

	const validate = (currentValue, shouldValidate) => {
		let error = null;
		let isValid = false;

		if (shouldValidate) {
			error = callValidator(currentValue, validator);
			isValid = error === null;
		}
		setError(error);
		setFieldValid(isValid);
	};

	const onChange = ({ target }) => {
		setIsDirty(true);
		setValue(target.value);

		const isForceValidated = forceValidation(target.value);

		validate(target.value, isForceValidated);
	};

	useEffect(() => {
		validate(value, isDirty);
	}, [...Object.values(dependencies)]);

	const onBlur = () => {
		validate(value, isDirty);
	};

	return (
		<div className={styles.field}>
			<input
				className={styles.inputField}
				onChange={onChange}
				onBlur={onBlur}
				{...props}
			/>
			{error && <span className={styles.errorLabel}>{error}</span>}
		</div>
	);
};
