//Criando classes em js
//parea criar uma classe usamos a palavra reservada class

class Animal {
    constructor(eatingHabit, animal) {//metodo caso seja necessário receber parametros, ele é o contrutor 
        this.eatingHabit = eatingHabit;
        this.animal = animal;
    }

    eat() {//metodos podem ser automaticamente declarados, e o próprio javascript irá atrela-los em seu prototype
        switch (this.eatingHabit.toLowerCase()) {
            case `carnivoro`:
                return `${this.animal}s comem animai`;
            case `herbivoro`:
                return `${this.animal}s comem vegetais algas e plantas`;
            case `onivoro`:
                return `${this.animal}s comem animais, vegetais, algas e plantas`;
            case `detritivoro`:
                return `matéria orgânica ou detritos`;
            default:
                return `${this.animal}s digite um Habito alimentar válido`;
        }
    }
}

const a1 = new Animal(`Onivoro`, `Humano`); //Instância de Animal
console.log(a1.eat());
