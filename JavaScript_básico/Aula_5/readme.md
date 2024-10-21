# Diferença entre `const` e `let`, e quando utilizá-las

**OBS: Conceitos como objetos e arrays serão abordados mais adiante, foque principalmente na diferança de mutabilidade e imutabilidade entre as duas declarações.**

Com o advento do ECMAScript 6 (ES6) em 2015, os desenvolvedores ganharam novas formas de declarar variáveis em JavaScript: `const` e `let`. Essas palavras-chave trouxeram melhorias significativas em relação ao comportamento da tradicional `var`, oferecendo mais controle e previsibilidade na declaração de variáveis. Porém, muitos desenvolvedores ainda têm dúvidas sobre quando usar `const` ou `let`, e quais as principais diferenças entre elas. Neste texto, eles aprenderão as nuances dessas duas formas de declaração e descobrirão os melhores cenários para cada uma.

## Diferenças fundamentais entre `const` e `let`

Tanto `const` quanto `let` compartilham algumas características comuns, como o **escopo de bloco** (block-scoped) e a prevenção de **hoisting** imprevisível (elevação). Porém, o comportamento de cada uma diverge em aspectos cruciais, principalmente relacionados à mutabilidade e à intenção de uso.

### 1. **Imutabilidade de `const`**

A maior diferença entre `const` e `let` está no fato de que **variáveis declaradas com `const` não podem ser reatribuídas**. O uso de `const` indica que o valor da variável permanecerá o mesmo durante todo o ciclo de vida do programa. Uma vez atribuído um valor a uma variável `const`, ela não poderá receber um novo valor, o que torna a sua utilização ideal para valores que não mudarão.

Por exemplo, se eles declararem uma variável com `const`, tentar reatribuir um novo valor resultará em erro:

~~~javascript
const pi = 3.14;
pi = 3.1416; // TypeError: Assignment to constant variable
~~~

Nesse caso, a variável `pi` foi declarada como uma constante, ou seja, seu valor não pode ser alterado.

### 2. **Mutabilidade de `let`**

Diferente de `const`, as variáveis declaradas com `let` **podem ser reatribuídas** ao longo do programa. Isso significa que, embora `let` também respeite o escopo de bloco, seu valor pode ser alterado, tornando-o mais flexível em situações onde a mudança de valor ao longo do código é necessária.

Por exemplo, no caso de uma contagem em um loop:

~~~javascript
let contador = 0;
contador = contador + 1;
~~~

Aqui, `let` permite que o valor da variável `contador` seja atualizado conforme necessário.

### 3. **Imutabilidade estrutural de `const`**

Embora `const` crie uma constante que não pode ser reatribuída, é importante entender que, no caso de **objetos e arrays**, a estrutura interna pode ser alterada. Ou seja, enquanto a referência para o objeto ou array não pode ser modificada, as propriedades internas ainda podem ser alteradas.

Eles podem ver esse comportamento no seguinte exemplo:

~~~javascript
const pessoa = { nome: "João", idade: 25 };
pessoa.idade = 26; // Isso é permitido
console.log(pessoa); // { nome: "João", idade: 26 }
~~~

O objeto `pessoa` foi declarado como `const`, então sua referência não pode ser mudada. No entanto, as propriedades internas do objeto ainda podem ser modificadas. O mesmo vale para arrays:

~~~javascript
const numeros = [1, 2, 3];
numeros.push(4); // Isso é permitido
console.log(numeros); // [1, 2, 3, 4]
~~~

Aqui, eles não podem reatribuir um novo array à variável `numeros`, mas podem alterar seu conteúdo.

### 4. **Reatribuição**

A **reatribuição** é uma das maiores diferenças entre `let` e `const`. Eles podem reatribuir valores a uma variável declarada com `let`:

~~~javascript
let idade = 30;
idade = 31; // Isso é permitido
~~~

Porém, não podem fazer isso com `const`:

~~~javascript
const idade = 30;
idade = 31; // TypeError: Assignment to constant variable
~~~

### 5. **Redeclaração**

Outro ponto importante é que, assim como `let`, **`const` não permite a redeclaração de variáveis** dentro do mesmo escopo. Isso impede que a mesma variável seja declarada mais de uma vez no mesmo bloco de código, reduzindo a chance de erros por sobreposição de variáveis.

~~~javascript
const nome = 'Maria';
const nome = 'João'; // SyntaxError: Identifier 'nome' has already been declared
~~~

O mesmo ocorre com `let`:

~~~javascript
let nome = 'Maria';
let nome = 'João'; // SyntaxError: Identifier 'nome' has already been declared
~~~

