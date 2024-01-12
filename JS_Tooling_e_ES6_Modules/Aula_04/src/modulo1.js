const name = `João`;
const lastname = `Silva`;
const age = 30;
function sum(x, y) {
    return x + y;
}

export function hello() { //podemos exportar diretamente
    console.log(`Hello world!!!`)
}


export { name as default, lastname as lnImport, age, sum };//posso importar por grupo, e utilizar a mascara na hora da exportação com as, além de poder decidir uma variavel padrão para a exportação
