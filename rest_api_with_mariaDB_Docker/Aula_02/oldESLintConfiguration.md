# Configuração antiga do ESLint, utilizando Guidelines do Airb&b :

Para realizarmos a configuração antiga do ESLint, vamos abrir nossa pasta de projeto, que no momento deve apenas conter o arquivo `.editorconfig`, realizaremos a configurção dita no [arquivo anterior](./initProject.md), e então iremos criar um arquivo chamado `.eslintrc`.

Então iremos realizar os seguintes passos :

---

### Adicionar dependencias necessárias :

Vamos adicionar as depêndencias padrões do eslint e vamos instalar as dependencias base do airbnb-base, além do eslint-plugin-import. Para isso iremos utilizar o seguinte comando :

```bash
npm i -D eslint eslint-config-airbnb-base eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier
```

---

# Criando o arquivo .eslintrc.js

Então iremos criar nosso arquivo base `.eslintrc.js`, e iremos adicionar o seguinte código a ele :

```javascript
 module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        sourcetype: 'module',
    },
    rules: {
        'no-console': 'off',
    },
 }
```

---

# Adicionando o prettier

Agora iremos adicionar as configurações para o prettier funcionar de forma correta em nosso aquivo :

```javascript
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'prettier' // Adiciona o Prettier para desabilitar regras de formatação conflitantes do ESLint
  ],
  plugins: ['prettier'], // Ativa o plugin do Prettier para exibir erros de formatação
  globals: {
    Atomics: 'readonly',
    sourcetype: 'module'
  },
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error' // Marca erros de formatação como erros no ESLint
  }
};
```

---

Para configurar o `.prettierrc` então iremos seguir o passo a passo do arquivo anterior, para isso [clique aqui](./initProject.md#configurando-arquivo-do-prettier)

