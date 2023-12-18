//promises / funciona com a assincronicidade de forma melhor que o callback
function time(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== `string`) reject(`valor não aceito`);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi(`Buscando ou esperando um dado`, time(1, 3)).then(response => {
    console.log(response);
    return esperaAi(`Validação da resposta`, time(1, 3))
}).then(response => {
    console.log(response);
    return esperaAi(`Tratamento da resposta`, time(1, 2))
}).then(response => {
    console.log(response);
}).then(() => {
    console.log(`Exibindo resposta tratada`);
}).catch(e => {
    console.log(`Error :`, e);
})

