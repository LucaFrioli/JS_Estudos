import { verifyIsEmail } from '../validations.mjs';
import ValidateForm from './validationModule.mjs';

export default class ValidateLoginForm extends ValidateForm {
	constructor(form) {
		super(form);
		this.errorClass = 'form-error-frontend';
	}

	validate() {
		let flag = true;
		this.clearAllErrors();
		this.inputs.forEach((element) => {
			const value = element.value;
			if (element.type === 'email') {
				if (!verifyIsEmail(value)) {
					this.addErrors(element, 'Digite um email válido');
					flag = false;
				}
			}
		});
		return flag;
	}
}
