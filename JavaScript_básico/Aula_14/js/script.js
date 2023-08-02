const nome = prompt(`Digite seu nome completo!`);
let retorno = document.querySelector(`p#retorno`);

let nomeDividido = nome.split(` `);
let numberOfNames = nomeDividido.length;
//let ultimaLetra = nome.slice(-1); Não esta sendo utilizado pois não condizia com o exercício
//let primeiraLetra = nome[0];  não está sendo utilizado pois não condizia com o exercício

console.log(nomeDividido);
console.log(numberOfNames);

retorno.innerHTML = `O seu nome é : <strong>${nome}</strong> </br>`;
retorno.innerHTML += `O seu nome tem ${nome.length} letras. </br>`;
retorno.innerHTML += `A segunda letra do seu nome é ${nome[1]} </br>`
retorno.innerHTML += `Você tem  ${numberOfNames - 1} ${numberOfNames > 2 ? "sobrenomes" : "sobrenome"}</br>`;
//Para obter o retorno das letras finais utilizar o .slice() que retornará as letras da fatia referente as ultimas três letras
retorno.innerHTML += `As 3 ultimas letras do seu nome são :  ${nome.slice(-3)} </br>`;

//retorno.innerHTML += `Qual o primeiro índice da letra ${ultimaLetra} no seu nome? ${nome.indexOf(ultimaLetra)} <br />`;
//retorno.innerHTML += `Qual o último índice da letra ${primeiraLetra} no seu nome? ${nome.lastIndexOf(primeiraLetra)} <br />`;
retorno.innerHTML +=`Qual o primeiro indice da letra "a" no seu nome ? ${nome.indexOf(`a`,`A`)} `;
retorno.innerHTML +=`Qual o ultimo indice da letra "a" no seu nome ? ${nome.lastIndexOf(`a`,`A`)}</br> `; 

for (let i = 1; i < numberOfNames; ++i) {
    retorno.innerHTML += `O seu ${i}º sobre nome é : ${nomeDividido[i]} </br>`;
}

retorno.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
retorno.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;