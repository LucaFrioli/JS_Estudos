# Compreendendo a utilização de `let` para declaração de variáveis e suas diferenças em relação ao `var`

**OBS: Conceitos de function e for loop serão abordados mais adiante. Foque apenas nas diferaças básicas que estamos sinalizando.**

Em JavaScript, a forma como declaramos variáveis evoluiu ao longo do tempo, com a introdução de novas palavras-chave que proporcionam comportamentos mais seguros e previsíveis. Entre essas inovações está o uso de `let`, introduzido com o ECMAScript 6 (ES6) em 2015, que trouxe mudanças significativas em comparação com a forma tradicional de declarar variáveis usando `var`. Para entender completamente as nuances entre `let` e `var`, é importante conhecer suas diferenças, os motivos por trás da adoção de `let`, e os problemas que o uso de `var` pode gerar.

## Histórico: A introdução de `let` no ECMAScript 6 (2015)

Até 2015, antes da introdução do ES6, JavaScript oferecia apenas a palavra-chave `var` para a declaração de variáveis. Embora funcional, `var` possuía comportamentos que, em algumas situações, levavam a bugs difíceis de rastrear e a uma lógica mais confusa, especialmente em programas mais complexos.

A introdução de `let` no ES6 tinha como objetivo corrigir alguns desses comportamentos problemáticos, oferecendo uma alternativa mais segura e previsível. `let` foi projetado para melhorar a gestão de variáveis no escopo e evitar problemas como o "hoisting" (elevação), que muitas vezes causava confusão entre os desenvolvedores.

### O conceito de escopo em JavaScript

Para entender as diferenças entre `let` e `var`, precisamos começar pelo conceito de **escopo**, que se refere à área do código onde uma variável está acessível.

1. **Escopo global**: Variáveis declaradas fora de qualquer função ou bloco são acessíveis em todo o código.
2. **Escopo de função**: Variáveis declaradas dentro de uma função só estão disponíveis dentro dessa função.
3. **Escopo de bloco**: Variáveis declaradas dentro de um bloco, como um `if` ou um laço `for`, são acessíveis apenas dentro desse bloco.

Antes do ES6, JavaScript não tinha escopo de bloco propriamente dito, algo que `let` corrigiu, como veremos.

## Diferenças fundamentais entre `var` e `let`

### 1. **Escopo de bloco (Block-scoped) vs. Escopo de função (Function-scoped)**

A principal diferença entre `var` e `let` está no escopo. Variáveis declaradas com `var` possuem **escopo de função**, enquanto as variáveis declaradas com `let` possuem **escopo de bloco**.

#### `var` – Escopo de função

Variáveis declaradas com `var` são "vistas" em toda a função onde foram declaradas, mesmo que estejam dentro de um bloco de código. Por exemplo:

~~~javascript
function exemplo() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
exemplo();
~~~

No exemplo acima, mesmo que `x` seja declarada dentro do bloco `if`, ela ainda está acessível fora do bloco, pois o escopo de `var` é a função como um todo. Isso pode causar comportamento inesperado, pois a variável `x` é acessível em locais que você não gostaria.

#### `let` – Escopo de bloco

Variáveis declaradas com `let` ficam restritas ao bloco em que foram criadas. No mesmo exemplo, se usarmos `let` em vez de `var`, a situação muda:

~~~javascript
function exemplo() {
  if (true) {
    let x = 10;
  }
  console.log(x); // ReferenceError: x is not defined
}
exemplo();
~~~

Aqui, `x` só existe dentro do bloco `if`, e tentar acessá-la fora desse bloco resultará em um erro, tornando o comportamento mais previsível e menos propenso a erros.

### 2. **Hoisting (Elevação)**

O **hoisting** é um comportamento em JavaScript onde as declarações de variáveis (mas não suas atribuições) são "elevadas" para o topo do escopo. Isso significa que você pode declarar uma variável com `var` depois de usá-la no código, e ela não causará erro imediatamente (mas poderá levar a resultados inesperados).

#### Hoisting com `var`

~~~javascript
console.log(x); // undefined
var x = 10;
~~~

Embora `x` seja declarada após o `console.log`, o código não gera erro porque a declaração foi "elevada" ao topo, mas a atribuição ainda não ocorreu. Isso pode causar confusão, já que o valor de `x` será `undefined` antes de ser atribuído.

#### Hoisting com `let`

O `let` também é "elevado", mas, diferentemente do `var`, ele não permite o uso da variável antes de sua declaração. Isso ocorre porque variáveis `let` são colocadas em uma "zona morta temporal" até que sejam declaradas no código. O uso antes da declaração resulta em erro.

~~~javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
~~~

Esse comportamento torna o código mais seguro, pois impede o uso de variáveis que ainda não foram inicializadas corretamente.

### 3. **Reatribuição e redeclaração**

Outra diferença importante é que, enquanto `var` permite redeclarar a mesma variável no mesmo escopo, `let` não permite isso, prevenindo possíveis conflitos e erros.

#### `var` permite redeclaração:

~~~javascript
var x = 10;
var x = 20;
console.log(x); // 20
~~~

Aqui, `x` foi redeclarada sem nenhum problema, o que pode levar a bugs se você acidentalmente reutilizar o nome de uma variável.

#### `let` não permite redeclaração:

~~~javascript
let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared
~~~

Com `let`, você recebe um erro caso tente declarar a mesma variável mais de uma vez no mesmo escopo, incentivando um código mais limpo e organizado.

