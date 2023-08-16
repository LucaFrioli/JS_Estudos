
function main() {
    const form = document.querySelector(`form#formulario`);
    const resposta = document.querySelector(`div#resposta`);
    form.addEventListener(`submit`, function (e) {
        e.preventDefault();
        const peso = document.querySelector(`input#Peso`).value;
        const altura = document.querySelector(`input#Altura`).value;

        RespostaImpressa(peso, altura);
    });

    function Calculo(peso, altura) {//calcula o imc
        const alturaMetros = altura / 100;
        const imc = peso / (Math.pow(alturaMetros, 2));;
        return imc.toFixed(1);
    }


    function Conplemento(imc) {//define a graduação
        let caso;
        if (imc < 18.5) {
            caso = `abaixo do peso`;
        } else if (imc >= 18.6 && imc < 25) {
            caso = `com o peso normal`;
        } else if (imc >= 25 && imc < 30) {
            caso = `com sobre peso`;
        } else if (imc >= 30 && imc < 35) {
            caso = `com obesidade Grau 1`;
        } else if (imc >= 35 && imc < 40) {
            caso = `com obesidade Grau 2`;
        } else if (imc >= 40) {
            caso = (alert(`Busque ajuda médica`), `com obesidade Grau 3`);
        }//particularmente eu utilizaria um switch case, porém como ainda não abordamos, vamos deixar com uma estrutura if encadeada 
        return caso;
    }

    function CriaParagrafo() {
        const p = document.createElement(`p`);//cria uma tag p html
        return p;
    }

    function RespostaIMC(peso, altura) {
        const p = CriaParagrafo();
        p.classList.add(`resposta`);//adiciona uma classe a tag criada
        const resultado = Calculo(peso, altura);//retorna o valor do cálculo
        const complemento = Conplemento(resultado);//faz a definição de faixa
        p.innerHTML = `Seu IMC é igual a ${resultado}, você está ${complemento}`;//adiciona a resposta na tag criada
        return p;
    }

    function RespostaImpressa(peso, altura) {
        resposta.appendChild(RespostaIMC(peso, altura));//injeta a tag na div
        return resposta
    }
}

main();
