
function main() {
    const form = document.querySelector(`form#formulario`);
    const resposta = document.querySelector(`div#resposta`);
    form.addEventListener(`submit`, function (e) {
        e.preventDefault();
        //Adicionei o number só por uma questão de segurança, mesmo que dentro do html já esteja declarado isso, em projetos maiores pode ocorrer de ser mudado propositalmente ou não propositalmente o type do input, além de previnir e preparar o terreno para criação de testes unitários mais sólidos;
        const peso = Number(document.querySelector(`input#Peso`).value);
        const altura = Number(document.querySelector(`input#Altura`).value);

        //estrutura de averiguação para controle de campos 
        if (!peso) {
            return RespostaIMC(`Peso Inválido`, false);//finaliza a função 
        }
        if (!altura) {
            return RespostaIMC(`Altura inválida`, false);
        }

        const resultado = Calculo(peso, altura);//retorna o valor do cálculo
        const complemento = Conplemento(resultado);//faz a definição de faixa
        const msg = `Seu IMC é igual a ${resultado}, você está ${complemento}`;

        RespostaIMC(msg, true);
    });

    function Calculo(peso, altura) {//calcula o imc
        const alturaMetros = altura / 100;
        const imc = peso / (Math.pow(alturaMetros, 2));;
        return imc.toFixed(1);
    }


    function Conplemento(imc) {//define a graduação
        let caso;
        if (imc >= 39.9) {
            caso = (alert(`Busque ajuda médica`), `com obesidade Grau 3`);
        } else if (imc >= 34.9) {
            caso = `com obesidade Grau 2`;
        } else if (imc >= 29.9) {
            caso = `com obesidade Grau 1`;
        } else if (imc >= 24.9) {
            caso = `com sobre peso`;
        } else if (imc >= 18.5) {
            caso = `com o peso normal`;
        } else {
            caso = `abaixo do peso`;
        }//particularmente eu utilizaria um switch case, porém como ainda não abordamos, vamos deixar com uma estrutura if encadeada 
        return caso;
    }

    function CriaParagrafo() {
        const p = document.createElement(`p`);//cria uma tag p html
        return p;
    }

    function RespostaIMC(msg, isValid) {
        resposta.innerHTML = ``;

        const p = CriaParagrafo();
        p.classList.add(`resposta`);//adiciona uma classe a tag criada
        isValid?p.classList.add(`respSaudavel`):p.classList.add(`respNsaudavel`);//adiciona um detalhe de fundo
        p.innerHTML = msg;
        resposta.appendChild(p);//injeta o p na div;
    }

}

main();
