//métodos de instância e estáticos

class Animal {
    constructor(eatingHabit, popularName) {//metodo caso seja necessário receber parametros, ele é o contrutor
        this.eatingHabit = eatingHabit;
        this.popularName = popularName;
    }

    eat() {//metodos pertencente a instância do objeto Animal
        switch (this.eatingHabit.toLowerCase()) {
            case `carnivoro`:
                return `${this.popularName}s comem outros animai`;
            case `herbivoro`:
                return `${this.popularName}s comem vegetais algas ou plantas`;
            case `onivoro`:
                return `${this.popularName}s comem outros animais, vegetais, algas ou plantas`;
            case `detritivoro`:
                return `matéria orgânica ou detritos`;
            default:
                return `${this.popularName}s digite um Habito alimentar válido`;
        }
    }

    static animalKingdom() {//método pertencente a classe em si, somente a classe pode retornar um método estático neste caso somente Animal pode ter acesso a este método, vale ressaltar que este método não terá acesso também aos valores da instância, ou seja valores que são construidos no constructor 
        console.log(`Esta classe de ser vivo pertence ao reino Animalia dentro da árvore taxonomica`)
    }

}

const animal = new Animal(`Herbivoro`, `Girafa`);
console.log(animal.eat());
//acessando metodo estático
Animal.animalKingdom();//quando não utilizamos a palavra new o contrutor não é chamado, logo não é possível ter acesso aos atributos e métodos de instância

