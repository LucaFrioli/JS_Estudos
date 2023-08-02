//Dar retorno dentro de uma tag html, DOM;
let resultado = document.querySelector(`h1#resultado`);

const numero1 = Number(prompt(`Digite o Primeiro Numero`));
const numero2 = Number(prompt(`Digite o Segundo Numero`));
resultado.textContent = numero1+numero2;
