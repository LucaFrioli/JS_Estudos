# Criando primeiras configurações da base de nosso código

Caso ainda não tenha instalado as extensões do VSCode, as instale. elas estarão listadas no [arquivo anterior](readme.md#extensões-do-vscode), ou no [readme principal](../../README.md#recomendação-de-configuração-do-vscode-e-projeto-para-melhor-experiência-para-iniciantes-).

## Editor Config

Vamos iniciar criando a nossa pasta do projeto, como este projeto consiste em uma API iremos chamar ela de `backend`. Após a pasta ser criada, iremos abrila dentro de nosso VIsual Studio Code. e dentro do menu de display de pastas e arquivos iremos clicar com o botão direito do mouse, e selecionar a opção `Generate .editorconfig` (comando habilitado ao instalar a extensão).

Iremos perceber que um arquivo foi criado,ao abrirmos teremos o seguinte código :

```bash
    # EditorConfig is awesome: https://EditorConfig.org

    # top-most EditorConfig file
    root = true

    [*]
    indent_style = space
    indent_size = 4
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = false
    insert_final_newline = false
```
Nele iremos começar a realizar algumas mudanças, iniciando por retirar os comentários, que são as linhas que começam com `#`. Após isso iremos mudar o valor do **`ident_style`** para `tab`. No **`end_of_line`** deixaremos atribuido o valor `lf`(deixaremos assim pois a maioria dos servidores do mundo são baseados em UNIX, geralmente sendo servidores com kernel Linux). Na configuração **`trim_trailing_whitespace`** trocaremos o valor para `true`, e o **`insert_final_newline`** também trocaremos para `true`.

Ao realizar estas mudanças o arquivo ficará assim :
```bash
    root = true

    [*]
    indent_style = tab
    indent_size = 4
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
```

**OBS: experimente diferentes tipos de configurações e veja qual melhor se enquadra a sua equipe. Esta configuração específica é baseada em experiencias e preferências pessoais. O end_of_line, recomendo fortemente manter em lf, porém veja se se enquadra com a realidade de trabalho sua ou de sua equipe.**

## Iniciando o projeto e configurando o ESLint

Finalmente vamos iniciar o NodeJS dentro de nossa pasta, e instalar as nossas primeiras dependências, para isso iniciaremos o prjeto node como de costume (caso queira revisar [entre aqui](../../js_node_npm_express_mongoDB/Aula_03/README.md)), então iremos executar o eslint iniciando-o dentro de nosso projeto.

Para executar um pacote, diferentemente do padrão `npm`, utilizamos o prefixo `npx` para saber mais sobre a diferença entre npm e npx [clique aqui](./NpxAndNpm.md). Para realizar a execução utilizamos o seguinte comando :

```bash
    # iniciar o ESLint
    npx eslint --init
```

Isso iniciará o CLI no qual para este porjeto específico iremos utilizar as seguintes configurações :

- **To check syntax and find problems**
- **JavaScript modules (import/export)**
- **None of this** (utilizaremos apenas node, sem utilizar react ou vue)
- **No** (não utilizaremos no momento typescript)
- **Node** (utilize espaço para selecionar o node apenas, caso browser esteja marcado desmarque)
- **yes** (para instalar agora !)
- **npm** (para ser nosso instalador)

Agora iremos adicionar o guideline do AirB&B, para isso devemos executar o seguinte comando dentro de nosso terminal :

```bash
    npx install-peerdeps --dev eslint-config-airbnb-base
```

E então adicionar as dependências do prettier :
```bash
    npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```
---

Então com tudo instalado vamos configurar o ESLint, ao entrar na pasta do porjeto veremos um arquivo chamado `eslint.config.mjs`, com o seguinte conteúdo :

```javascript
    import globals from "globals";
    import pluginJs from "@eslint/js";


    export default [
      {languageOptions: { globals: globals.node }},
      pluginJs.configs.recommended,
    ];
```

Vamos entender então linha a linha do que já está declarado em nosso arquivo :

- **import globals from "globals"**: Importa o pacote `globals`, que contém definições comuns de variáveis globais para diferentes ambientes (como Node.js, browser, etc.). Isso ajuda a configurar as variáveis globais que o **ESLint** deve reconhecer, evitando avisos desnecessários.

- **import pluginJs from "@eslint/js"**: Importa o módulo `@eslint/js`, que contém as configurações e plugins padrão recomendados para o ESLint. Este módulo é a base da configuração ESLint para JavaScript, aplicando boas práticas de linting.

- **export default [**: Indica o inicio das configurações e as exporta para serem utilizadas
  - **{ languageOptions: { globals: globals.node } },**: Define as opções de linguagem que o ESLint deve considerar, incluindo as variáveis globais de Node.js, que foram obtidas do pacote `globals`. Isso informa ao ESLint sobre variáveis como `require`, `module`, e `process`.

  - **pluginJs.configs.recommended,**: Aplica a configuração recomendada do ESLint para JavaScript, que define regras básicas e comuns para garantir a qualidade do código. Isso inclui verificações padrão como detecção de variáveis não utilizadas, erros sintáticos e outras boas práticas de código.
**];** Indica o final das configurações

---

O primeiro passo que iremos fazer é declarar que o eslint não deve observar o diretório `node_modules`, e para isso dentro das chaves onde a config `languageOptions` está configurada, iremos adicionar a configuração `ignorePatterns`, e ignorar explicitamente a pasta `node_modules`, veja asseguir o arquivo com a mudança realizada :

```javascript
    import globals from "globals";
    import pluginJs from "@eslint/js";


    export default [
      {languageOptions: { globals: globals.node }, ignorePatterns:['node_modules/']},
      pluginJs.configs.recommended,
    ];
```

Explicação da adição em detalhes :

- **ignorePatterns:['node_modules/']**: melhora a configuração do ESLint, garantindo que ele ignore a pasta node_modules, todas as pastas e arquivos que precisam ser ignorados devem ser declarados aqui, no padrão de projeto que estamos seguindo mesmo pastas redundantes como a dist, a build e o proprio node_modules, com o objetivo de garantir que os arquivoos não sejam analizados pelo ESLint.

---

Agora então devemos adicionar o conjunto de regras do Airb&b dentro de nosso código, para isso iremos importar as dependencias e adicionar em baixo do conjunto das regras recomendadas, vale ressaltar extamos extendendo as regras :

```javascript
import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";


export default [
  {languageOptions: { globals: globals.node }, ignorePatterns:['node_modules/']},
  pluginJs.configs.recommended,
  airbnbBase
];
```

Aqui está a explicação no mesmo estilo:

- **import airbnbBase from "eslint-config-airbnb-base"**: Importa o pacote `eslint-config-airbnb-base`, que contém as regras de estilo e boas práticas de código definidas pelo guia de estilo do **Airbnb**. Essas regras ajudam a manter a consistência no código e a seguir padrões reconhecidos na comunidade de JavaScript. A configuração base do Airbnb inclui regras para JavaScript moderno e práticas recomendadas, evitando erros comuns e promovendo um código mais limpo.

- **airbnbBase**: Aplica aas configurações recomendadas pelo guia da **Airbnb**.

---

E por fim devemos configurar o prettier, vamos adicionar mais configurações, adicionar o plugin, e a regra para tratar as disconformidades do prettier como erros, e adicionar as configurações  do prettier, veja a seguir :

```javascript
import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import prettier from 'eslint-config-prettier';


export default [
  {
	languageOptions: { globals: globals.node },
  	ignorePatterns:['node_modules/']
  },
  pluginJs.configs.recommended,
  airbnbBase,
  {
	plugins:['prettier'],
	rules:{
		'prettier/prettier' :'error',
	},
  },
  prettier
];
```

- **import prettier from 'eslint-config-prettier'**: Importa o pacote `eslint-config-prettier`, que desativa regras de formatação do **ESLint** que poderiam entrar em conflito com o **Prettier**. O objetivo é garantir que o **Prettier** seja responsável pela formatação, enquanto o **ESLint** foca em outras regras de qualidade de código. Isso ajuda a evitar conflitos entre as ferramentas e mantém o código formatado de acordo com as regras do Prettier.

- **plugins: ['prettier']**: Adiciona o **Prettier** como um plugin no **ESLint**. Isso permite que o **Prettier** seja integrado ao processo de linting, aplicando regras de formatação automaticamente, e tornando o Prettier uma parte ativa na verificação de estilo e formatação de código.

- **rules: { 'prettier/prettier': 'error' }**: Configura uma regra específica do **Prettier** para que qualquer violação das regras de formatação seja tratada como um erro. Isso significa que se o código não estiver formatado conforme as regras do Prettier, o **ESLint** gerará um erro, exigindo que o problema seja corrigido.

- **prettier**: Importa a configuração de **`eslint-config-prettier`**. Como explicado anteriormente, isso desativa regras do ESLint que poderiam conflitar com o Prettier, garantindo que o Prettier seja o responsável pela formatação do código e que o ESLint não interfira nesse processo.

---

Agora devemos configurar o Prettier, para isso na raíz de nosso projeto iremos criar um arquivo com o nome de **`.prettierrc`**, e adicionaremos as seguintes configurações:

*Observe que só estamos aplicando mais estilos de formatação, não mexeremos em configurações que podem conflitar com o `.editorconfig`*
```json
{
  "printWidth": 100, // Airbnb recomenda 100 colunas como comprimento máximo de linha
  "singleQuote": true, // Preferência por aspas simples, conforme o estilo Airbnb
  "trailingComma": "all", // Usar vírgulas penduradas em listas, arrays, objetos e funções
  "bracketSpacing": true, // Espaçamento entre chaves em objetos: { foo: bar }
  "semi": true, // Adiciona ponto e vírgula ao final das declarações
  "arrowParens": "always" // Coloca parênteses em torno de parâmetros únicos de arrow functions
}
```
---

Por fim devemos adicionar as configurações em nosso Editor de código, para isso clique na engrenagem e abra as configurações do Visual Studio code, então no canto superior direito clique em **Open Sttings (JSON)**, dentro de setting devemos então realizar algumas adições, veja a seguir :

**OBS : Caso seu settings.json já tiver o atributo "editor.codeActionsOnSave", apenas adicione a opção do eslint dentro dele.**
```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
```

