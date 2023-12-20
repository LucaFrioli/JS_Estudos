class ValidateForm {
    constructor(insertInDBorStorageMethod) {
        this.form = document.querySelector(`form.register`);
        this.event();
        this.insertInDBorStorageMethod = insertInDBorStorageMethod;//para eventuais modularidades ? espero que a lógica modular faça sentido : Estou em processo de aprimoramento lembrem-se este exercício é um autoproposto e não tem auxilio de nenhum material guia a não ser aqueles das pesquisas incessantes durante seu desenvolvimento
    }

    event() {
        this.form.addEventListener(`submit`, e => {
            this.handleSubmit(e);//lembre sempre de utilizar o this. quando for acessar um método apartir de uma classe e o nomeDaClasse. quando este método for do tipo estático
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkFields = this.checkFields();
        const checkPassword = this.checkPsw();
        const rturnFResponse = this.insertInDBorStorageMethod;//para fins de eventuais melhorias que possam vir a existir
        if (checkFields && checkPassword) {

           return rturnFResponse();
        }
    }

    checkPsw() {
        let valid = true
        const psw = this.form.querySelector(`#password`);
        const confirmPsw = this.form.querySelector(`#confirmPassword`);
        if (psw.value !== confirmPsw.value) {
            this.errorMessage(psw, `As senhas devem corresponder`);
            this.errorMessage(confirmPsw, `As senhas devem corresponder`);
            valid = false
        }
        if (psw.value.length < 6 || psw.value.length > 20) {
            this.errorMessage(psw, `A senha deve conter de 6 a 20 caracteres, a sua tem ${psw.value.length}`);
            valid = false;
        }
        return valid;
    }

    checkFields() {
        let valid = true//lembrar que toda flag é mutável por isso deve ser declarada com let

        for (let errorText of this.form.querySelectorAll(`.error-message`)) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll(`.validate`)) {
            if (!field.value) {
                this.errorMessage(field, `Campo deve estar preenchido`);
                valid = false;
            };

            if (field.id === `cpf`) {
                if (!this.validCpf(field.value)) {
                    this.errorMessage(field, `Digite um cpf válido`);
                    valid = false
                }
            }

            if (field.id === `email`) {
                if (!this.isValidEmail(field.value)) {
                    this.errorMessage(field, `Digite um email válido`);
                    valid = false;
                }
            }
        }
        return valid;
    }

    validCpf(cpf) {
        const test = new ValidationOfCpf(cpf);
        return test.isValidCpf;
    }

    isValidEmail(email) {
        const validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;//retirado do stackoverflow(curso sobre expressões regulares ainda está na lista para ser iniciado junto com curso sobre inteligencia artificial) OBS : o P.S. do enunciado contém uma explicação sobre está expreção regular por pura e mera curiosidade tanto minha qunato a que você possa vir a ter;
        return validate.test(email);
    }

    errorMessage(field, message) {
        const tag = document.createElement(`p`);
        tag.classList.add(`error-message`);
        tag.textContent = message;
        field.insertAdjacentElement(`afterend`, tag);
    }

}

const valid = new ValidateForm(mainToInsert);
