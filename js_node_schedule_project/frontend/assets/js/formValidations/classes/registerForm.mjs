import {
	verifyFieldIsEqual,
	verifyIsEmail,
	verifyPassword
} from '../validations.mjs';
import ValidateForm from './validationModule.mjs';

export default class ValidateRegisterForm extends ValidateForm {
	constructor(form, errorClass) {
		super(form);
		this.errorClass = errorClass || 'form-error-frontend';
		this.passwordCompare = { pass1: '', pass2: '' };
	}

	validate() {
		this.clearAllErrors();
		let flag = true;
		let locker = 0;
		let confirmPasswordInput;

		this.inputs.forEach((element) => {
			const value = element.value;
			switch (element.type) {
				case 'email':
					if (!verifyIsEmail(value)) {
						flag = false;
						this.addErrors(element, 'Digite um email válido');
					}
					break;

				case 'password':
					if (locker === 0 && !verifyPassword(value)) {
						flag = false;
						this.passwordCompare.pass1 = value;
						locker += 1;
						this.addErrors(
							element,
							'As senha deve conter de 7 a 30 caracteres, e pelo menos uma letra maíuscula, um número e um caractere especial'
						);
					}
					this.passwordCompare.pass2 = value;
					confirmPasswordInput = element;
					break;
			}
		});

		if (
			!verifyFieldIsEqual(
				this.passwordCompare.pass1,
				this.passwordCompare.pass2
			)
		) {
			flag = false;
			this.addErrors(
				confirmPasswordInput,
				'As senhas devem corresponder!'
			);
		}

		return flag;
	}
}
