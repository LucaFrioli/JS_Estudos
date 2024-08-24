/* eslint-disable no-case-declarations */
import ValidateForm from './classes/validationModule.mjs';
import { clearIdForPath } from './pathTreatment.mjs';

export default function definingFormValidation(pagePath) {

	switch (pagePath) {
		case '/login':
			const teste = new ValidateForm(document.querySelector('form'));
			teste.initValidation()
			break;

		case '/login/register':
			break;

		case '/contact/new':
			break;

		case '/contact/edit':
			break;

		default:
			const pathWithoutID = clearIdForPath(pagePath);
			if (pathWithoutID) definingFormValidation(pathWithoutID);
			break;
	}
}
