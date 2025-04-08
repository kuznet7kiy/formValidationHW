import styles from './styles.module.css';

export const Field = ({ error, ...props }) => {
	return (
		<div className={styles.field}>
			<input className={styles.inputField} {...props} />
			{error && <span className={styles.errorLabel}>{error}</span>}
		</div>
	);
};
