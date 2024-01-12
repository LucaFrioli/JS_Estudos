export class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    showCompleatName() {
        console.log(`${this.name} ${this.lastname}`);
    }
}

const np = new Person(`Sou uma`,`pessoa privada`);//veja que np não aprece no objeto de listagem de propriedades acessiveis do modulo, sendo assim np é um atributo privado do modulo person.js

