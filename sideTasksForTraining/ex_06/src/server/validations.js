function fieldValidations(bodyContent, requiredAtributes) {
    let isValid = true;
    if (!keysIsValid(bodyContent, requiredAtributes)) isValid = false;
    if (!valuesIsValid(bodyContent)) isValid = false;
    return isValid
}

function keysIsValid(bodyContent, requiredAtributes) {//valida se o formulário tem os campos requeridos
    const keys = Object.keys(bodyContent);
    keys.forEach((element) => {
        if (!(requiredAtributes.includes(element))) {
            console.log(`Valor de chave não válido : ${element}, não foi possível enviar o formulário`);
            return false;
        }
    });
    return true;
}

function valuesIsValid(bodyContent) {//caso um campo tenha um valor vazio ou nulo ou não definido ele retorna innvalido, ou sej aé valido como false
    let isValid = true
    const values = Object.values(bodyContent);
    values.forEach(element => {
        if (element === '' || element === null || element === undefined) {
            console.log(`${element} não é um valor aceito, ele precisa ser diferente de vazio ou nulo`);
            isValid = false;
        }
    });
    return isValid;
}


module.exports = {
    fieldValidations,
}
