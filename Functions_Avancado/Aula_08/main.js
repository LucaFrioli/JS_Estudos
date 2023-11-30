//Factory Functions (Funções Fábricas)
function creatHumanPearson(name, lastname, age, gender, ...rest) {
    return {
        name,
        lastname,
        age,
        gender,
        rest,
        species: `Humano`,//OBS : veja que quando quero acessar um atributo de dentro de um objeto ou classe que está dentro de uma função, sou obrigado a adicionar o this. para especificar que se refere ao atributo da classe; (veremos mais aulas sobre isso mais a frente nas aulas, pois nem sempre ele assume esta forma);
        fala(hobby = false, species) {
            if (!hobby) {
                return `${this.name} ${this.lastname} disse que tem ${this.age} anos`;
            }
            return `${this.name} ${this.lastname} é ${this.species/*este é a espécie do objeto*/}, disse que tem ${this.age} anos e gosta de ${hobby}, alem de ter Tobby que é um ${species/*este á a espécie do parametro recebido na execução do método*/}`;// o this referência a variavel que irá receber o objeto, então this.species referencia a variavel.species, isso é bom pois não mistura com possíveis parâmetros que de métodos com atributos do objeto, um bom exemplo é o caso da espécie citado (veremos isso mais á frente, pois nem sempre ele assume esta forma);
        }
    }
}

const pearson1 = creatHumanPearson(`Luís Felipe`, `Ribeiro Carvalho`, 17, `M`, `Rio Claro, RJ`);
console.log(pearson1.fala(`Jogar Don't Starve`, `Gato`));
