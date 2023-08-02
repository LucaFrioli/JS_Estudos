let resposta = Number(prompt(`Digite um número : `));

let numero = Number.isNaN(resposta);
let respNaN = document.querySelector(`p#notANum`);//resposta se é um numero

respNaN.textContent = `É NaN : ${numero}`;

if (numero == true) {
    respNaN.innerHTML += `</br> Recarregue a pagina para tentar novamente `;
} else {
    const nDoUsuario = document.querySelector(`span#numeroUsuario`);//numero do usuario
    const raizQ = document.querySelector(`p#raiz`);//raiz quadrada
    const nInteiro = document.querySelector(`p#inteiro`);//Averiguar se o numero é inteiro
    const arredBaixo = document.querySelector(`p#baixo`);//Arredondar o valor para baixo
    const arredCima = document.querySelector(`p#cima`);//Arredondar o valor para cima
    const decimais2 = document.querySelector(`p#decimais`);//Duas casas decimais
    
    nDoUsuario.textContent = resposta;
    raizQ.textContent = `Raiz Quadrada : ${Math.sqrt(resposta).toFixed(4)}`;
    nInteiro.textContent = `O numero ${resposta} é inteiro : ${Number.isInteger(resposta)} `;
    arredBaixo.textContent = `Arredondado para baixo  : ${Math.floor(resposta)} `;
    arredCima.textContent = `Arredondado para Cima : ${Math.ceil(resposta)} `;
    decimais2.textContent = `Com duas casas decimais : ${resposta.toFixed(2)} `;
}