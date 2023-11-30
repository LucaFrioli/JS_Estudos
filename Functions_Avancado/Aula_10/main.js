//funções contrutoras (constructor functions)

//A função crontrutora é como uma classe, ela sempre deve iniciar com letra maiuscula e sua chamada vem sempre com um new na frente de de seu nome

function Pearson(name, lastname, PV) {//Ignore a quik Fix no momento veremos mais sobre este assunto no decorrer das aulas seguintes

    //Atributos e Métodos Privados
    let health = PV;
    const damage = (damage) => {
        return health = health - damage;
    };

    //Atributos e métodos públicos
    this.name = name;
    this.lastname = lastname;
    this.sayHello = () => {
        return `${this.name} fala olá, e conta que está com : ${damage(5)}PV.`;
    }
    this.tellPvMax = () => {
        return `Me de uma cura para conseguir voltar a ter minha vidda máxima : ${PV}PV.`;
    }
}

const p1 = new Pearson(`João`, `Junqueira`, 10);
const p2 = new Pearson(`Abade`, `Frei Leitão`, 15);

console.log(p1.sayHello(), p1.tellPvMax());//observe que se tentarmos acessar os métodos privados aqui, não é possível
console.log(p2.sayHello(), p2.tellPvMax());


