export default class ValidateForm {
	constructor(form) {
		this.form = form;
		this.inputs = null;
		this.errorClass = 'form-error-frontend';
	}

	initValidation() {
		this.form.addEventListener('submit', this.eventHandling.bind(this));
	}

	eventHandling(e) {
		e.preventDefault();
		this.inputs = [...this.form.querySelectorAll('input')];
		if (this.validate(this.inputs)) {
			this.form.submit();
		}
	}

	/**
	 * o metodo a seguir é um método que deverá ser sobreescrito
	 * Segue exemplo de inplemtação :
	 * Exemplo de implemetnação :
	 *	let flag = true
	 * 	this.clearAllErrors();
	 *  this.inputs.forEach((element) => {
	 *		const value = element.value;
	 *		switch (element.type) {
	 *			case 'email':
	 *				if (!verifyIsEmail(value)){
	 *					flag = false
	 *					this.addErrors(element,'Digite um email válido');
	 *				}
	 *				break;
	 *		}
	 *	});
	 *	return flag;
	 *
	 * @returns {boolean}
	 */
	validate() {
		return false;
	}

	clearAllErrors() {
		const allErrors = [
			...this.form.querySelectorAll(`.${this.errorClass}`)
		];
		allErrors.forEach((element) => {
			element.remove();
		});
	}

	addErrors(field, errorMessage) {
		const p = this.generateErrorElement(errorMessage);
		field.parentNode.insertBefore(p, field.nextSibling);
	}

	generateErrorElement(errorMessage) {
		const p = document.createElement('p');
		p.innerHTML = errorMessage;
		p.classList.add(this.errorClass);
		return p;
	}
}
