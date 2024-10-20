# Utilizando Template Strings e Conceitos de Concatenação

A apresentação de dados aos usuários deve ser pensada com foco na experiência do usuário, onde a clareza e a personalização são essenciais para uma comunicação eficaz. Explicar adequadamente o dado exibido é uma das melhores maneiras de garantir uma boa experiência. Nesse contexto, as *strings* (cadeias de caracteres) são amplamente usadas para formatar e exibir informações. A manipulação dessas *strings* por meio de concatenação e interpolação permite a criação de saídas dinâmicas e personalizadas.

## **Strings Simples**

Para definir uma string no JavaScript, basta envolver o texto entre aspas simples (`'`), aspas duplas (`"`), ou crases (`` ` ``). As crases, introduzidas no ES6, são conhecidas como *template strings* e oferecem recursos avançados para manipulação de strings, como interpolação de variáveis e suporte a multilinhas. Aqui está um exemplo de cada tipo de string:

~~~javascript
var string1 = "Sou uma string com aspas duplas";
var string2 = 'Sou uma string com aspas simples';
var string3 = `Sou uma string com crases (template string)`;
~~~

## **Strings Compostas e Concatenação**

Ao analisar o exemplo anterior, podemos observar que, caso quiséssemos reutilizar partes das strings, como a frase "*Sou uma string*", teríamos que reescrevê-la várias vezes. Em aplicações mais complexas, isso não seria eficiente, especialmente quando há necessidade de alterar dinamicamente as informações.

A concatenação de strings é uma maneira de resolver esse problema, permitindo combinar várias strings e outros tipos de dados em uma única cadeia de caracteres. Vamos considerar o seguinte exemplo com a soma de dois números:

~~~javascript
var x = 2, y = 3;
var z = x + y;
console.log('A soma de ' + x + ' e ' + y + ' é igual a ' + z + '.');
~~~

Neste código, o símbolo de adição (`+`) é usado tanto como operador matemático para somar os números, quanto como operador de concatenação para unir as strings e as variáveis. O JavaScript detecta automaticamente o contexto em que o operador `+` está sendo utilizado.

Embora eficaz, essa abordagem pode se tornar confusa em programas mais complexos. A necessidade constante de abrir e fechar aspas e utilizar múltiplos operadores de concatenação aumenta a chance de erros, além de tornar o código verboso e difícil de ler.

## **Template Strings e Interpolação**

Para simplificar a concatenação de variáveis e tornar o código mais legível, o JavaScript introduziu as *template strings* no ES6. Com elas, é possível incorporar variáveis diretamente dentro de uma string, utilizando a sintaxe `${variavel}`. Esse método de interpolação facilita a criação de strings dinâmicas e reduz significativamente a verbosidade do código.

Reescrevendo o exemplo anterior com *template strings*, temos:

~~~javascript
var x = 2, y = 3;
var z = x + y;
console.log(`A soma de ${x} e ${y} é igual a ${z}.`);
~~~

**Observação:** O código com *template strings* é mais limpo, legível e reduzido. Além disso, a interpolação minimiza o risco de erros ao trabalhar com variáveis dentro de strings. É importante lembrar que a interpolação só pode ser utilizada em strings envolvidas por crases.

## **Vantagens das Template Strings**

O uso de *template strings* oferece várias vantagens em relação à concatenação tradicional:

1. **Interpolação de Variáveis:** As variáveis podem ser inseridas diretamente na string usando `${}`.
2. **Maior Legibilidade:** O código se torna mais claro e organizado, especialmente em casos de saídas complexas.
3. **Suporte a Multilinhas:** Permite criar strings que se estendem por várias linhas, sem a necessidade de concatenar manualmente as quebras de linha.

Exemplo de uso de *template strings* com multilinhas:

~~~javascript
var nome = "João";
var mensagem = `Olá, ${nome}!
Seja bem-vindo ao nosso sistema.

Atenciosamente,
Equipe de Suporte.`;
console.log(mensagem);
~~~

Veja como o código ficaria se usássemos a concatenação tradicional:

~~~javascript
var nome = "João";
var mensagem = 'Olá, ' + nome + '!\n' +
               'Seja bem-vindo ao nosso sistema.\n\n' +
               'Atenciosamente,\n' +
               'Equipe de Suporte.';
console.log(mensagem);
~~~

O uso de template strings não só simplifica o código, como também melhora a legibilidade, especialmente quando se trata de textos longos ou mensagens formatadas com várias linhas e/ou com váriaveis.

---

## **Criando um Exemplo**

Primeiramente, vamos criar uma pasta chamada `aula_02`. Em seguida, abra o seu editor de código, clique no botão "File", localizado no canto superior esquerdo. No menu de contexto que aparecer, selecione a opção `Open Folder` e abra o diretório `aula_02`.

Feito isso, a pasta será exibida no editor. Caso não a veja, clique na opção "Explorer" ou utilize o atalho `Ctrl+Shift+E`. Isso abrirá uma área que, inicialmente, estará vazia. No entanto, ao passar o mouse sobre essa área, ícones aparecerão na parte superior da tela. Passe o mouse sobre eles e clique no ícone `New File`.

Um arquivo sem nome será criado. Digite `index.js` e pressione Enter para nomeá-lo.

Dentro deste arquivo, criaremos duas variáveis chamadas `nome` e `idade`, e atribuiremos seu nome e sua idade, respectivamente. A variável *nome* será do tipo *string* e *idade* será do tipo *number*. Vamos declará-las na mesma linha, utilizando a seguinte sintaxe: `var nomeDaVariavel = valor`, como [vimos anteriormente](../Aula_1/readme.md#conceitos-básicos-sobre-variaveis-javascript). Veja o exemplo a seguir:

~~~javascript
var nome = 'seu nome', idade = 20;
~~~

Em seguida, adicionaremos o comando para exibir nossos dados no console, utilizando o `console.log`, que já vimos [anteriormente](../Aula_1/readme.md#sobre-o-comando-console-). A frase que será exibida é *"Olá, me chamo nome e tenho idade"*. Para inserir os valores das variáveis na frase, usaremos *template strings*. Adicione o seguinte código:

~~~javascript
console.log(`Olá, me chamo ${nome}, tenho ${idade} anos e estou estudando JavaScript.`);
~~~

Para testar, utilizaremos a extensão **Code Runner**. Para isso, clique no botão que parece uma seta (ou ícone de play) no canto superior direito do editor VSCode. Alternativamente, você pode usar o atalho `Ctrl+Alt+N` ou clicar com o botão direito do mouse e selecionar a opção **Run Code**.

Caso queira testar rodando o programa várias vezes, altere os valores das variáveis, adicione novas variáveis e crie mais saídas de texto. Sinta-se à vontade para experimentar!

---

Agora que compreendemos mais detalhadamente o funcionamento de strings e experimentamos diferentes formas de exibição de texto, podemos avançar para o próximo tópico e explorar um exemplo de código executado em um ambiente web. Na próxima etapa, aprenderemos como vincular nossos scripts a páginas HTML, revisaremos os conceitos fundamentais da web e utilizaremos o console do navegador para visualizar as saídas de texto geradas por nossos códigos.

Essa abordagem permitirá a execução de JavaScript diretamente em um navegador web, o que facilitará a compreensão da interação entre o código e a interface do usuário. Para prosseguir com a leitura e continuar seu aprendizado, [clique aqui e acompanhe a próxima lição](../Aula_3/readme.md).

## **Referências**

* [MDN Web Docs: Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
* [W3Schools: Template Strings](https://www.w3schools.com/js/js_string_templates.asp)
* [JavaScript Info: Strings](https://javascript.info/string)
* [freeCodeCamp: JavaScript Template Literals](https://www.freecodecamp.org/news/javascript-template-literals-and-string-interpolation/)
* [JavaScript ES6 Guide: Template Literals](https://www.javascripttutorial.net/es6/template-literals/)

