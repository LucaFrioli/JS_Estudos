/* eslint-disable no-case-declarations */
import InfoContactFormValidation from './classes/contactInfoForm.mjs';
import ValidateLoginForm from './classes/loginForm.mjs';
import ValidateRegisterForm from './classes/registerForm.mjs';
import { clearIdForPath } from './pathTreatment.mjs';

export default function definingFormValidation(pagePath) {
	switch (pagePath) {
		case '/login':
			new ValidateLoginForm(
				document.querySelector('form')
			).initValidation();
			break;

		case '/login/register':
			new ValidateRegisterForm(
				document.querySelector('form')
			).initValidation();
			break;

		case '/contact/new':
			new InfoContactFormValidation(
				document.querySelector('form')
			).initValidation();
			break;

		case '/contact/edit':
			new InfoContactFormValidation(
				document.querySelector('form')
			).initValidation();
			break;

		default:
			const pathWithoutID = clearIdForPath(pagePath);
			if (pathWithoutID) definingFormValidation(pathWithoutID);
			break;
	}
}
