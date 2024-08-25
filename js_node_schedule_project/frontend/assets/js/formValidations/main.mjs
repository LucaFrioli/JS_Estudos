/* eslint-disable no-case-declarations */
import ValidateLoginForm from './classes/loginForm.mjs';
import { clearIdForPath } from './pathTreatment.mjs';

export default function definingFormValidation(pagePath) {
	switch (pagePath) {
		case '/login':
			const teste = new ValidateLoginForm(document.querySelector('form'));
			teste.initValidation();
			break;

		case '/login/register':
			break;

		case '/contact/new':
			break;

		case '/contact/edit':
			break;

		default:
			const pathWithoutID = clearIdForPath(pagePath);
			console.log(
				pagePath,
				`é o caminho da página e este é o caminho da página sem o id : ${pathWithoutID}`
			);
			if (pathWithoutID) definingFormValidation(pathWithoutID);
			break;
	}
}
