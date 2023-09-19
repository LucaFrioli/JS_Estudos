//escreva uma função que receba largura e altura de uma imagem como parametro e retorne true se ela se encontrar no modo paisagem 

const landscape = (width, heigth) => width > heigth;
console.log(landscape(200, 100));