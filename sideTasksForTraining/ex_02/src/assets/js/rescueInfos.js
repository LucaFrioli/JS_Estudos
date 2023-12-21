function rescue() {
    const form = document.querySelector(`.indexForm`);
    const emailInput = form.querySelector(`input#email`);
    const passwordInput = form.querySelector(`input#psw`);
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        handleSubmit(emailInput);
    });

    const handleSubmit = (emailInput) => {
        const user = getAObject(emailInput);
        console.log(typeof user);
        if (user) {
            //const validPsw = isValidPsw(user.password);
            console.log(`entrou na averiguação de senhas`);
        }
        return;
    }

    const emailValidation = (email) => {
        const regexOfEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regexOfEmail.test(email);
    }

    const hasAUserEmail = (email) => {
        const isValid = emailValidation(email);
        const maping = getAMap();
        return isValid && maping.has(email);
    }

    const getAObject = (emailInput) => {
        const email = emailInput.value;
        const userExist = hasAUserEmail(email);
        if (userExist) {
            return getAMap().get(email);
        }
        return false;
    }

    const getAMap = () => {
        return new Map(JSON.parse(localStorage.getItem(`register`)));
    }
}



rescue();
