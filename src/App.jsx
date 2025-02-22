//начало декларативного
import ReactLogo from './assets/react.svg?react';

//начало императивного
export const App = () => {
	const currentYear = new Date().getFullYear();
	return (
		// начало декларативного
		<div>
			<h1>Hello world</h1>
			<ReactLogo />
			<h2>{currentYear}</h2>
		</div>
	);
};
