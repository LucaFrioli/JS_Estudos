//Async/Await
function time(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {//função de simulacro(apenas para relembrar);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== `string`) reject(`Menssagem não pertence a um tipo primitivo válido`);
            resolve(msg + ` : A promisse foi resolvida com sucesso`);
        }, time);
    });
}

console.log(`Promisses simples  : `)
waitThere(`Fase1`, time(0, 4)).then((response) => {//transformando o código assíncroino em síncrono porém muito verboso
    console.log(response)
    return waitThere(`Fase2`, time(0, 4));
}).then((response) => {
    console.log(response);
    return waitThere(`Fase3`, time(0, 4));
}).then((response) => {
    console.log(response);
}).catch(e => {
    console.log(`ERROR : ${e}`);
}).finally(() => { exe(); });

//async/await vem para resolver a verbosidade do then/catch. Para Adicionar o Catch dentro de uma função assíncrona basta adicionar todos os awaits dentro de um try/catch ou adicionar um catch em cada erro

async function exe() {//define que a função será executada de form assíncrona, e permite que o await seja utilizando
    console.log(`\nEXE com async await : `);
    try {
        const fase1 = await waitThere(`Fase1`, time(0, 4));//o await define que a função executada deve ser esperada antes de a execução do programa ser continuada
        console.log(fase1);

        const fase2 = await waitThere(123, time(0, 4));//mude par aumn valor que ocasiona erro para compreender o fluxo do preograma
        console.log(fase2);

        const fase3 = await waitThere(`Fase3`, time(0, 4));
        console.log(fase3);
    } catch (e) {
        console.log(`Error : ` + e);
    } finally {
        console.log(`Código continua executando`);
        exeWhithCatchForEachAwait();
    }

}


//podemos adicionar try catch para cada ação oq permite a continuidade d aexecução do código mesmo quando um erro acontece caso for necessário.
async function exeWhithCatchForEachAwait() {
    console.log(`\nEXE COM Try/Catch por await :`);

    try {
        const fase1 = await waitThere(`Fase1`, time(0, 4));//o await define que a função executada deve ser esperada antes de a execução do programa ser continuada
        console.log(fase1);
    } catch (e) {
        console.log(`Error : ${e}`);
    }

    try {
        const fase2 = await waitThere(123, time(0, 4));
        console.log(fase2);
    } catch (e) {
        console.log(`Error : ${e}`);
    }

    try {
        const fase3 = await waitThere(`Fase3`, time(0, 4));
        console.log(fase3);
    } catch (e) {
        console.log(`Error : ${e}`);
    }
    console.log(`Código continua`);
}


