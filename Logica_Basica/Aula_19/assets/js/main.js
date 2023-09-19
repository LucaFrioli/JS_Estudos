// Manipulação de NodeList

/**
 *  Utilizar node lists serve para pegar varias tags de uma mesma classe id ou nome
 *  Uma das vantagens de utilizar node lists é que podemos manipula-las de modo similar a um array  
 * 
 * Vamos utilizzar javascript para adicionar a mesma cor do background no backgroud dos paragrafos dentro da div.psContainer
 * 
 * para acessar os estilos de um elemento que foram definidos pelo css podemos utilizar a função getComputedStyles(tag);
 * 
 * 
*/

const paragraphs =  document.querySelector(`div.psContainer`);
const p = paragraphs.querySelectorAll(`p`);//retorna uma node list com todas as tags do tipop que estão dentro dessa div;

const body = document.querySelector(`body`);//seleciona o body e tudo que tem dentro dele
const bodyStyles = getComputedStyle(body);//retorna todo o css agregado ao body
const backgroundBody = bodyStyles.backgroundColor;//retorna em específico a cor de fundo do body

for (let ps of p){
    ps.style.backgroundColor = backgroundBody;
    ps.style.padding = `4px`;
    ps.style.color = `#fff`;
    ps.style.borderRadius = `0.5rem`;
}
 