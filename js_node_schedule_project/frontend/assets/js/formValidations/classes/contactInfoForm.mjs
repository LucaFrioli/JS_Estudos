import {
	verifyIsEmail,
	verifyIsPhoneNumber,
	verifyIsString
} from '../validations.mjs';
import ValidateForm from './validationModule.mjs';

export default class InfoContactFormValidation extends ValidateForm {
	validate() {
		let flag = true;
		this.clearAllErrors();
		this.inputs.forEach((element) => {
			const value = element.value;
			switch (element.type) {
				case 'email':
					if (!verifyIsEmail(value) && verifyIsString(value)) {
						flag = false;
						this.addErrors(element, 'Digite um email válido');
					}
					break;

				case 'tel':
					if (!verifyIsPhoneNumber(value) && verifyIsString(value)) {
						flag = false;
						this.addErrors(
							element,
							'Digite um número de telefone válido'
						);
					}
					break;

				default:
					if (!verifyIsString(value) || value.length === 0) {
						flag = false;
						this.addErrors(
							element,
							'O campo deve estar preenchido'
						);
					}
			}
		});
		return flag;
	}
}