### 4. **Uso em loops**

Ao utilizar laços de repetição como `for`, o `let` tem um comportamento muito mais previsível em relação ao `var`.

#### Com `var`:

~~~javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3, 3, 3
}
~~~

Aqui, o valor de `i` é compartilhado em todas as iterações, já que `var` não possui escopo de bloco, causando um comportamento inesperado.

#### Com `let`:

~~~javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}
~~~

Com `let`, cada iteração do loop tem seu próprio escopo de bloco, e o comportamento é o esperado.

## Por que `let` foi adotado?

A adoção de `let` no ES6 foi impulsionada pelo desejo de tornar JavaScript uma linguagem mais robusta e previsível. Antes de `let`, os comportamentos de `var` em relação ao escopo e hoisting causavam diversos problemas, especialmente em projetos maiores. Os principais benefícios de `let` incluem:

1. **Melhor controle de escopo**: O escopo de bloco é mais natural e intuitivo.
2. **Evitar comportamentos indesejados de hoisting**: Com `let`, é menos provável que variáveis sejam usadas antes de serem inicializadas.
3. **Prevenção de erros de redeclaração**: Impedir a redeclaração no mesmo escopo evita conflitos acidentais entre variáveis.
4. **Comportamento mais previsível em loops**: Usar `let` em loops cria escopos distintos para cada iteração, eliminando bugs comuns.

### Curiosidades

- **Primeira proposta**: A proposta para incluir `let` em JavaScript foi feita em 2000, mas só foi oficialmente adotada com o ES6 em 2015.
- **Zona Morta Temporal (TDZ)**: A zona morta temporal é o intervalo entre a criação de uma variável com `let` e sua inicialização no código, onde a variável existe, mas não pode ser acessada.

O `let` trouxe uma melhoria significativa ao gerenciamento de variáveis em JavaScript, corrigindo problemas e armadilhas associadas ao `var`. Ao usar `let`, você garante que as variáveis respeitem o escopo de bloco, evitando comportamentos imprevisíveis e facilitando a depuração do código. Para novos desenvolvimentos, a recomendação geral é preferir `let` (ou `const`, quando aplicável) em vez de `var`, exceto em casos específicos de compatibilidade com códigos mais antigos.

## Aplicando o conhecimento

Agora vamos criar o mesmo código que criamos na [`aula 2`](../Aula_2/readme.md#criando-um-exemplo), porém ao invés de declarar as variaveis utilizando a palavra reservada `var` vamos modernizar o código e utilizar let, após a mudança rode o código dentro do runtime. Veja como ficará o código reformulado a seguir :

~~~javascript
let nome = 'seu nome', idade = 20;
console.log(`Olá, me chamo ${nome}, tenho ${idade} anos e estou estudando JavaScript.`);
~~~


Vamos treinar conceitos antes vistos e criar um exeplo mais completo, vamos definir duas variveis chamadas ator1, ator2, idade1 e idade2, então atribuiremos aos atores nomes do tipo string e as idades, numeros. Após isso crie utilizando template string e multiline uma pequena história. Crie um novo diretório para isso e chame o arquivo dentro dele de `index.js`, veja o exeplo deste código a seguir:

~~~javascript
let ator1='João', ator2='Maria';
let idade1=22, idade2=25;
console.log(`
${ator1} e ${ator2}, moravam em uma pequena vila perto de Lancelot, e viviam bem. Até que um dia ${ator1} achou uma trilha de doces e correu para contar a ${ator2}.

- ${ator2}, ${ator2}! Você não vai acreditar achei uma trilha de doces em meio a floresta!
- ${ator1}, você não acha estranho uma trilha de doces em uma floresta?? Em todo o caso por que você vem me dizer isso?

Responde ${ator2}, intrigada com toda esta situação.
${ator1} então diz o seguinte :

- ${ator2}, você não está cansada de apenas comer batatas, e cenouras vindas dos campos de Lancelot? Vamos vai, vamos descobrir onde esta trilha de doces pode nos levar ! Além disso eu já tenho ${idade1} e você ${idade2}. Ninguém irá reclamar se sumirmos por umas duas ou três horinhas.

${ator2} meio relutante decide então ouvir ${ator1}, e os dois seguem em direção a floresta. Passaram-se anos desde que ambos foram vistos pela última vez. Não se sabe se ${ator1} e ${ator2} encontraram muitos doces e viveram felizes para sempre, ou um pé de feijão que os levaram para a masmorra de um gigante, ou foram comidos por uma bruxa que mora em uma casa apoiada em pés de galinhas. Só se sabe que toda a vila ficou triste sem ambos lá.


Moral da história :

Jamais aceite doce de estranhos, ou saia sem avisar ninguém de onde está indo, pois se algo de bom acontecer as pessoas importantes merecem desfrutar com você. Porém se o pior acontecer essas mesmas podem recorrer a "Lancelot" e irem atrás de te ajudar.
`);
~~~

Após isso rode e veja sua história funcionando, se quiser mudaro nome dos personagens e as idades basta então trocar os valores atribuidos nas variaveis.

Agora que compreendemos a diferença de `let` e `var`, e sabemos que ao declarar variaveis o melhor padrão é utilizar `let`, podemos dar o próximo passo, e entender a forma de declaração `const` mais a fundo, e compreender a diferença de se declarar uma `const` e uma `let`, para isso [clique aqui, e continue sua leitura!](../Aula_5/readme.md)
