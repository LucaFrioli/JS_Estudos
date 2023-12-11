// Factory functions + prototypes

//funções que podem ser utilizadas dentro do protótipo
const drink = {
    drink() {
        console.log(`olá meu nome é ${this.name} e estou bebendo`);
    }
}

const talk = {
    talk() {
        console.log(`olá meu nome é ${this.name} ${this.lastname}`);
    }
}

const eat = {
    eat() {
        console.log(`olá meu nome é ${this.name} e estou comendo`);
    },
}

const createPersonPrototype = { ...talk, ...drink, ...eat };//adicionando os métodos na variavel(mixando o objeto)

function createPerson(name, lastname, age) {
    return Object.create(createPersonPrototype, {//retorno do objeto com o protótipo mixado
        name: { value: name },
        lastname: { value: lastname },
        age: { value: age },
    });
}

function createPoliceOfficer(name, lastname, age, patente) {
    const obj = Object.create(createPerson(name, lastname, age), {
        patente: { value: patente },
    });
    delete obj.talk;
    obj.drink = function () { console.log(`Olá sou o ${this.patente} ${this.lastname}, e gosto de beber café`); }
    return obj;
}

const p1 = createPerson(`José`, `Tavares`, 47);
const officer1 = createPoliceOfficer(`Jefferson`, `Pinto`, 38, `Tenente`);
console.log(`Função createPerson :\n`, p1, `\n`);
p1.talk();
p1.drink();
p1.eat();
console.log(`\nFunção createPoliceOfficer :\n`, officer1, `\n`);
officer1.drink();
officer1.eat();
