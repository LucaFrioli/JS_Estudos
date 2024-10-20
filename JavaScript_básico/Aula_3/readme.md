# Introdução aos Conceitos Básicos da Web

A construção de um site envolve diversas tecnologias que trabalham em conjunto para criar páginas interativas, funcionais e visualmente atraentes. As três principais tecnologias que compõem um site moderno são o **HTML** (HyperText Markup Language), o **CSS** (Cascading Style Sheets) e o **JavaScript**. Cada uma delas desempenha um papel específico no desenvolvimento de um site, e juntas formam a base da web que conhecemos hoje.

## O que é HTML?

O **HTML** (Linguagem de Marcação de Hipertexto) é a estrutura fundamental de qualquer página web. Criada por **Tim Berners-Lee** no final da década de 1980 e lançada oficialmente em **1991**, o HTML define a estrutura do conteúdo de um site. Ele usa "tags" para marcar elementos que compõem a página, como títulos, parágrafos, links, imagens e muito mais.

Um site, em sua essência, é composto por um documento HTML que organiza o conteúdo de forma hierárquica. Cada elemento HTML tem uma função específica. Por exemplo:

- `<h1>` a `<h6>` definem títulos de diferentes níveis de importância.
- `<p>` define um parágrafo.
- `<a>` define um link.
- `<img>` insere uma imagem.

### Estrutura Básica de um Documento HTML

A estrutura básica de um arquivo HTML é simples, mas eficiente. A seguir está um exemplo de como ela se parece:

~~~html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
  </head>
  <body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um exemplo de uma página HTML básica.</p>
  </body>
</html>
~~~

- O `<!DOCTYPE html>` indica ao navegador que este é um documento HTML5.
- A tag `<html>` envolve todo o conteúdo da página.
- A seção `<head>` contém informações meta, como o charset, título da página e configurações de viewport.
- A seção `<body>` contém o conteúdo visível da página, como textos, imagens, links e outros elementos.

## O que é CSS?

Enquanto o HTML define a estrutura de um site, o **CSS** (Cascading Style Sheets) é responsável pela sua aparência visual. Introduzido em **1996** por **Håkon Wium Lie** e pelo **World Wide Web Consortium (W3C)**, o CSS permite estilizar as páginas, controlando a cor, o layout, a tipografia, espaçamentos e outros aspectos visuais de uma página web.

Com o CSS, é possível aplicar estilos a elementos HTML de maneira flexível e eficiente. Por exemplo, com uma única linha de CSS, você pode alterar a cor de todos os parágrafos de uma página:

~~~css
p {
  color: blue;
}
~~~

O CSS segue o conceito de "cascata", o que significa que os estilos são aplicados em uma hierarquia, onde as regras mais específicas podem sobrescrever as regras mais gerais.

## O que é JavaScript?

O **JavaScript** é a terceira peça fundamental na construção de um site moderno. Diferente do HTML e CSS, que são linguagens de marcação e estilo, respectivamente, o JavaScript é uma **linguagem de programação**. Ele foi introduzido em **1995** por **Brendan Eich** e tem como principal função adicionar **interatividade** e **dinamismo** às páginas web.

Com o JavaScript, é possível criar desde simples interações, como uma caixa de alerta ao clicar em um botão, até aplicações complexas, como jogos, sistemas de autenticação ou interfaces gráficas ricas. Ele é executado no navegador do usuário (client-side ou seja frontend), o que permite respostas rápidas a eventos, como cliques de mouse, rolagem da página ou submissão de formulários. Além disso em 2009 a linguagem foi portada para ser usada em servidores (server-side ou seja backend).

## Como HTML, CSS e JavaScript se Relacionam

Essas três tecnologias (HTML, CSS e JavaScript) atuam de forma complementar:

- **HTML** fornece a estrutura básica de uma página.
- **CSS** define a aparência visual dessa estrutura.
- **JavaScript** adiciona interatividade e comportamento dinâmico.

