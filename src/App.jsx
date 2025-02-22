//начало декларативного
import { createElement } from 'react';
import reactLogo from './assets/react.svg';

export const App = () => {
	const currentYear = new Date().getFullYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement('h1', { className: 'Heading' }, 'Hello World'),
		createElement('img', { className: 'Logo', src: reactLogo, alt: 'Logo' }),
		createElement(
			'h2',
			null,
			'Сегодня ',
			createElement('b', null, currentYear),
			' год',
		),
	);
};
