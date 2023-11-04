function generateAleatoryTime() {//serve para tentar simular a real magnitude de como um servidor realmente funciona na prática
    const max = 5000;
    const min = 500;
    return Math.floor(Math.random() * (max - min) + min); // Corrigindo Math.random()
}

const rand1 = generateAleatoryTime();
console.log(rand1);
const rand2 = generateAleatoryTime();
console.log(rand2);
const rand3 = generateAleatoryTime();
console.log(rand3);

function n1(callback,rand) {
    setTimeout(() => {//os setTimeout é apenas uma tentativa de demonstração de como realmente requisições de servidores funciona, e levam tempo
        console.log(`primeira requisição`);
        if (callback) callback()
    }, rand);
}

function n2(callback,rand) {

    setTimeout(() => {
        console.log(`segunda requisição`);
        if (callback) callback()
    }, rand);
}

function n3(callback,rand) {
    setTimeout(() => {
        console.log(`terceira requisição`);
        if (callback) callback()
    }, rand);
}

n1(()=>{ //observe que mesmo que alguma posterior seja mais rápida a execução, o console, respeitará a ordem da fila, por mais que fazer deste modo é considerado uma má prática, também conhecida como callbackHell( inferno de callbacks);
    n2(()=>{
        n3();
    });
});
console.log(`Olá Mundo!`);

//uma outra forma de organizar melhor os callbacks é fazendo funções callback que organizam as ordens, evitando assim Calback Hells

function n1Callback(){
    n2(n2Callback,rand2);
}

function n2Callback(){
    n3(n3Callback,rand3);
}

function n3Callback(){
    console.log(`Olá mundo`);
}

n1(n1Callback,rand1);