Um exemplo simples pode ser uma página que exibe um botão (HTML), estilizado com cores e margens (CSS), que dispara uma mensagem de alerta quando clicado (JavaScript). Esse trio é o alicerce de tudo o que é visto em uma página web moderna.

## Métodos de Inserção de JavaScript em HTML

Existem diferentes maneiras de incorporar JavaScript em uma página HTML. Elas podem ser categorizadas em duas principais: **in-line** (código diretamente no HTML) e **externo** (arquivo JavaScript separado).

### 1. **JavaScript In-line**

O JavaScript in-line é inserido diretamente no código HTML, dentro da tag `<script>`. Essa abordagem é útil para scripts pequenos ou quando se quer evitar múltiplos arquivos.

Exemplo de JavaScript in-line:

~~~html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Exemplo In-line</title>
  </head>
  <body>
    <h1>Clique no botão para ver uma mensagem</h1>
    <button onclick="alert('Olá!')">Clique aqui</button>
    <script>
      document.write('Este texto foi adicionado pelo JavaScript.');
    </script>
  </body>
</html>
~~~

Aqui, o script que gera o alerta ao clicar no botão está diretamente embutido no HTML. Embora seja fácil de usar, essa técnica não é recomendada para projetos maiores, pois pode dificultar a manutenção e a organização do código.

### 2. **JavaScript em Arquivos Externos**

Uma prática mais comum e recomendada é manter o código JavaScript em arquivos externos. Isso melhora a organização e facilita a reutilização do código em várias páginas. Para vincular um arquivo JavaScript externo, utiliza-se a tag `<script src="caminho-do-arquivo.js"></script>`.

Exemplo de JavaScript em arquivo externo:

~~~html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Exemplo com Arquivo Externo</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Clique no botão para ver uma mensagem</h1>
    <button id="btn">Clique aqui</button>
  </body>
</html>
~~~

E o arquivo `script.js` conteria:

~~~javascript
document.getElementById("btn").onclick = function() {
  alert('Olá, esta mensagem vem de um arquivo externo!');
};
~~~

Esse método é amplamente utilizado, pois permite separar o comportamento do site (JavaScript) de sua estrutura (HTML) e estilo (CSS), resultando em código mais limpo, organizado e fácil de manter.

**OBS: Abordaremos os comandos que foram dados de exeplo um pouco mais a diante.**

## Histórico e Evolução dos Padrões Web

Os padrões da web evoluíram significativamente desde a criação do HTML, CSS e JavaScript. Nos primeiros dias da web, as páginas eram majoritariamente estáticas e pouco interativas. A introdução de CSS e JavaScript foi um divisor de águas, permitindo o desenvolvimento de sites dinâmicos e visualmente atraentes.

- **HTML5**, lançado oficialmente em **2014**, trouxe muitas melhorias para o HTML, incluindo novos elementos semânticos (como `<header>`, `<footer>` e `<section>`), melhor suporte para multimídia (com `<video>` e `<audio>`), e a introdução da API de *local storage*, que permite o armazenamento de dados no navegador.

- O **CSS3** introduziu novos recursos que facilitam a criação de layouts mais complexos, animações, transições, e a possibilidade de usar efeitos gráficos sem a necessidade de imagens externas ou ferramentas de design, como sombras e gradientes.

- O **ECMAScript** (base do JavaScript) continua a evoluir com lançamentos anuais, trazendo novos recursos à linguagem, como as **arrow functions**, **template literals** e **promises**, que facilitam a escrita e manutenção do código.

**HTML**, **CSS** e **JavaScript** formam a base de qualquer página ou aplicação web. Cada uma dessas tecnologias desempenha um papel essencial no desenvolvimento de interfaces ricas e interativas. Entender como elas interagem é crucial para criar sites modernos e eficientes. À medida que a web evolui, essas tecnologias também avançam, possibilitando experiências mais dinâmicas e poderosas para usuários em todo o mundo.

