//Métodos úteis para Promisses

function time(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== `string`) reject(`Menssagem não pertence a um tipo primitivo válido`);
            resolve(msg + ` : A promisse foi resolvida com sucesso`);
        }, time);
    });
}

//Promisse.all, Promisse.race Promisse.resolve Promisse.reject

//Promisse.all([array values]);
const promisses = [
    `Firs Value`,
    waitThere(`Promise 2`, time(0, 5)),
    waitThere(`Promise 1`, time(0, 5)),
    waitThere(`Promise 3`, time(0, 5)),
    waitThere(`Promise 4`, time(0.5, 7)),//troque o texto por um número para averiguar os erros catch e seu comportamento dentro de cada catch de uma forma prática
    `Other Value`
];

Promise.all(promisses)//retorna um array com todas as promisses resolvidas ou o catch se alguma for rejeitada, ou seja todas as promisses devem ser validas
    .then((value) => {
        console.log(`\nMétodo All :`);
        console.log(value);
    }).catch((e) => {
        console.log(`Error : ` + e);
    })



//Promisse.race() retorna o primeiro valor a ser resolvido dentro de um array de promises  averigue:
const promissesWithOutStrings = promisses.filter(item => typeof item === `object`);//retirando os valores string do promisses, pois o método irá avaliar as string como uma promessa válida e as retornará
Promise.race(promissesWithOutStrings)//O método race retorna a Promisse que fica pronta primeiro, caso no array tenha uma promisse inválida, diferente do all, só retornará erro caso a primeira a ser resolvida seja a com erro
    .then((value) => {
        console.log(`\nMétodo race : `)
        console.log(value);
    }).catch((e) => {
        console.log(`Error : ` + e);
    })


//Promise.resolve() faz com que dentro de uma Promisse, ela seja resolvida de foirma automática.
//Vamos considerar um cenário  :  Uma informação que pode ou não estar em cache deve ser recuperada :  uma busca é feita, caso a informação já ser encontra em cache é legal resolver já a promisse, impedindo que seja executada de forma desnecessária, observe o simulácro :

let returnInfoCache = () => {
    const isInCache = true; //troque para true ou false para observar o funcionamento : (vamos escrvcer na unha um retorno de uma averiguação para simulação);
    if (isInCache) {
        return Promise.resolve(`Achamos a informação no cache com sucesso`);
    } else {
        return waitThere(`Recuperando Informação do servidor`, time(0, 2));
    }
}

returnInfoCache().then(returninfo => { console.log(`\nMétodo resolve : `); console.log(returninfo); }).catch(e => console.log(`\nMétodo resolve rejeitado :`, `\n${e}`));


//O método reject() faz a mesma coisa que !resolve()

returnInfoCache = () => {
    const isInCache = false; //troque para true ou false para observar o funcionamento : (vamos escrvcer na unha um retorno de uma averiguação para simulação);
    if (!isInCache) {
        return Promise.reject(`não achamos as informações em cache`);
    } else {
        return waitThere(`Recuperando Informação do cache`, time(0, 2));
    }
}

returnInfoCache().then(returninfo => { console.log(`\nMétodo reject foi achado no cache : `); console.log(returninfo); }).catch(e => console.log(`\nMétodo reject não foi achado no cache:`, `\n${e}`));
