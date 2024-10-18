**[Voltar](./expressConfiguration.md)**

# Paradigma Orientado a Objetos

A programação orientada a objetos (POO) é um dos principais paradigmas de desenvolvimento de software, focando na criação e manipulação de **objetos**, que são abstrações do mundo real ou de conceitos computacionais. No contexto da linguagem **JavaScript**, a POO é amplamente utilizada para organizar código de forma modular, reutilizável e escalável, promovendo boas práticas de desenvolvimento.

Em JavaScript, a POO gira em torno da definição de **classes**, **objetos**, **métodos** e **propriedades**. Embora JavaScript originalmente não tenha sido projetado como uma linguagem puramente orientada a objetos, a introdução da sintaxe de **classes** no ECMAScript 6 (ES6) trouxe uma estrutura mais formal para a criação de objetos e o uso dos princípios fundamentais da POO.

## 1. Classes e Objetos

Uma **classe** em JavaScript é uma estrutura que define as propriedades e os métodos que os objetos criados a partir dela terão. As **propriedades** representam os dados ou o estado do objeto, enquanto os **métodos** descrevem os comportamentos ou ações que o objeto pode realizar. Um **objeto** é uma instância de uma classe, ou seja, uma entidade criada com base na estrutura e comportamento definidos pela classe.

### Definição de uma Classe

A sintaxe básica para definir uma classe em JavaScript é a seguinte:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;  // Propriedade nome
        this.idade = idade;  // Propriedade idade
    }

    // Método para exibir informações da pessoa
    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
```

A palavra-chave `class` é utilizada para definir uma classe, e o método `constructor` é chamado sempre que um novo objeto é instanciado, permitindo a inicialização de seus atributos. No exemplo acima, a classe `Pessoa` possui duas propriedades (`nome` e `idade`) e um método `apresentar`, que exibe informações sobre a pessoa.

### Instanciando um Objeto

Para criar um objeto de uma classe, utilizamos a palavra-chave `new`:

```javascript
const pessoa1 = new Pessoa('Maria', 30);
pessoa1.apresentar();  // Saída: Meu nome é Maria e tenho 30 anos.
```

Aqui, `pessoa1` é um objeto criado a partir da classe `Pessoa`, e o método `apresentar` pode ser invocado para exibir as informações dessa instância.

## 2. Encapsulamento

O **encapsulamento** é um dos pilares da POO, que visa proteger os dados de um objeto, permitindo acesso e modificação apenas por meio de métodos específicos. Em JavaScript, podemos simular o encapsulamento utilizando convenções como prefixar nomes de propriedades privadas com um sublinhado ou, a partir do ES2020, usando a notação de **private fields** (`#`).

### Encapsulamento com Campos Privados

```javascript
class ContaBancaria {
    #saldo = 0;

    constructor(nome) {
        this.nome = nome;
    }

    // Método para depositar dinheiro
    depositar(valor) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }

    // Método para consultar o saldo
    consultarSaldo() {
        console.log(`O saldo de ${this.nome} é R$${this.#saldo}.`);
    }
}
```

No exemplo acima, a propriedade `#saldo` é privada e só pode ser acessada ou modificada pelos métodos `depositar` e `consultarSaldo`. Isso garante que o saldo não seja manipulado diretamente fora da classe, promovendo a segurança e a integridade dos dados.

## 3. Herança

A **herança** permite que uma classe herde características (propriedades e métodos) de outra, promovendo o reuso de código e facilitando a criação de hierarquias de classes. Em JavaScript, utilizamos a palavra-chave `extends` para que uma classe herde de outra.

### Exemplo de Herança

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} está fazendo um som.`);
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} está latindo.`);
    }
}
```

No exemplo, a classe `Cachorro` herda da classe `Animal`, mas sobrescreve o método `emitirSom` com um comportamento específico para cães. A herança possibilita a reutilização da lógica da classe base, enquanto a subclasse pode modificar ou estender essa funcionalidade conforme necessário.

## 4. Polimorfismo

O **polimorfismo** permite que diferentes classes derivadas de uma mesma superclasse possam ser tratadas de maneira uniforme, mesmo implementando comportamentos distintos. Em JavaScript, o polimorfismo pode ser implementado por meio da **sobrescrita de métodos** (como no exemplo anterior, onde `Cachorro` sobrescreve `emitirSom`).

### Exemplo de Polimorfismo

```javascript
const animal1 = new Animal('Genérico');
const cachorro1 = new Cachorro('Rex');

animal1.emitirSom();   // Saída: Genérico está fazendo um som.
cachorro1.emitirSom(); // Saída: Rex está latindo.
```

Embora `animal1` e `cachorro1` sejam instâncias de classes diferentes, ambos compartilham a mesma interface (`emitirSom`), mas com comportamentos distintos.

## 5. Abstração

A **abstração** é o processo de expor apenas os detalhes essenciais de um objeto, ocultando a complexidade interna. Em JavaScript, a abstração é alcançada ao definir interfaces claras por meio de métodos públicos, enquanto os detalhes de implementação são mantidos privados.

Embora JavaScript não tenha suporte nativo a **interfaces** como em outras linguagens orientadas a objetos (como Java ou C#), podemos implementar abstração ao focar em expor apenas os métodos e propriedades que são essenciais para o uso de uma classe, enquanto mantemos os detalhes internos encapsulados.

### Exemplo de Abstração

```javascript
class Carro {
    constructor(marca) {
        this.marca = marca;
    }

    ligarMotor() {
        console.log(`O motor do ${this.marca} está ligado.`);
    }

    dirigir() {
        this.ligarMotor();
        console.log(`O ${this.marca} está em movimento.`);
    }
}
```

No exemplo, o método `dirigir` abstrai a complexidade de ligar o motor e mover o carro. O usuário da classe não precisa saber como o motor é ligado; ele simplesmente usa o método `dirigir` para interagir com o objeto.

O paradigma orientado a objetos, quando aplicado em JavaScript, oferece uma estrutura poderosa para organizar o código em torno de objetos que combinam dados e comportamentos. Utilizando conceitos como **encapsulamento**, **herança**, **polimorfismo** e **abstração**, é possível criar sistemas modulares, extensíveis e de fácil manutenção. A sintaxe moderna de classes introduzida no ES6 aproximou JavaScript de outras linguagens orientadas a objetos, proporcionando uma maneira mais formal e legível de trabalhar com objetos e seus relacionamentos, promovendo boas práticas no desenvolvimento de software.

**[Voltar](./expressConfiguration.md)**
