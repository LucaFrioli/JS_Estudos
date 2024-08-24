import { verifyIsEmail } from '../validations.mjs';

export default class ValidateForm {
	constructor(form) {
		this.form = form;
	}

	initValidation() {
		this.form.addEventListener('submit', this.eventHandling.bind(this));
	}

	eventHandling(e) {
		e.preventDefault();
		const inputs = [...this.form.querySelectorAll('input')];
		if (this.validate(inputs)) {
			this.form.submit();
		}
	}


	// falta adicionar todas as validações, o metodo de limpeza e estilizar as menssagens, alḿede declarar osobjetos nas rotas !
	validate(inputs) {
		inputs.forEach((element) => {
			const value = element.value;
			switch (element.type) {
				case 'email':
					if (!verifyIsEmail(value))
						this.addErrors(element,'Digite um email válido');
					break;
			}
		});
	}

	addErrors(field, errorMessage) {
		const p = this.generateErrorElement(errorMessage);
		field.parentNode.insertBefore(p,field.nextSibling)
	}

	generateErrorElement(errorMessage) {
		const p = document.createElement('p');
		p.textContent = errorMessage;
		p.classList.add('form-error-frontend');
		return p;
	}
}
