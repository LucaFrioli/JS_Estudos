//calculo para validação de cpf

//963.160.760-70
//para realizarmos a validação devemos realizar dois calculos, que serão baseados nos 9 primeiros números do cpf, para gerar o digito final, cada numero do cpf deverá ser multiplicado na primeira conta por 10 e assim regressivamente até chegar ultimo numero antes do sinal digito, o resultado da soma entre todos as multiplicação deverá ser submetido a uma divisão por 11 e o resto dela deverá ser resgata, e subtraida de um valor 11, caso o resultado for maior do que 9 o número deverá ser zero, se nãso será o resultado puro;
//o segundo calculo será o mesmo que o anterior porem os mulyiplicadores se iniciarão em 11 e o número gerado no primeiro calculo irá para o final do array de números do cpf

//SOLUÇÃO PROPRIA  :
const cpf = `963.160.760-70`;

function validaCpf(cpf) {
    const arrayCpf = cpf.split(``).filter((v) => v !== `.` && v !== `-`).map((v) => parseInt(v));
    if (arrayCpf.length !== 11) {
        return `Cpf Inválido`;
    }
    const trueValue = cpfDigit(arrayCpf);
    const firstNum = validFirstNum(arrayCpf);
    const lastNum = validLastNum(arrayCpf);

    const response = responseCpf(firstNum, lastNum, trueValue);

    return response;

    function cpfDigit(arrayCpf) {
        return parseInt(arrayCpf.splice(-2, 2).join(``));
    }

    function responseCpf(firstNum, lastNum, trueValue) {
        const calculus = Number(new Array(firstNum, lastNum).join(``));
        if (calculus === trueValue) { return cpf } else { return `Cpf inválido` };
    }

    function validFirstNum(arrayCpf) {
        let firstNum = 0;
        let x;
        arrayCpf.forEach((element, index) => {
            if (index == 0) { x = (arrayCpf.length + 1) }
            firstNum += element * x;
            x--
        });
        firstNum = (11 - (firstNum % 11)) > 9 ? 0 : 11 - (firstNum % 11);
        arrayCpf.push(firstNum);
        return firstNum;
    }

    function validLastNum(arrayCpf) {
        let lastNum = 0;
        let x;
        arrayCpf.forEach((element, index) => {
            if (index == 0) { x = (arrayCpf.length + 1) }
            lastNum += element * x;
            x--
        });
        return lastNum = (11 - (lastNum % 11)) > 9 ? 0 : 11 - (lastNum % 11);
    }
}

console.log(validaCpf(cpf))
