import styles from './styles.module.css';

export const Button = ({ textValue, ...props }) => {
	return (
		<div className={styles.btn}>
			<button {...props}>{textValue}</button>
		</div>
	);
};
