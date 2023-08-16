// mais sobre if e else 
//Aula para observar mais o comportamento da estrutura, exemplos mais práticos

const numero = 11;

//estrutura 1 :
if (numero >= 0 && numero <= 5) {
    console.log(`O número está zero e cinco.`);
} else if (numero > 5 && numero <= 10) {
    console.log(`Este número está entre 6 e 10 `);
}else{
    console.log(`Este número é maior do que dez`);
}

//toda vez que um if é satisfeito todos os else if subsequentes serão ignorados dentro da estrutura;
//estrutura 2 :
if (numero >= 0 && numero <= 5) {
    console.log(`O número está zero e cinco.`);
} else if (numero > 5 && numero <= 10) {
    console.log(`Este número está entre 6 e 10 `);
}else if (1===1){
    console.log(`Comparação Literal... Repare que a frase que deveria ser exibida não está`);
}else{
    console.log(`Este número é maior do que dez`);
}


//As estruturas vistas são chamadas de encadeadas 
//Suponhamos que queremos tanto a resposta correta da primeira estrutura quanto o literal devemos declarar as condições separadamente

if (numero >= 0 && numero <= 5) {
    console.log(`O número está zero e cinco.`);
} else if (numero > 5 && numero <= 10) {
    console.log(`Este número está entre 6 e 10 `);
}else{
    console.log(`Este número é maior do que dez`);
}

if(1===1){
    console.log(`Comparação Literal`);
}