Esse comportamento é diferente do `var`, que permite a redeclaração no mesmo escopo, o que pode causar problemas em códigos maiores.

## Quando usar `const` e quando usar `let`?

### 1. **Uso de `const` para valores constantes**

A regra geral para a maioria dos casos é: **usar `const` sempre que possível**. O `const` deve ser utilizado quando os valores não precisam ser reatribuídos, garantindo que o código seja mais previsível e seguro. Isso é especialmente útil em situações em que é necessário garantir que o valor de uma variável não será alterado acidentalmente.

Exemplos comuns de uso de `const`:

- Valores que nunca mudam, como pi (`const pi = 3.1416;`).
- Funções, já que funções são frequentemente atribuídas a variáveis que não precisam ser reatribuídas:
  ~~~javascript
  const somar = (a, b) => a + b;
  ~~~
- Arrays ou objetos cujos conteúdos serão modificados, mas cuja referência precisa permanecer constante:
  ~~~javascript
  const cores = ['azul', 'vermelho', 'verde'];
  cores.push('amarelo'); // Isso é permitido
  ~~~

### 2. **Uso de `let` para valores que mudam**

Por outro lado, eles devem utilizar `let` quando esperam que o valor de uma variável mude ao longo do tempo ou em resposta a diferentes condições no código.

Exemplos comuns de uso de `let`:

- Contadores em loops:
  ~~~javascript
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  ~~~
- Variáveis que mudam em função de interações do usuário ou ao longo do fluxo do programa:
  ~~~javascript
  let resultado = 0;
  resultado = calcularResultado();
  ~~~

### 3. **Prática recomendada: `const` por padrão**

Na prática, recomenda-se que eles **usem `const` por padrão**, pois isso garante que os valores não sejam reatribuídos de forma acidental. Sempre que perceberem que uma variável precisa ser reatribuída, aí sim podem trocar para `let`. Dessa forma, o código fica mais seguro, já que se reduz a chance de erros devido à modificação não intencional de variáveis.

## Curiosidades

- A introdução de `const` e `let` no ECMAScript 6 foi uma tentativa de tornar o código JavaScript mais previsível e fácil de manter. O comportamento de `var`, usado antes de 2015, criava muitos problemas com escopo e elevação, especialmente em grandes aplicações.
- A palavra-chave `const` existe em outras linguagens de programação, como C e C++, onde seu comportamento é semelhante: uma vez atribuído, o valor não pode ser alterado.
- Embora `const` traga a ideia de imutabilidade, essa imutabilidade é apenas na referência da variável, e não necessariamente em seu conteúdo (no caso de objetos e arrays).

O uso de `const` e `let` em JavaScript trouxe mais clareza e segurança ao código, com cada palavra-chave servindo a um propósito específico. Enquanto `let` permite a reatribuição de valores e deve ser usado em casos onde essa flexibilidade é necessária, `const` oferece segurança ao garantir que uma vez atribuído, o valor da variável não mudará. A prática recomendada é usar `const` sempre que possível, reservando `let` apenas para variáveis que realmente precisem ser alteradas. Essa abordagem ajuda a evitar erros e tornar o código mais legível e fácil de manter.

# Colocando o conhecimento em prática

Vamos inicar criando um diretório com um arquivo chamado `index.js`, dentro deste arquivo vamos copiar e colar o exeplo da história realizada na aula passada. Vamos realizar experimentos com o código para observar as saídas de erros ao tentar mudar constantes.

Suponhamos que estamos progrmando em grupo e cada um do grupo esteja digitando uma parte da história, e por algum motivo de descuido ou mau entendimento de um requisito da história, alguem altere o nome do ator um durante a codificação, por exemplo:

~~~javascript
let ator1='João', ator2='Maria';
let idade1=22, idade2=25;
console.log(`
${ator1} e ${ator2}, moravam em uma pequena vila perto de Lancelot, e viviam bem. Até que um dia ${ator1} achou uma trilha de doces e correu para contar a ${ator2}.

- ${ator2}, ${ator2}! Você não vai acreditar achei uma trilha de doces em meio a floresta!
- ${ator1}, você não acha estranho uma trilha de doces em uma floresta?? Em todo o caso por que você vem me dizer isso?

`)

console.log(`
Responde ${ator2}, intrigada com toda esta situação.
${ator1} então diz o seguinte :

- ${ator2}, você não está cansada de apenas comer batatas, e cenouras vindas dos campos de Lancelot? Vamos vai, vamos descobrir onde esta trilha de doces pode nos levar ! Além disso eu já tenho ${idade1} e você ${idade2}. Ninguém irá reclamar se sumirmos por umas duas ou três horinhas.
`);

