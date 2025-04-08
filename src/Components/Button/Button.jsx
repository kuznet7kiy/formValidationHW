import { forwardRef } from 'react';
import styles from './styles.module.css';

export const Button = forwardRef(({ textValue, ...props }, ref) => {
	return (
		<div className={styles.btn}>
			<button ref={ref} {...props}>
				{textValue}
			</button>
		</div>
	);
});

Button.displayName = 'Button';
