names = [`João`, `Maria`, `Lucas`, `Pedro`, `José`];
function randomizeAge(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1) + min)
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.getBirthYear = function () {
    atualYear = new Date().getFullYear();
    return atualYear - this.idade;
}
Object.freeze(Pessoa.getBirthYear());

function Aluno(nome, idade, curso) {
    Pessoa.call(this, nome, idade);//herança do contrutor
    this.curso = curso;
}
Aluno.prototype.talkAbout = function () {
    return `Olá me chamo ${this.nome} e estou cursando ${this.curso} `;
}
Object.freeze(Aluno.talkAbout());
Object.setPrototypeOf(Aluno.prototype, Pessoa.prototype);//herança do prototipo

function criaAluno(number, arraytoConsume) {
    arrayAlunos = [];
    for (let x = 0; x < number; x++) {
        arrayAlunos.push(new Aluno(arraytoConsume[x], randomizeAge(15, 40), `Javascript`));
    }
    return arrayAlunos;
}

const alunos = criaAluno(5, names);
console.log(alunos);

alunos.forEach(element => {
    console.log(element.getBirthYear())
    console.log(element.talkAbout())
});