ator1 = 'José';

console.log(`
${ator2} meio relutante decide então ouvir ${ator1}, e os dois seguem em direção a floresta. Passaram-se anos desde que ambos foram vistos pela última vez. Não se sabe se ${ator1} e ${ator2} encontraram muitos doces e viveram felizes para sempre, ou um pé de feijão que os levaram para a masmorra de um gigante, ou foram comidos por uma bruxa que mora em uma casa apoiada em pés de galinhas. Só se sabe que toda a vila ficou triste sem ambos lá.
`);

console.log(`
Moral da história :

Jamais aceite doce de estranhos, ou saia sem avisar ninguém de onde está indo, pois se algo de bom acontecer as pessoas importantes merecem desfrutar com você. Porém se o pior acontecer essas mesmas podem recorrer a "Lancelot" e irem atrás de te ajudar.
`);
~~~

Ao executarmos o código, perceberemos que ele resultará em um texto desconexo e incoerente do ponto de vista humano (embora não haja erros no console, e o programa será executado normalmente). Esse tipo de erro, mesmo sendo inofensivo em um exemplo fictício, na vida real pode se transformar em um problema sério, como um erro de pagamento em um e-commerce, causando prejuízos tanto para o dono da loja quanto para o cliente.

Porém, se utilizarmos `const` ao declarar os atores e suas idades, e tentarmos modificar essas variáveis durante a execução, o script gerará um erro real(ou seja o script não chegará nem a ser executado). Vamos fazer essa alteração e observar como o código ficaria:

~~~javascript
const ator1='João', ator2='Maria';
const idade1=22, idade2=25;
console.log(`
${ator1} e ${ator2}, moravam em uma pequena vila perto de Lancelot, e viviam bem. Até que um dia ${ator1} achou uma trilha de doces e correu para contar a ${ator2}.

- ${ator2}, ${ator2}! Você não vai acreditar achei uma trilha de doces em meio a floresta!
- ${ator1}, você não acha estranho uma trilha de doces em uma floresta?? Em todo o caso por que você vem me dizer isso?

`)

console.log(`
Responde ${ator2}, intrigada com toda esta situação.
${ator1} então diz o seguinte :

- ${ator2}, você não está cansada de apenas comer batatas, e cenouras vindas dos campos de Lancelot? Vamos vai, vamos descobrir onde esta trilha de doces pode nos levar ! Além disso eu já tenho ${idade1} e você ${idade2}. Ninguém irá reclamar se sumirmos por umas duas ou três horinhas.
`);

ator1 = 'José';

console.log(`
${ator2} meio relutante decide então ouvir ${ator1}, e os dois seguem em direção a floresta. Passaram-se anos desde que ambos foram vistos pela última vez. Não se sabe se ${ator1} e ${ator2} encontraram muitos doces e viveram felizes para sempre, ou um pé de feijão que os levaram para a masmorra de um gigante, ou foram comidos por uma bruxa que mora em uma casa apoiada em pés de galinhas. Só se sabe que toda a vila ficou triste sem ambos lá.
`);

console.log(`
Moral da história :

Jamais aceite doce de estranhos, ou saia sem avisar ninguém de onde está indo, pois se algo de bom acontecer as pessoas importantes merecem desfrutar com você. Porém se o pior acontecer essas mesmas podem recorrer a "Lancelot" e irem atrás de te ajudar.
`);
~~~

### Aprendendo a lidar e entender menssagens de erros

ao executarmos então este código obteremos o seguinte erro :

~~~bash
TypeError: Assignment to constant variable.
    at Object.<anonymous> (caminho/onde/seu/arquivo/se/encontra/arquivo.js:18:7)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
~~~


Vamos destrinchar a mensagem de erro **linha por linha**, explicando cada componente para entender o que está acontecendo no código. Esse tipo de mensagem de erro é comum quando há um problema ao tentar atribuir valores a variáveis em um código JavaScript, especialmente ao trabalhar com `const`. Vamos entender cada parte da mensagem. Resaltando que ***apenas os tópicos 1 e 2 realmente nos interessa*** para o estudo dado que são neles que estão registrados os tipo de erro e onde ele se encontra. os outros tópicos foram adicionados por mera curiosida.

### 1. **`TypeError: Assignment to constant variable.`**

- **`TypeError`**: Esse é o tipo de erro que o JavaScript está lançando. Um `TypeError` ocorre quando o código tenta executar uma operação inválida em um tipo de dado ou valor específico. Nesse caso, o problema é tentar reatribuir um valor a uma constante, o que não é permitido em JavaScript.

