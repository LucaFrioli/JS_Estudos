# Utilizando teamplate strings e conceitos de concatenação :

Para apresentar dados para os usuários devemos levar em considerção a sua experiência, e uma explicação do dado apresentado é considerado uma ótima maneira de atingir o mínimo esperado desta experiência. Para isso utilizamos as Strings(cadeias de caracteres) na maior parte das saídas de dados, nas quais podemos manipular via concatenação, ou seja adicionando várias strings e outros tipos de dados uma atrás da outra formando uma unica cadeia de caracteres.

**Strings simples :**

Para definir uma string, basta envolver um texto entre aspas simples `''`, aspas duplas `""`, ou  hífens ` `` `*(este modo de declarar uma string foi criado posteriormente, e é chamado de teamplate string)*. Veja a seguir um exeplo :

~~~javascript
var string1 = "Sou uma string em aspas duplas";
var string2 = 'Sou uma string em aspas simples';
var string3 = `Sou uma string em hífens`;
~~~

**Strings compostas :**

Ao analizar o exeplo anterior percebemos que dessa maneira toda vez que devemos apresentar um dado referente a como ela foi declarada devemos reescrever a frase ***Sou uma string em***. Pensando em *esclabilidade* de um programa, presebe-se que não é uma maneira produtiva de apresentar dados. Então utilizariamos o conceito de concatenação.

Para entender mais a fundo este conceito, vamos analisar o problema proposto na aula passada, a soma de dois numeros. Sedo `x = 2`, `y = 3` e `z = x + y`, ao demonstrar o valor de `z` queremos apresentar a seguinte frase para o usuáario ***A soma de 2 e 3 é igual a 5.***. Agora imagine que `x` e `y` podem se tornar diversos números ao longo do fluxo do programa, concorda que não seria produtivo escrever uma frase para cada tipo de sáida que poderia ocorrer? É por isso que usamos o conceito de concatenação.

O conceito de concatenar strings auxilia a criar saídas cada vez mais complexas, descritivas eprincipalmente mais flexiveis. Como o javascript tem tipagem dinâmica ele consegue identificar em uma atribuição automaticamente se o dado é uma string com concatenação, basta utilizar o sinal de atribuição `+` entre uma varival qualquer e uma string. Veja a seguir um exeplo tomando como base a soma  de `x` e `y`:

~~~javascript
var x = 5, y = 10;
var z = x + y;
//note que vamos utilizar o modo mais comum de concatenação a seguir :
console.log('A soma de '+x+' e '+y+' é igual a '+z+'.');
~~~
* *Obs: note que utilizamos o simbolo de mais, de duas maneiras diferentes dentro deste código, o javascript já percebeu automaticamente que `x` e `y` já eram números então interprtou o `+` como um operador matemático, e quando houve a criação da frase, o javascript percebeu que haviam strings adjacentes ao operador, e interpretou o `+` como o sinal de concatenação.*

Ao ler a observação percebe-se que a concatenação tradicional de strings pode ser verbosa e confusa, especialmente para iniciantes ou após longas horas de trabalho, e isso se deve a esta abordagem requerer muitos operadores de concatenação e abertura/fechamento de strings, e misturar operadores de atribuição e concatenação, aumentando o risco de erros.

Para resolver isso, e obter códigos mais limpos, foi adicionado dentro do ES6 o modo de declaração e escrita de strings chamada **teamplate string** que oferece uma maneira mais moderna de trabalhar com as strings. O texto fica envolto por hifens ` `` `, e contem vantagens tecnológicas quando se trata de mexer com concatenção de informações e conteúdos. Entre suas vantagens temos :

* **Interpolação de variáveis:** Insira variáveis diretamente na string usando `${}`.
* **Maior legibilidade:** Sintaxe mais clara e organizada.
* **Suporte a multilinhas:** Crie strings complexas com quebras de linha sem concatenação manual.

Vamos retornar ao exeplo anterior e escreve-lo agora com a concatenação interpolada :

~~~javascript
var x = 5, y = 10;
var z = x + y;
console.log(`A soma de ${x} e ${y} é igual a ${z}.`);
~~~
* *OBS : Note como o código ficou mais limpo menor e coeso utilizando este método de concatenação, além disso note que as variaveis interpoladas ficam marcadas de umavmaneira que é bem mais difícil errar ao injeta-las na string. **Importante :** perceba que a interpolação de variaveis só podem ocorrer em strings que estão entre hífens.*


**Referências :**

* [MDN Web Docs: Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
* [W3Schools: Template Strings]()

