//a funação window confirm retorna valores booleanos: ela abre uma caixa com sim ou não
const confirma = confirm(`Deseja receber nossas atualizações`);

if (confirma == true){
// Aula para realização dentro do navegador abra o arquivo html em seu navegador
alert('Olá seja bem vindo cadastre seu email !');
//prompt abre uma caixa de dialogo de entrada de dados;
const email = prompt(`Digite seu email: `);
console.log(email);
}else{
    alert(`Olá mundo !`);
}


