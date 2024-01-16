# Segunda aula sobre modulos dentro do Node :

No desenvolvimento Node.js, utilizamos `exports` para exportar funções ou objetos, `module.exports` para exportações diretas e condicionamos a exportação com base em lógica específica. Esses conceitos promovem modularidade, reutilização eficiente e facilidade na manutenção do código, agora abordaremos temas que se assemelham com `export default`, e `export` inline para funções anônimas em variaveis, visto no módulo de aulas anterior, e exportações lógicas.


### 1. **Exportação de Módulos Simples:**

O uso mais básico de `exports` é para exportar uma única função ou objeto.

**Exemplo:**
~~~javascript
// arquivo: modulo.js
exports.minhaFuncao = function() {
  console.log('Função executada!');
};
~~~

~~~javascript
// arquivo: main.js
const meuModulo = require('./modulo');
meuModulo.minhaFuncao(); // Saída: Função executada!
~~~
### 2. **Exportação Direta de Função/Objeto:**

Você pode exportar diretamente uma função ou objeto sem utilizar `exports`, ela é similar ao `export default`.

**Exemplo:**
~~~javascript
// arquivo: modulo.js
module.exports = function() { /* ... */ };
~~~

~~~javascript
// arquivo: main.js
const minhaFuncao = require('./modulo');
minhaFuncao();
~~~


## Sobre definição de caminhos :

Abordaremos também caminhos relativos, e aprender a usar este conceito utilizando `exports`/`require`, além de falar sobre um módulo padrão do node.js chamado `path`, com ele as variaveis `__dirname` e `__filename`, respectivamente mostra o caminho absoluto do diretório atual, e o caminho absoluto do diretório atual + nome do arquivo atual :


### 1. **Caminhos Relativos:**

Caminhos relativos referem-se à localização de um arquivo ou diretório em relação ao diretório atual. Eles são especificados sem usar a raiz do sistema de arquivos, mas sim com base na posição do arquivo ou diretório em relação ao ponto de execução. Por exemplo, "./folder/file.txt" indica um caminho relativo para um arquivo chamado file.txt dentro do diretório folder no mesmo nível do diretório atual.

~~~javascript
const modulo = require('./meuModulo'); // Importa um módulo local no mesmo diretório.
const modulo01 = require('./modules/meuModulo2'); // Importa um módulo que está no diretório chamado modules, que se encontra dentro do mesmo diretório do arquivo atual.
const modulo02 = require('../meuModulo3');//retorna um diretorio e chama o arquivo nele.
~~~

### 2. **Utilizando imports com a lib `path`:**

A biblioteca `path` foi desenvolvida para solucionar desafios de compatibilidade relacionados à seleção de caminhos, abordando especificamente questões como o tipo de servidor e a interação com prompts de escolha de diretórios.

~~~javascript
const path = require('path');
console.log(path.resolve(__dirname,'Basics','Peapoles_and_subGrups'));
console.log(path.resolve(__dirname,'..','..','Classes_e_POO','Aula_05'));

const Dog = require(path.resolve(__dirname,'Dog.js'));
~~~

Este código exemplifica a utilização do módulo path no Node.js para manipulação de caminhos de arquivos e diretórios de uma forma mais conceitual, evitando que ocorram erros ao utilizar caminhos relativos, na hora da chamada do arquivo `Dog.js`, garantindo a robustez do código.

O primeiro exemplo demonstra como entrar em uma pasta específica ("Basics/Peapoles_and_subGrups"), enquanto o segundo mostra como retornar entre diretórios ("Classes_e_POO/Aula_05").
