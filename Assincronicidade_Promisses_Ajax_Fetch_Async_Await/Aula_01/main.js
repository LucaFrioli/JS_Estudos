//promises / funciona com a assincronicidade de forma melhor que o callback
function time(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== `string`) reject(`valor não é do tipo aceito`);//quando não é resolvido ela retorna o erro passado em seu parametro, que será consumido pelo catch, dentro do catch tem a possibilidade de tratar ainda mais o valor ;
        setTimeout(() => {
            resolve(msg);//quando a promisse consegue ser resolvida utilizamos resolve e ela retorna o parâmetro passado a ela ;
        }, tempo);
    });
}


//observe como fica mais organizado e melhor identado que um callback tree(callback hell);
esperaAi(`Buscando ou esperando um dado`, time(3, 5)).then(response => {//retrona a promisse quando é resolvida, o response carrega os parâmetros passados para resolve
    console.log(response);
    return esperaAi(`Validação da resposta`, time(1, 1.5)); //retronando uma nova promise de dentro da resposta, isso se trona vantajoso, pois quando necessita desencadear varias pormises com um mesmo código de reject, que é este o caso, basta apenas declarar apenas um catch (por esse motivo é muito importante fazer uma cadeia de promisse que seja extremamente conscisa e precisa);
}).then(response => {
    console.log(response);
    return esperaAi(`Tratamento da resposta`, time(1, 2));
}).then(response => {
    console.log(response);
}).then(() => {
    console.log(`Exibindo resposta tratada`);
}).catch(e => {
    console.log(`Error :`, e);
})