---

# Colocando o conhecimento em prática

Agora que entendemos melhor como a web funciona, vamos realizar nossa primeira conexão entre um arquivo JavaScript e um HTML. Vamos explorar como um arquivo JavaScript pode ser executado tanto no ambiente Node.js, como fizemos nas etapas anteriores, quanto no V8 do navegador.

### Passo 1: Preparação do ambiente
Primeiro, crie um novo diretório e abra-o no seu editor de código, como já fizemos antes. Dentro desta pasta, crie um arquivo HTML chamado `index.html`. Lembre-se de que a extensão do arquivo indica seu tipo: `.html` para HTML, `.css` para CSS e `.js` para JavaScript.

Adicione a estrutura básica de um documento HTML5 como mostrado abaixo:

**Dica:** Se estiver usando o editor recomendado, basta digitar `!` e pressionar **Enter** para gerar a estrutura automaticamente. Não se esqueça de ajustar o valor do atributo `lang` para `pt-br` na tag `<html>`.

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeira Integração</title>
</head>
<body>

</body>
</html>
~~~

### Passo 2: Criação do arquivo JavaScript

Agora, crie uma pasta chamada `js` e, dentro dela, um arquivo chamado `index.js`. Neste arquivo, faremos algumas saídas de dados simples, como demonstrado a seguir:

~~~javascript
console.log('texto 1');
console.log('texto 2');
var x = 20;
console.log(`Olá, tenho ${x} anos`);
~~~

### Passo 3: Execução no Node.js

Para verificar o código JavaScript, você pode rodá-lo no ambiente Node.js usando o **Code Runner**, como fizemos anteriormente. Este método executa o código diretamente no runtime do Node.js.

### Passo 4: Executando no navegador

Agora, vamos ver como carregar e executar esse arquivo JavaScript dentro de uma página web. Para isso, abra o arquivo `index.html` e adicione a tag `<script>` dentro da tag `<body>`, como mostrado abaixo:

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeira Integração</title>
</head>
<body>
    <script src="./js/index.js"></script>
</body>
</html>
~~~

### Entendendo a linha `<script src="./js/index.js"></script>`

Essa linha insere um arquivo JavaScript externo na página HTML. Vamos entender cada parte:

1. **Tag `<script>`**: Utilizada para inserir ou referenciar scripts (geralmente JavaScript) em uma página HTML.

2. **Atributo `src`**: Define o caminho do arquivo JavaScript que será carregado e executado. Aqui, estamos usando o caminho relativo `./js/index.js`, que significa que o navegador procurará o arquivo `index.js` dentro da pasta `js`, localizada no mesmo diretório que o arquivo HTML.

3. **Fechamento da tag `</script>`**: Mesmo que o código JavaScript esteja em um arquivo externo, a tag de fechamento é necessária.

### Passo 5: Visualizando o resultado no navegador

Para ver o resultado no navegador, usaremos o **Live Server**, instalado no início do módulo. No VSCode, clique em **Go Live** no canto inferior direito ou, com o botão direito do mouse, escolha a opção **Open with Live Server**.

O navegador abrirá uma página em branco. Para visualizar a saída do JavaScript, pressione `F12` para abrir as ferramentas de desenvolvedor (dev tools). No painel que se abrir, clique na aba `Console` (geralmente na segunda ou terceira posição no menu superior). Você verá a mesma saída que foi exibida no runtime do Node.js.

Pronto! Agora aprendemos como integrar um arquivo JavaScript com HTML e executá-lo no navegador. E assim damos um passo a diante para começar a desenvolver para web. Na próxima etapa voltaremos nossa atenção em melhorar como definimos nossas variaveis, e começaremos a utilizar padrões mais seguros para declara-las, o que nos permitirá ter mais controle de interação com as posteriores páginas web que criaremos ao longo do curso. Para isso [clique aqui, e continue a aprender!](../Aula_4/readmme.md)
