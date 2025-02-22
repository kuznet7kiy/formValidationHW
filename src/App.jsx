//начало декларативного
import reactLogo from './assets/react.svg';

//начало императивного
export const App = () => {
	const currentYear = new Date().getFullYear();
	return (
		// начало декларативного
		<div className="App">
			<h1 className="Heading">Hello world</h1>
			<img src={reactLogo} className="Logo" alt="Logo" />
			<h2>
				Сегодня: <b>{currentYear}</b> год
			</h2>
		</div>
	);
};
