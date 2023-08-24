//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
    **  Date Object :
    *
    * O Objeto Date é uma classe, ou tambémconhecida uma função construtora : 
    * Por esse motivo ela é declarada com a primeira letra em maiuscula.
    * 
    * para realizar sua chamada devemos declarar da seguinte forma ;
    * ex: 
    * let/const txt = new Date(); <-note também que devemos adicionar parênteses
    *                  î
    * Note que devemos adicionar a palavra novo antes de fazer sua invocação;
    * 
    * !!!!!!!!!! IMPORTANTE APENAS FUNÇÕES CONSTRUTORAS SÃO DECLARADAS COM A PRIMEIRA LETRA MAIUSCULA !!!!!!!!!
    * obs: posteriormente irei corrigir todos os exercícios anteriores
    * 
    * Podemos enviar a data de quatro formas  : 
    * new Date();   {retorna a data atual do sistema}
    * new Date(valor); {retorna os milisegundos em relação ao dia 0}
    * new Date(ano, mês, dia, hora minuto, segundo, milisegundos); {retorna uma data específica, os params podem ser envolvidos em calculos}
    * new Date("ano-mes-dia hora:minuto:segundo"); {retorna uma data específica apartir de strings}
    * 
*/

let date = new Date();
console.log(`Data atual do sistema : ${date.toString()}`);

//O objeto Date tem um marco 0, como o ano 0 D.C., o marco zero do objeto date, é considerado a Timestamp Unix, ou também conhecida como época Unix

date = new Date(0);//o GMT é a quantidade de horas que o sistema utilizado está afrente ou atrasado em relação ao fuso 0 
console.log(`\nMarco 0  no horário brasileiro: ${date.toString()} `);
//podemos ajustar essa data utilizando 3 horas a mais que é o caso do fuso horário utilizado oficialmente em brasília
const correcaoHoraGMT = 60 * 60 * 3 * 1000;//segundos*minutos*quantidade de horas desejadas * correção em milisegundos;
const dateCorrigida = new Date(0 + correcaoHoraGMT);
console.log(`\nMarco 0 real : ${dateCorrigida.toString()} `);

//podemos manipular as datas de diferentes maneiras, observe : 
const umaHora = 60 * 60 * 1000;
const umDia = umaHora * 24;
const umMes = umDia * 30;
const umAno = (umMes * 12) + (umDia * 5) + correcaoHoraGMT;
//podemos então manipular as datas como bem entendermos  : 
date = new Date(0 + umAno);
console.log(`MAarco 0 mais um ano :  ${date.toString()}\n\n`);

//##############################################################################################################################################
//Vamos para exemplos de caso de uso mais relista e pé no chão com a realidade dda vida de um programador :
//podemos passar uma data específica utilizando a seguinte formatação Date(ano,mês(obs é como um vetor de 0-11),dia,hora,minuto,segundo,milesegundo);
let dataTeste = new Date(2022, 11, 25, 0, 35, 27, 999);
console.log(`Exemplo da Vida real, utilizando numbers : ${dataTeste.toString()}`)
//podemos também passar como uma string os params Date(`ano-mes-dia hora:minuto:segundo`)
dataTeste = new Date(`2022-12-25T03:35:27.777`);
console.log(`Exemplo da vida real, utilizando Strings : ${dataTeste.toString()}`);

//Vamos obter as partes fracionadas desta dataTeste a seguir : 
const ano = dataTeste.getFullYear();
const mes = dataTeste.getMonth();
const dia = dataTeste.getDate();
const hora = dataTeste.getHours();
const minuto = dataTeste.getMinutes();
const segundos = dataTeste.getSeconds();
const milisegundos = dataTeste.getMilliseconds();

//podemos imprimir isso veja : 
console.log(ano, mes, dia, hora, minuto, segundos, milisegundos);


// podemos também formatar uma data 
function zeroAEsquerda(num) {
    return num > 9 ? num: `0${num}`;
}
function formatDate(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundo}`;
    return dataFormatada;
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(`\n\n`, dataBrasil);