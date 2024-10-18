# Implementando as ferramentas :

Após a [introdução as ferramentas](./Readme.md), vamos instala-las em nosso projeto e configura-las, para isso devemos entrar na pasta raíz, e no terminal instalar as dependências necessárias, então iremos executar o seguinte comando no terminal para baixar os pacotes necessários :

```bash
npm i -D nodemon sucrase
```

---

Depois do processo de instalação ser concluído, ainda na ráiz de nosso projeto iremos criar um arquivo chamado `nodemon.json`, e dentro deste arquivo iremos adicionar as configurações necessárias para que o **sucrase** seja utilizado ao **nodemon** detectar mudanças na base de nosso código, e reiniciar o servidor. Para isso iremos escrever a seguinte configuração :

```json
{
    "execMap":{
        "js": "node -r sucrase/register"
    }
}
```

Vamos entender de forma granular o que foi definido aqui, veja:

1. **`execMap`**:
O campo `execMap` é uma configuração específica do Nodemon, usada para indicar como ele deve executar os arquivos com determinadas extensões. Isto se torna útil poi necessitamos de um ferramenta adicional para transpilar ou modificar o código fonte antes de executá-lo, permitindo que usemos EcmaScript sem grandes implicações. No caso da adição realizada, o Nodemon vai utilizar a configuração `execMap` para garantir que, ao executar arquivos JavaScript (`.js`), o **Sucrase**(uma ferramenta de transformação) seja ativado antes da execução dos arquivos JavaScript.

2. **`"js": "node -r sucrase/register"`**:
Essa configuração diz que, para arquivos com a extensão `.js`, o **Nodemon** deve usar o comando `node -r sucrase/register` para executá-los. Aqui está o que cada parte desse comando significa:

- **`node`**: Este é o comando que invoca o runtime do Node.js, usado para executar arquivos JavaScript de maneira backend.

- **`-r`**: Esse argumento (`-r` ou `--require`) é uma opção que permite que você "registre" um módulo antes de iniciar a execução do arquivo JavaScript. Esse módulo é carregado automaticamente assim que o Node.js é iniciado. Para comprender melhor este argumento [clique aqui](aboutRegistreInNode.md)

- **`sucrase/register`**: Este é o módulo que será registrado no Node.js antes da execução do código. No nosso caso o **Sucrase** que ficará responsavel por realizar a transpilação para JavaScript es5.

    - Lembre que essa configurãoção permite que utilizemos sintaxes mais modernas (como JSX ou TypeScript) sem precisar compilar previamente o código.

    - O **`register`** carrega o Sucrase de maneira dinâmica, permitindo a transpiração do código no momento da execução.


Ao usar essa configuração com **Nodemon** e **Sucrase**, ganhamos:
- **Desempenho rápido** (transpilação em tempo real).
- **Facilidade no desenvolvimento**, sem a necessidade de pré-compilar os arquivos antes de rodá-los.
- **Automatização** da reinicialização do servidor com Nodemon, que detecta alterações nos arquivos monitorados.

---

Após realizar esta configuração devemos abrir o nosso `package.json` e então adicionar o script  de desenvolvimento que chamaremos de `dev`, e ficará responsável por iniciar a nossa aplicação em modo de desenvolvimento. Dentro do bloco de declaração de scripts então, devermos adicionar o seguinte:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
```

---

Vamos testar se tudo ocorreu da maneira esperada. Para isso iremos já criar dois arquivos que serão utilizados dentro de nosso projeto, chamados de `app.js` e `server.js`. Dentro deles iremos adicionar um texto temporário e supersticioso paratestar sua configuração.

Agora para vizualizar as mudanças sendo realizadas devemos então executar o script que criamos, para isso vamos realizar o seguinte comando no terminal:

```bash
npm run dev
```

A saída será a seguinte :
```
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node -r sucrase/register server.js`

```

Dentro de `app.js` adicione o seguinte:

```javascript
    export default () =>{
        console.log('Hello World!');
    }
```

E dentro de server.js adicione:

```javascript
import sayHello from './app.js';
sayHello();
```

Se tudo foi configurado corretamente você verá o servidor sendo atualizado e a menssagem `Hello World!` aparecerá. Se modificarmos a menssagem do `console.log`, ela deve aparecer sendo modificada dentro do terminal.

Para parar o servidor utilizamos o mesmo comando habitual `ctrl+c`.

---

Agora que já (são links para as aulas anteriore):

- **[Entendemos um pouco sobre o projeto e instalamos as ferramentas necessárias](../Aula_01/readme.md).**
- **[Padronizamos nosso estilo de código, e garantimos um linter](../Aula_02/readme.md).**
- **[E Adicionamos ferramentas para agilizar nosso processo de desenvolvimento](Readme.md).**

Está na hora de começarmos a estruturar realmente nosso projeto, já adicionamos dois arquivos crucias para a nossa arquitetura, o `app.js` e o `server.js`, agora está na hora de instalarmos algumas outras dependências e estruturar a arquitetura de nossa API, para isso siga para o [próximo passo, continue sua leitura!](../Aula_04/readme.md)

