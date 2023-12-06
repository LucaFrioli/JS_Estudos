//Prototypes -> permitem reuso de métodos por instâncias de uma mesma classe(função contrutora ou factory function)

//função contrutora -> (molde, classe) :
function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

//podemos acessar e manipular um prototipo de uma função contrutora da seguinte maneira :      NomeFuncContrutora.prototype.nomeDoAtributo/Metodo = Atributo ou metodo,  lembre-se ele não aceita arrow functions, o motor só inicia a iteração de busca por metodos e atributos do prototype apartir do momento, que ela não foi encontrada dentro do escopo da função construtora, isso dá o poder de delegações que será visto mais adiante nos tutoriais, para fins de retirada de duvidas precipitadas, a delegação é o "equivalente" a herança vista em outras lingugens de programação

Person.prototype.birthYear = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
};
Person.prototype.compleatName = function () { return `${this.name} ${this.lastname}` };



//instâncias de Person
const p1 = new Person(`José`, `Almeida`, 10);
const p2 = new Person(`Maria`, `Constantina`, 45);
// Comparação com outro objeto prototipado
const date = new Date();


console.log(`Explore a formação das instâncias, navegue por [[Prototype]] ou ___proto___(variação de verção), veja a diferença entre istâncias de Person e Date`);
console.dir(p1);
console.dir(p2);
console.dir(date);

console.log(`\nDemostração do prototype interno dos objetos : `);
console.dir(Person.prototype);
console.dir(Date.prototype);

console.log(`\nExemplo do reuso de métodos do prototype, por diferentes instâncias de Person`)
console.log(`${p1.compleatName()} nasceu em ${p1.birthYear()} portanto tem ${p1.age}`);
console.log(p2.compleatName());
