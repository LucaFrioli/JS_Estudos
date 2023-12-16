class FormValidation {
    constructor() {
        this.form = document.querySelector(`form.register`);
        this.events();
    }

    events() {
        this.form.addEventListener(`submit`, e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.checkFilds();
        const validPsws = this.validPsw();
        console.log(isValid, validPsws);
        if (isValid && validPsws) {
            alert(`formulário enviado`);
            this.form.submit();
        }
    }

    validPsw() {
        let valid = true;
        const psw = this.form.querySelector(`#psw`);
        const confirmPsw = this.form.querySelector(`#confirmPsw`);

        if (psw.value !== confirmPsw.value) {
            this.createError(psw, `A senhas devem corresponder`);
            this.createError(confirmPsw, `As senhas devem corresponder`);
            return false;
        }

        if (psw.value.length < 6 || psw.value.length > 12) {
            this.createError(psw, `A senha deve ter 6 a 12 caracteres`);
            return false;
        }

        return valid
    }

    checkFilds() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll(`.formError`)) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll(`.validation`)) {

            if (!field.value) {
                let label = field.previousElementSibling.textContent;
                this.createError(field, `Campo "${label}" não pode estar em branco `);
                console.log(`Vazio`)
                valid = false;
            }

            if (field.id === `cpf`) {
                if (this.validateCpf(field)) valid = false;
            }

            if (field.id === `user`) {

                if (!this.validateUser(field)) {
                    console.log(`user`)
                    valid = false
                };
            }
        }

        return valid;
    }

    validateCpf(field) {
        const cpf = new ValidationOfCpf(field.value);
        if (!cpf.cpf) {
            this.createError(field, `Cpf inválido`);
            return false
        }
        return false
    }

    validateUser(field) {
        const user = field.value;
        if (user.length < 3 || user.length > 12) {
            console.log(`erro de tamanho`)
            this.createError(field, `O usuário deve ter entre 3 e 12 carcteres`);
            return false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {//expressão regular para validação de apenas letras e números
            this.createError(field, `O usuário pode apenas ter letras e números`);
            return false;
        }

        return true;
    }

    createError(field, msg) {
        const p = document.createElement(`p`);
        p.innerHTML = msg;
        p.classList.add(`formError`);
        field.insertAdjacentElement(`afterend`, p);
    }
}

const valid = new FormValidation();
