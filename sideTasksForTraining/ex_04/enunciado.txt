**Exercício: Import e Export no ES6 Node Modules**

**Objetivo:** Este exercício tem como objetivo praticar a utilização das diversas formas de importação e exportação de módulos no ES6, e a configuração de um projeto que usa webpack e Babel.

**Instruções:**

1. **Configuração Inicial:**
   - Crie um diretório para o projeto chamado "es6-modules-exercise".
   - Inicie um novo projeto Node.js dentro desse diretório usando `npm init -y`.
   - Instale o Babel como dependência de desenvolvimento: `npm install --save-dev @babel/cli @babel/core @babel/preset-env`.
   - Crie uma estrutura básica de pastas: `src` para o código-fonte e `dist` para o código transpilado.

2. **Módulos:**
   - Crie três módulos no diretório `src`:
     - `mathOperations.js`: Contendo funções de operações matemáticas básicas (soma, subtração, multiplicação, divisão).
     - `stringManipulation.js`: Contendo funções para manipulação de strings (concatenação, inversão).
     - `app.js`: O arquivo principal que utilizará as funções dos módulos anteriores.

3. **Importação e Exportação:**
   - Utilize diferentes formas de importação/exportação nos módulos:
     - `export` e `import` padrão.
     - `export` e `import` com nomes diferentes.
     - `export` e `import` de funções específicas.

4. **Testando no `app.js`:**
   - Importe as funções dos módulos e utilize-as no `app.js` para realizar operações matemáticas e manipulação de strings.

5. **Execução do Código Transpilado:**
   - Crie um script no `package.json` chamado `start` que executa o código transpilado em `dist/app.js`.

**Definição do Webpack:**

1. **Instalação do Webpack:**
   - Instale o webpack e o webpack-cli como dependências de desenvolvimento: `npm install --save-dev webpack webpack-cli`.

2. **Criação do Arquivo de Configuração:**
   - Crie um arquivo chamado `webpack.config.js` na raiz do projeto e configure-o com suas preferências pessoais.
   - Defina a entrada (`entry`) como o seu arquivo principal e a saída (`output`) para o diretório desejado.

3. **Loaders e Plugins (Opcional):**
   - Se desejar, configure loaders para processar diferentes tipos de arquivos (como Babel para transpilar código JS) e utilize plugins conforme necessário.

4. **Execução do Webpack:**
   - Adicione um script chamado `build` no `package.json` que execute o webpack com base no seu arquivo de configuração.

**Observação:**
Certifique-se de fornecer instruções claras nos comentários ou em um arquivo README sobre como os scripts devem ser executados e o que esperar como resultado. Encoraje os participantes a experimentarem e personalizarem a configuração conforme desejado.
