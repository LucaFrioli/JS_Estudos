import { clearIdForPath } from './pathTreatment.mjs';

let breaker = 0;

export default function definingFormValidation(pagePath) {
	if (breaker >= 1) return;
	let pathWithoutID;
	switch (pagePath) {
		case '/login':
			break;

		case '/login/register':
			break;

		case '/contact/new':
			break;

		case '/contact/edit':
			break;

		default:
			// adiciona um método de parada para a recursaõ
			breaker = 1;
			pathWithoutID = clearIdForPath(pagePath);
			definingFormValidation(pathWithoutID);
			break;
	}
}
