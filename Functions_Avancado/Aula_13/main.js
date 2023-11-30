//Funções Geradoras
function* genarator1() {
    //lógica
    yield `Value 1`;
    //lógica
    yield `Value 2`;
    //lógica
    yield `Value 3`;
}

const genarator01 = genarator1();
const genarator02 = genarator1();
//demonstração do funcionamento interno
console.log(genarator01.next())
console.log(genarator01.next())
console.log(genarator01.next())
console.log(genarator01.next())

//iterando sobre os valores gerados
for (value of genarator02) {
    console.log(value);
}

function* counterEx01() {
    let i = 0
    while (true) {
        yield i;
        i++;
    }
}

const conter01 = counterEx01();
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)
console.log(conter01.next().value)

function* DelegarTask() {
    yield* genarator1();
    yield `Value 4`;
    yield `Value 5`;
    yield `Value 6`;
}

const dtask = DelegarTask();
for (let value of dtask) {
    console.log(value);
}

function* functions() {
    yield function () {
        console.log(`hello, `);
    }
    yield function () {
        console.log(`world`);
    }

    return function () {
        console.log(`Não falo mais nada`);
    }
}

const poll = functions();
const func1 = poll.next().value;
const func2 = poll.next().value;
const func3 = poll.next().value;
func1();
func2();
func3()