- **`Assignment to constant variable.`**: Esta é a descrição do erro. O JavaScript está informando que foi feita uma tentativa de atribuir um novo valor a uma variável que foi declarada com `const`. Como `const` impede que a variável seja reatribuída, essa ação é ilegal, resultando no erro.

### 2. **`at Object.<anonymous> (caminho/onde/seu/arquivo/se/encontra/arquivo.js:18:7)`**

- **`at Object.<anonymous>`**: Isso indica que o erro ocorreu dentro de um bloco de código que não tem um nome específico, ou seja, em um escopo anônimo, como no código principal de um arquivo ou dentro de uma função anônima. Isso é comum quando o erro ocorre fora de uma função nomeada.

- **`(caminho/onde/seu/arquivo/se/encontra/arquivo.js:18:7)`**: Este é o caminho completo onde o arquivo JavaScript está localizado no sistema de arquivos. A parte importante aqui são os números após o nome do arquivo: `18:7`. Esses números indicam **a linha 18** e **a coluna 7**(podendo se alterar dependendo da linha e coluna onde o erro se encontra) do arquivo onde o erro ocorreu. Isso ajuda o programador a identificar exatamente onde no código o problema está.

**Apenas estas duas linhas realmente importam neste início,recomendo a leitura das próximas saídas para os mais curiosos e aqueles que querem se aprofundar. Porém se quiser pular as demais explicações [clique aqui](#resumo)**
---

### 3. **`at Module._compile (node:internal/modules/cjs/loader:1469:14)`**

- **`Module._compile`**: Aqui, o erro está sendo registrado no momento em que o arquivo está sendo compilado pelo Node.js. O Node.js é um ambiente de execução para JavaScript, e o processo de "compilação" se refere à preparação do código para ser executado.

- **`(node:internal/modules/cjs/loader:1469:14)`**: Isso mostra que o erro ocorreu no módulo interno do Node.js responsável por carregar CommonJS (CJS) modules. Os números `1469:14` indicam a **linha 1469** e **coluna 14** no arquivo do sistema interno do Node.js onde o erro foi processado. Isso não costuma ser diretamente relevante para o desenvolvedor, já que o erro foi gerado pelo código do próprio Node.js.

### 4. **`at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)`**

- **`Module._extensions..js`**: Esse trecho está relacionado ao processo de carregamento de extensões de arquivos `.js` no Node.js. Basicamente, o Node está tentando carregar o arquivo JavaScript no formato adequado para execução. Isso faz parte da cadeia de operações que o Node realiza para rodar arquivos `.js`.

- **`(node:internal/modules/cjs/loader:1548:10)`**: Assim como no caso anterior, `1548:10` se refere à linha e coluna no código interno do Node.js, indicando onde o erro foi registrado no contexto do carregamento do arquivo. Esse nível de detalhe também é mais relevante para desenvolvedores do próprio Node.js do que para quem está escrevendo o código JavaScript.

### 5. **`at Module.load (node:internal/modules/cjs/loader:1288:32)`**

- **`Module.load`**: Esse é outro ponto do processo de carregamento do módulo (arquivo JavaScript) no Node.js. O método `load` é responsável por carregar o arquivo em memória para que ele possa ser executado. Aqui, o Node.js está informando que o erro ocorreu enquanto ele tentava carregar o módulo em questão.

- **`(node:internal/modules/cjs/loader:1288:32)`**: Como antes, isso refere-se à linha e coluna no código interno do Node.js onde esse processo de carregamento está acontecendo.

### 6. **`at Module._load (node:internal/modules/cjs/loader:1104:12)`**

- **`Module._load`**: Esse método faz parte do processo de carregamento e resolução de módulos em JavaScript. O Node.js está tentando carregar o módulo (arquivo `.js`) para executar seu conteúdo, mas o erro já foi identificado no processo anterior.

- **`(node:internal/modules/cjs/loader:1104:12)`**: Mais uma vez, isso mostra onde no código interno do Node.js esse processo ocorreu, referindo-se à linha e coluna.

### 7. **`at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)`**

- **`Function.executeUserEntryPoint [as runMain]`**: Esse trecho indica que o Node.js está tentando executar o ponto de entrada do código do usuário. O "ponto de entrada" é o arquivo principal que está sendo executado (por exemplo, o arquivo que você passou como argumento para o Node). O código dentro desse arquivo é o ponto de entrada, e o Node está tentando executá-lo quando o erro ocorre.

- **`(node:internal/modules/run_main:174:12)`**: Aqui, a linha e a coluna no código interno do Node.js são indicadas mais uma vez, mostrando onde o erro foi registrado durante o processo de execução do código.

### 8. **`at node:internal/main/run_main_module:28:49`**

- **`node:internal/main/run_main_module`**: Finalmente, esse trecho mostra que o Node.js está tentando executar o módulo principal do código (`run_main_module`). Esse é o arquivo principal do programa que o desenvolvedor está tentando rodar. O erro foi gerado durante esse processo.

- **`(28:49)`**: Como em todas as outras ocorrências, esses números indicam a linha e a coluna no código interno do Node.js onde o erro foi registrado.

---

##### resumo:

- O erro **TypeError: Assignment to constant variable** indica que o código está tentando atribuir um valor a uma variável que foi declarada com `const`, o que é proibido.
- O erro ocorre na **linha 18, coluna 7** do arquivo **arquivo.js**, o que ajuda o desenvolvedor a localizar exatamente onde o problema está no código.
- As demais linhas da mensagem mostram o fluxo de execução dentro do Node.js e como o erro foi processado internamente, incluindo o processo de carregamento e compilação dos módulos. Essas linhas são mais relevantes para o funcionamento interno do Node.js e fornecem um contexto adicional sobre como o erro foi tratado no ambiente de execução.

Essa análise ajuda-nos então a perceber que estamos alterando o nome do ator um. isso se torna util,pois muitas vezes em base de códigos com centenas, milhares ou milhões de linhas. muitas variaveis serão atribuidas e pricisarão ser mantidas com o mesmo valor durante toda a execução do programa.

Para corrigir a menssagem basta retirarmos a atribuição desnecessária de dentro do código, quando a retirarmos, o código voltará a executar normalmente. Veja o código sem o erro :

~~~javascript
const ator1='João', ator2='Maria';
const idade1=22, idade2=25;
console.log(`
${ator1} e ${ator2}, moravam em uma pequena vila perto de Lancelot, e viviam bem. Até que um dia ${ator1} achou uma trilha de doces e correu para contar a ${ator2}.

- ${ator2}, ${ator2}! Você não vai acreditar achei uma trilha de doces em meio a floresta!
- ${ator1}, você não acha estranho uma trilha de doces em uma floresta?? Em todo o caso por que você vem me dizer isso?

`)

console.log(`
Responde ${ator2}, intrigada com toda esta situação.
${ator1} então diz o seguinte :

- ${ator2}, você não está cansada de apenas comer batatas, e cenouras vindas dos campos de Lancelot? Vamos vai, vamos descobrir onde esta trilha de doces pode nos levar ! Além disso eu já tenho ${idade1} e você ${idade2}. Ninguém irá reclamar se sumirmos por umas duas ou três horinhas.
`);

// perceba que a atribuição erronea foi retirada, e pudemos perceber este erro graças a falha de execução.

console.log(`
${ator2} meio relutante decide então ouvir ${ator1}, e os dois seguem em direção a floresta. Passaram-se anos desde que ambos foram vistos pela última vez. Não se sabe se ${ator1} e ${ator2} encontraram muitos doces e viveram felizes para sempre, ou um pé de feijão que os levaram para a masmorra de um gigante, ou foram comidos por uma bruxa que mora em uma casa apoiada em pés de galinhas. Só se sabe que toda a vila ficou triste sem ambos lá.
`);

console.log(`
Moral da história :

Jamais aceite doce de estranhos, ou saia sem avisar ninguém de onde está indo, pois se algo de bom acontecer as pessoas importantes merecem desfrutar com você. Porém se o pior acontecer essas mesmas podem recorrer a "Lancelot" e irem atrás de te ajudar.
`);
~~~

Pronto, agora que entendemos melhor como funcionam as criações de variaveis utilizando técnicas modernas e altamente recomendadas, e aprendemos a fazer a leitura de uma saída de código de erro, estamos prontos para iniciar um exercício colocando em prática com um uso mais voltado ao mundo real, nossos conhecimentos obtidos até aqui, na próxima etapa iremos conhecer o conceito mais básico de objeto, conhecer superficilamente(teremos uma aula específica paranos aprofundarmos nele) objeto `Date` que serve para fazer calculos de datas, capturar a data atual, etc. E superficialmente (mesma coisa que o objeto anterior) o objeto `Math` que facilita e agiliza a criação de cálculos matemáticos, e criaremos uma lógica básica para calcular o IMC de uma pessoa(algo muito utilizado em aplicativos de saúde e fit). Para isso continue aprendendo, [clique aqui e continue sua leitura!](../Aula_6/readme.md)

