# Criando primeiras configurações da base de nosso código

Caso ainda não tenha instalado as extensões do VSCode, as instale. elas estarão listadas no [arquivo anterior](readme.md#extensões-do-vscode), ou no [readme principal](../../README.md#recomendação-de-configuração-do-vscode-e-projeto-para-melhor-experiência-para-iniciantes-).

## Editor Config

Vamos iniciar criando a nossa pasta do projeto, como este projeto consiste em uma API iremos chamar ela de `backend`. Após a pasta ser criada, iremos abri-la dentro de nosso Visual Studio Code. e dentro do menu de display de pastas e arquivos iremos clicar com o botão direito do mouse, e selecionar a opção `Generate .editorconfig` (comando habilitado ao instalar a extensão).

Iremos perceber que um arquivo foi criado, ao abrirmos teremos o seguinte código :

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

Agora então devemos adicionar lgumas outras dependências necessárias :
```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
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

### Definindo arquivos a serem ignorados e arquivos que devem ser tratados

O primeiro passo que iremos fazer é declarar que o eslint não deve observar o diretório `node_modules`, e para isso dentro das chaves onde a config `languageOptions` está configurada, iremos adicionar a configuração `ignores`, e ignorar explicitamente a pasta `node_modules`, veja asseguir o arquivo com a mudança realizada, e adicionar as extenções doas arquivos os quais ele deverá ser executado, para isso utilizamos a configuração `files`:

```javascript
    import globals from "globals";
    import pluginJs from "@eslint/js";


    export default [
      {
        languageOptions: { globals: globals.node },
        files: ['**/*.js', '**/*.ts'],
        ignores:['node_modules/', 'dist/', 'build/']
      },
      pluginJs.configs.recommended,
    ];
```

Explicação da adição em detalhes :

- **files: ['\*\*/\*.js', '\*\*/\*.ts'],**: Adiciona maior segurança na conficuração do ESLint, garantindo que ele seja executado apenas nos arquivos com as extensões `.js` ou `.ts`, assim garantindo uma consistência de verificação de lint na API.

- **ignores:['node_modules/']**: melhora a configuração do ESLint, garantindo que ele ignore a pasta `node_modules`, todas as pastas e arquivos que precisam ser ignorados devem ser declarados aqui, no padrão de projeto que estamos seguindo mesmo pastas redundantes como a `dist`, a `build` e o proprio `node_modules`, com o objetivo de garantir que os arquivoos não sejam analizados pelo ESLint.

---
### Definindo regras de Linting

Todas as regras a seguir forma baseadas no guideline da **Airb&b**, por conta da API do ***ESLint*** ter sido atualizada e ainda o guideline não ser 100% compativel com o ESLint novo, tivemos que hardcodar as regras, e adaptá-las par nosso projeto. No momento em que a guideline estiver 100% integrada a nova API disponibilizarei um arquivo ensinando a configurá-la de maneira mais simples e integral. Enquanto isso copie e cole dentro do arquivo as configurações definidas.

Para ver como se faz uma configuração antiga entre aqui :

- [Configuração antiga](oldESLintConfiguration.md)

Agora então devemos adicionar alguns conjuntos de regras que nosso código deverá seguir, para isso iremos adicionar um novo bloco de configuração, e adicionar as seguintes regras que estarão presentes no bloco `rules`:

```javascript
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import eslintPluginImport from 'eslint-plugin-import';



    export default [
      {
        languageOptions: { globals: globals.node },
        files: ['**/*.js', '**/*.ts'],
        ignores:['node_modules/', 'dist/', 'build/']
      },
      pluginJs.configs.recommended,
      {
		plugins: { import: eslintPluginImport },
        rules: {
			'no-cond-assign': 'off', // ESLint recommended
			'no-irregular-whitespace': 'error', // ESLint recommended
			'no-unexpected-multiline': 'error', // ESLint recommended

			// Best Practices
			curly: ['error', 'multi-line'],
			'guard-for-in': 'error',
			'no-caller': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-invalid-this': 'error',
			'no-multi-spaces': 'error',
			'no-new-wrappers': 'error',
			'no-throw-literal': 'error', // ESLint recommended
			'no-with': 'error',
			'prefer-promise-reject-errors': 'error',
			'no-unused-vars': ['error', { args: 'none' }], // ESLint recommended

			// Stylistic Issues
			'array-bracket-spacing': ['error', 'never'],
			'block-spacing': ['error', 'never'],
			'brace-style': 'error',
			camelcase: ['error', { properties: 'never' }],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-spacing': 'error',
			'comma-style': 'error',
			'computed-property-spacing': 'error',
			'eol-last': 'error',
			'func-call-spacing': 'error',
			indent: [
	            'error',
	            'tab',
	            {
	            	CallExpression: {
	            		arguments: 1, // Indentação de argumentos em relação à chamada de função usando tab.
	            	},
	            	FunctionDeclaration: {
	            		body: 1, // Indentação do corpo da função.
	            		parameters: 1, // Indentação dos parâmetros.
	            	},
	            	FunctionExpression: {
	            		body: 1, // Indentação do corpo da função de expressão.
	            		parameters: 1, // Indentação dos parâmetros.
	            	},
	            	MemberExpression: 1, // Indentação de expressões de membro.
	            	ObjectExpression: 1, // Indentação de expressões de objeto.
	            	SwitchCase: 1, // Indentação de casos em switch.
	            	ignoredNodes: ['ConditionalExpression'], // Ignorar indentação para expressões condicionais.
	            },
            ],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'linebreak-style': 'error',
            'max-len': [
            	'error',
            	{
            		code: 80, // Alinha com o printWidth do Prettier.
            		tabWidth: 4, // Consistente com o uso de tabs no EditorConfig.
            		ignoreUrls: true, // Ignora URLs longos.
            		ignorePattern: 'goog.(module|require)', // Ignora padrões específicos como "goog.module" e "goog.require".
            		ignoreComments: true, // Ignora comprimento de linha em comentários.
            		ignoreTrailingComments: true, // Ignora comentários após código.
            		ignoreStrings: true, // Ignora comprimento em strings.
            		ignoreTemplateLiterals: true, // Ignora comprimento em literais de template.
            		ignoreRegExpLiterals: true, // Ignora comprimento em expressões regulares.
            	},
            ],
			'new-cap': 'error',
			'no-array-constructor': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multiple-empty-lines': ['error', { max: 2 }],
			'no-new-object': 'error',
			'no-tabs': 'error',
			'no-trailing-spaces': 'error',
			'object-curly-spacing': 'error',
			'one-var': [
				'error',
				{
					var: 'never',
					let: 'never',
					const: 'never',
				},
			],
			'operator-linebreak': ['error', 'after'],
			'padded-blocks': ['error', 'never'],
			'quote-props': ['error', 'consistent'],
			quotes: ['error', 'single', { allowTemplateLiterals: true }],
			semi: 'error',
			'semi-spacing': 'error',
			'space-before-blocks': 'error',
			'space-before-function-paren': [
				'error',
				{
					asyncArrow: 'always',
					anonymous: 'never',
					named: 'never',
				},
			],
			'spaced-comment': ['error', 'always'],
			'switch-colon-spacing': 'error',

			// ECMAScript 6
			'arrow-parens': ['error', 'always'],
			'constructor-super': 'error', // ESLint recommended
			'generator-star-spacing': ['error', 'after'],
			'no-new-symbol': 'error', // ESLint recommended
			'no-this-before-super': 'error', // ESLint recommended
			'no-var': 'error',
			'prefer-const': ['error', { destructuring: 'all' }],
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'rest-spread-spacing': 'error',
			'yield-star-spacing': ['error', 'after'],
			'import/no-commonjs': 'error',
		},
      }
    ];
```

-  **import eslintPluginImport from 'eslint-plugin-import'**: Importa o pacote `eslint-plugin-import`, que fornece regras adicionais para o **ESLint** relacionadas ao uso de importações e exportações de módulos. O objetivo é garantir boas práticas na organização e estruturação dos imports, como verificar a ordem correta de imports, evitar dependências não resolvidas e forçar o uso de **ES Modules**. Isso ajuda a manter o código mais organizado e facilita a detecção de problemas relacionados à importação de módulos.

- **plugins: { import: eslintPluginImport },**: Adiciona o `eslint-plugin-import` como um plugin no **ESLint**. Isso permite que o `eslint-plugin-import` seja integrado ao processo de linting, aplicando regras relacionadas ao uso de importações e exportações de módulos, como evitar o uso de `require()` e `module.exports`, e forçar o uso de **ES Modules** com `import` e `export`.

Aqui está a explicação para cada uma das regras de ESLint:

#### Regras recomendadas pelo ESLint:
1. **`'no-cond-assign': 'off'`**: Desativa a verificação de atribuições acidentais dentro de expressões condicionais.
2. **`'no-irregular-whitespace': 'error'`**: Impede o uso de espaços em branco irregulares em qualquer lugar do código.
3. **`'no-unexpected-multiline': 'error'`**: Evita erros causados por quebras de linha inesperadas.

#### Boas práticas:
4. **`'curly': ['error', 'multi-line']`**: Exige o uso de chaves em blocos, exceto quando são blocos de uma linha.
5. **`'guard-for-in': 'error'`**: Exige que se use uma verificação com `hasOwnProperty` dentro de loops `for-in` para evitar iteração em propriedades herdadas.
6. **`'no-caller': 'error'`**: Proíbe o uso de `arguments.caller` e `arguments.callee`, que são funções descontinuadas e inseguras.
7. **`'no-extend-native': 'error'`**: Impede a extensão de objetos nativos como `Array` ou `Object` para evitar conflitos com futuros padrões ECMAScript.
8. **`'no-extra-bind': 'error'`**: Proíbe o uso desnecessário da função `bind()`.
9. **`'no-invalid-this': 'error'`**: Evita o uso inválido de `this` fora de classes ou contextos válidos.
10. **`'no-multi-spaces': 'error'`**: Proíbe o uso de múltiplos espaços, exceto quando alinhando elementos de uma lista.
11. **`'no-new-wrappers': 'error'`**: Proíbe o uso de wrappers de tipos primitivos (`new String()`, `new Number()`, etc.).
12. **`'no-throw-literal': 'error'`**: Evita lançar valores literais como exceções, exigindo o uso de objetos `Error`.
13. **`'no-with': 'error'`**: Proíbe o uso de blocos `with`, que são descontinuados.
14. **`'prefer-promise-reject-errors': 'error'`**: Exige que sejam usados objetos `Error` ao rejeitar uma Promise.
15. **`'no-unused-vars': ['error', { args: 'none' }]`**: Impede a existência de variáveis declaradas mas não utilizadas, ignorando os argumentos de funções.

#### Questões estilísticas:
16. **`'array-bracket-spacing': ['error', 'never']`**: Proíbe espaços dentro de colchetes de arrays.
17. **`'block-spacing': ['error', 'never']`**: Proíbe espaços dentro de blocos de código (`{}`).
18. **`'brace-style': 'error'`**: Enforça um estilo consistente de chaves (ex. '1TBS').
19. **`'camelcase': ['error', { properties: 'never' }]`**: Enforce o uso de camelCase para variáveis e propriedades, com exceção de propriedades de objetos.
20. **`'comma-dangle': ['error', 'always-multiline']`**: Exige vírgula pendente em listas que ocupam múltiplas linhas.
21. **`'comma-spacing': 'error'`**: Exige espaços corretos antes e depois de vírgulas.
22. **`'comma-style': 'error'`**: Exige que a vírgula fique ao final da linha.
23. **`'computed-property-spacing': 'error'`**: Proíbe espaços ao redor de propriedades computadas em objetos (`obj[ 'key' ]`).
24. **`'eol-last': 'error'`**: Exige que haja uma linha em branco ao final de arquivos.
25. **`'func-call-spacing': 'error'`**: Proíbe espaços entre o nome da função e os parênteses da chamada.
26. **`'indent': ['error', tab]`**: Enforça indentação de tabulação, com regras específicas para expressões e declarações.
27. **`'key-spacing': 'error'`**: Exige espaçamento consistente entre chaves e valores em objetos.
28. **`'keyword-spacing': 'error'`**: Exige espaços ao redor de palavras-chave (ex: `if`, `else`).
29. **`'linebreak-style': 'error'`**: Enforça um estilo de quebra de linha consistente (ex: LF ou CRLF).
30. **`'max-len': ['error', { code: 80 }]`**: Limita o comprimento das linhas de código a 80 caracteres, com exceções para URLs e padrões específicos.
31. **`'new-cap': 'error'`**: Exige que construtores de classes sejam chamados com a primeira letra maiúscula.
32. **`'no-array-constructor': 'error'`**: Proíbe o uso de `Array()` para criar arrays, prefira usar colchetes `[]`.
33. **`'no-mixed-spaces-and-tabs': 'error'`**: Proíbe a mistura de espaços e tabulações para indentação.
34. **`'no-multiple-empty-lines': ['error', { max: 2 }]`**: Limita o número de linhas vazias consecutivas a 2.
35. **`'no-new-object': 'error'`**: Proíbe o uso de `new Object()` para criar objetos.
36. **`'no-tabs': 'error'`**: Proíbe o uso de tabulações no código.
37. **`'no-trailing-spaces': 'error'`**: Proíbe espaços em branco no final de linhas.
38. **`'object-curly-spacing': 'error'`**: Exige espaços consistentes dentro de chaves de objetos.
39. **`'one-var': ['error', { var: 'never', let: 'never', const: 'never' }]`**: Proíbe a declaração de múltiplas variáveis na mesma linha.
40. **`'operator-linebreak': ['error', 'after']`**: Exige que operadores fiquem ao final de uma linha, não no início da seguinte.
41. **`'padded-blocks': ['error', 'never']`**: Proíbe o uso de espaços vazios dentro de blocos de código.
42. **`'quote-props': ['error', 'consistent']`**: Exige que as aspas ao redor de propriedades sejam consistentes em objetos.
43. **`'quotes': ['error', 'single']`**: Exige o uso de aspas simples, mas permite template literals.
44. **`'semi': 'error'`**: Exige o uso de ponto e vírgula no final de declarações.
45. **`'semi-spacing': 'error'`**: Exige espaçamento correto antes e depois de ponto e vírgula.
46. **`'space-before-blocks': 'error'`**: Exige um espaço antes de blocos de código.
47. **`'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }]**: Controla o uso de espaços antes de parênteses em diferentes tipos de funções.
48. **`'spaced-comment': ['error', 'always']`**: Exige um espaço antes de comentários.
49. **`'switch-colon-spacing': 'error'`**: Exige espaçamento consistente após os dois pontos em instruções `switch`.

#### ECMAScript 6:
50. **`'arrow-parens': ['error', 'always']`**: Exige que arrow functions tenham parênteses ao redor dos parâmetros.
51. **`'constructor-super': 'error'`**: Garante que o construtor de uma subclasse chame `super()`.
52. **`'generator-star-spacing': ['error', 'after']`**: Exige que asteriscos em funções geradoras tenham um espaço depois.
53. **`'no-new-symbol': 'error'`**: Proíbe o uso do operador `new` com `Symbol()`.
54. **`'no-this-before-super': 'error'`**: Proíbe o uso de `this` antes de chamar `super()` em subclasses.
55. **`'no-var': 'error'`**: Proíbe o uso de `var`, preferindo `let` ou `const`.
56. **`'prefer-const': ['error', { destructuring: 'all' }]`**: Sugere o uso de `const` em vez de `let` quando a variável não é reatribuída.
57. **`'prefer-rest-params': 'error'`**: Prefere o uso de parâmetros rest (`...args`) em vez de `arguments`.
58. **`'prefer-spread': 'error'`**: Prefere o uso do operador spread (`...`) em vez de `Function.prototype.apply()`.
59. **`'rest-spread-spacing': 'error'`**: Exige espaçamento consistente ao redor de parâmetros rest e operadores spread.
60. **`'yield-star-spacing': ['error', 'after']`**: Exige um espaço depois do `*` ao usar o `yield*`.
61. **`'import/no-commonjs': 'error'`**: Exige que seja utilizada a forma padrão ECMAScript de importação e exportação

Essas regras ajudam a garantir que seu código siga boas práticas de legibilidade, estilo e uso seguro do código.

---
### Adicionando configurão e integração com prettier

E por fim devemos configurar o prettier, vamos adicionar mais configurações, adicionar o plugin, e a regra para tratar as disconformidades do prettier como erros, e adicionar as configurações  do prettier, veja a seguir :

```javascript
import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		languageOptions: { globals: globals.node },
		files: ['**/*.js', '**/*.ts'],
		ignores: ['node_modules/'],
	},
	pluginJs.configs.recommended,
	{
		plugins: { import: eslintPluginImport },
		rules: {
			'no-cond-assign': 'off', // ESLint recommended
			'no-irregular-whitespace': 'error', // ESLint recommended
			'no-unexpected-multiline': 'error', // ESLint recommended

			// Best Practices
			curly: ['error', 'multi-line'],
			'guard-for-in': 'error',
			'no-caller': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-invalid-this': 'error',
			'no-multi-spaces': 'error',
			'no-new-wrappers': 'error',
			'no-throw-literal': 'error', // ESLint recommended
			'no-with': 'error',
			'prefer-promise-reject-errors': 'error',
			'no-unused-vars': ['error', { args: 'none' }], // ESLint recommended

			// Stylistic Issues
			'array-bracket-spacing': ['error', 'never'],
			'block-spacing': ['error', 'never'],
			'brace-style': 'error',
			camelcase: ['error', { properties: 'never' }],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-spacing': 'error',
			'comma-style': 'error',
			'computed-property-spacing': 'error',
			'eol-last': 'error',
			'func-call-spacing': 'error',
			indent: [
	            'error',
	            'tab',
	            {
	            	CallExpression: {
	            		arguments: 1, // Indentação de argumentos em relação à chamada de função usando tab.
	            	},
	            	FunctionDeclaration: {
	            		body: 1, // Indentação do corpo da função.
	            		parameters: 1, // Indentação dos parâmetros.
	            	},
	            	FunctionExpression: {
	            		body: 1, // Indentação do corpo da função de expressão.
	            		parameters: 1, // Indentação dos parâmetros.
	            	},
	            	MemberExpression: 1, // Indentação de expressões de membro.
	            	ObjectExpression: 1, // Indentação de expressões de objeto.
	            	SwitchCase: 1, // Indentação de casos em switch.
	            	ignoredNodes: ['ConditionalExpression'], // Ignorar indentação para expressões condicionais.
	            },
            ],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'linebreak-style': 'error',
            'max-len': [
            	'error',
            	{
            		code: 80, // Alinha com o printWidth do Prettier.
            		tabWidth: 4, // Consistente com o uso de tabs no EditorConfig.
            		ignoreUrls: true, // Ignora URLs longos.
            		ignorePattern: 'goog.(module|require)', // Ignora padrões específicos como "goog.module" e "goog.require".
            		ignoreComments: true, // Ignora comprimento de linha em comentários.
            		ignoreTrailingComments: true, // Ignora comentários após código.
            		ignoreStrings: true, // Ignora comprimento em strings.
            		ignoreTemplateLiterals: true, // Ignora comprimento em literais de template.
            		ignoreRegExpLiterals: true, // Ignora comprimento em expressões regulares.
            	},
            ],
			'new-cap': 'error',
			'no-array-constructor': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multiple-empty-lines': ['error', { max: 2 }],
			'no-new-object': 'error',
			'no-tabs': 'error',
			'no-trailing-spaces': 'error',
			'object-curly-spacing': 'error',
			'one-var': [
				'error',
				{
					var: 'never',
					let: 'never',
					const: 'never',
				},
			],
			'operator-linebreak': ['error', 'after'],
			'padded-blocks': ['error', 'never'],
			'quote-props': ['error', 'consistent'],
			quotes: ['error', 'single', { allowTemplateLiterals: true }],
			semi: 'error',
			'semi-spacing': 'error',
			'space-before-blocks': 'error',
			'space-before-function-paren': [
				'error',
				{
					asyncArrow: 'always',
					anonymous: 'never',
					named: 'never',
				},
			],
			'spaced-comment': ['error', 'always'],
			'switch-colon-spacing': 'error',

			// ECMAScript 6
			'arrow-parens': ['error', 'always'],
			'constructor-super': 'error', // ESLint recommended
			'generator-star-spacing': ['error', 'after'],
			'no-new-symbol': 'error', // ESLint recommended
			'no-this-before-super': 'error', // ESLint recommended
			'no-var': 'error',
			'prefer-const': ['error', { destructuring: 'all' }],
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'rest-spread-spacing': 'error',
			'yield-star-spacing': ['error', 'after'],
			'import/no-commonjs': 'error',
		},
	},
	{
		plugins: { prettier: eslintPluginPrettier },
		rules: {
			'prettier/prettier': 'error',
		},
	},
	prettier,
];
```

- **import prettier from 'eslint-config-prettier'**: Importa o pacote `eslint-config-prettier`, que desativa regras de formatação do **ESLint** que poderiam entrar em conflito com o **Prettier**. O objetivo é garantir que o **Prettier** seja responsável pela formatação, enquanto o **ESLint** foca em outras regras de qualidade de código. Isso ajuda a evitar conflitos entre as ferramentas e mantém o código formatado de acordo com as regras do Prettier.

- **import eslintPluginPrettier from 'eslint-plugin-prettier'**: Importa o pacote `eslint-plugin-prettier`, que integra o **Prettier** diretamente ao **ESLint** como uma regra de linting. Isso permite que o **Prettier** seja executado como parte do processo de linting, sinalizando erros de formatação como parte dos avisos ou erros do **ESLint**. Dessa forma, você pode garantir que o código siga as regras de formatação definidas pelo **Prettier** e ao mesmo tempo manter um fluxo de trabalho unificado, sem a necessidade de rodar o **Prettier** separadamente.

- **plugins: { prettier: eslintPluginPrettier },**: Adiciona o **Prettier** como um plugin no **ESLint**. Isso permite que o **Prettier** seja integrado ao processo de linting, aplicando regras de formatação automaticamente, e tornando o Prettier uma parte ativa na verificação de estilo e formatação de código.

- **rules: { 'prettier/prettier': 'error' }**: Configura uma regra específica do **Prettier** para que qualquer violação das regras de formatação seja tratada como um erro. Isso significa que se o código não estiver formatado conforme as regras do Prettier, o **ESLint** gerará um erro, exigindo que o problema seja corrigido.

- **prettier**: Importa a configuração de **`eslint-config-prettier`**. Como explicado anteriormente, isso desativa regras do ESLint que poderiam conflitar com o Prettier, garantindo que o Prettier seja o responsável pela formatação do código e que o ESLint não interfira nesse processo.

---
### Configurando arquivo do prettier

Agora devemos configurar o Prettier, para isso na raíz de nosso projeto iremos criar um arquivo com o nome de **`.prettierrc`**, e adicionaremos as seguintes configurações:

*Observe que só estamos aplicando mais estilos de formatação, não mexeremos em configurações que podem conflitar com o `.editorconfig`*
```json
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "arrowParens": "always"
}
```

Vamos para a explicação de cada uma das configurações :

- **"printWidth": 80**: Airbnb recomenda 100 colunas mas como visto iremos deixar em 80 colunas como comprimento máximo de linha.

- **"singleQuote": true,**: Preferência por aspas simples, conforme o estilo Airbnb.

- **"trailingComma": "all",**: Usar vírgulas penduradas em listas, arrays, objetos e funções.

- **"bracketSpacing": true,**: Espaçamento entre chaves em objetos: { foo: bar }.

- **"semi": true,**: Adiciona ponto e vírgula ao final das declarações

- **"arrowParens": "always"**: Coloca parênteses em torno de parâmetros únicos de arrow functions

---

### Integrando com o editor de código :

Por fim devemos adicionar as configurações em nosso Editor de código, para isso clique na engrenagem e abra as configurações do Visual Studio code, então no canto superior direito clique em **Open Sttings (JSON)**, dentro de setting devemos então realizar algumas adições, veja a seguir :

**OBS : Caso seu settings.json já tiver o atributo "editor.codeActionsOnSave", apenas adicione a opção do eslint dentro dele.**
```json
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always",
        "source.fixAll": "always"
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
```

---

### Para aqules que forem subir o repo no git :

Caso você for subir um repositório no **github**, contendo as configurações realizadas nesta etapa, basta adicionar um arquivo `.gitignore` na raíz de seu projeto. Para gera-lo basta ir no [site da Toptal](https://www.toptal.com/developers/gitignore), digitar Node na barra de geração, e enviar, assim você terá já uma configuração pré definida que será mais do que suficiente para a API que criada nesta etapa do curso.

---

Agora que já temos a base para iniciar nosso projeto de forma padronizada e compreendemos um pouco sobre harmonização de códigos e Linting estamos prontos para dar o próximo passo. Iremos comprender melhor na próxima aula o nodemon e suas capacidades para além de reiniciar o servidor de forma automática e entenderemos mais sobre a ferramenta Sucrase, uma ferramenta que converte código ES6+ em ES5 rapidamente. Quando sentir-se a vontade vá para o [próximo passo, continue sua leitura!](../Aula_03/Readme.md)

