# Arquivos estáticos

**Reforço sobre o modelo mvc :**
### MVC (Model-View-Controller):

O padrão MVC é uma arquitetura de software que divide uma aplicação em três componentes principais:

1. **Model (Modelo):** Responsável por lidar com a lógica de negócios e os dados.
2. **View (Visão):** Responsável pela apresentação e interação com o usuário.
3. **Controller (Controlador):** Responsável por intermediar a comunicação entre o modelo e a visão, gerenciando as interações do usuário.

### Arquivos Estáticos e Dinâmicos:

- **Arquivos Dinâmicos (Backend):** Refere-se às partes da aplicação que geram conteúdo de forma dinâmica, como templates de HTML renderizados no servidor, dados de banco de dados, etc.

- **Arquivos Estáticos (Frontend):** São recursos que não mudam dinamicamente, como imagens, folhas de estilo CSS, scripts JavaScript, etc.

### Relação entre Arquivos Estáticos e Dinâmicos:

1. **Arquivos Estáticos:**
   - **Localização:** Armazenados em uma pasta como "public".
   - **Finalidade:** Recursos que não mudam frequentemente, como imagens, folhas de estilo CSS, scripts JavaScript.
   - **Entrega:** Enviados diretamente para o navegador sem processamento adicional no servidor.
   - **Uso Comum:** Melhoram a experiência do usuário, aceleram o carregamento da página e são cacheáveis.

2. **Arquivos Dinâmicos:**
   - **Localização:** Geralmente associados a templates em pastas como "views".
   - **Finalidade:** Conteúdo que pode variar com base em dados do servidor ou interações do usuário.
   - **Entrega:** Processados no servidor e geram HTML dinâmico para ser enviado ao navegador.
   - **Uso Comum:** Páginas da web que exibem dados específicos do usuário, como perfis, resultados de pesquisa, etc.

### Pasta Public:

A pasta "public" é frequentemente usada para armazenar arquivos estáticos em uma aplicação Express. Esses arquivos são disponibilizados diretamente para o navegador, sem a necessidade de processamento no servidor. A estrutura básica do MVC pode incluir:

- **public:** Armazena arquivos estáticos.
- **src:** Contém o código da aplicação.
  - **views:** Armazena os templates dinâmicos.

### Pasta "Public":

A pasta "public" é um local designado para armazenar arquivos estáticos que serão servidos diretamente para o cliente. Por exemplo:

~~~plaintext
    project-root
    |-- src
    |   |-- controllers
    |       |-- homeControllers.js
    |   |-- views
    |       |-- index.ejs
    |-- public
    |   |-- assets
    |       |-- images
    |           |-- logo.png
    |       |-- styles
    |           |-- style.css
    |       |-- scripts
    |           |-- qualquerCoisa.js
    |-- routes.js
    |-- app.js
~~~

- **`public/images`:** Armazena imagens estáticas.
- **`public/styles`:** Contém folhas de estilo CSS.
- **`public/scripts`:** Inclui scripts JavaScript.

### Contextualizando com o Código produzido nesta aula:

No código criado:

~~~javascript
    const express = require('express');
    const path = require('path');
    const app = express();

    const routes = require(path.resolve(__dirname, 'routes.js'));
    const port = 3000;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.resolve(__dirname, 'public'))); // Servir arquivos estáticos
    app.use(routes);

    app.set('views', path.resolve(__dirname, 'src', 'views'));
    app.set('view engine', 'ejs');

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log(`Para acessar, utilize o seguinte link: http://localhost:${port}`);
    });
~~~

Neste código:

- **`express.static(path.resolve(__dirname, 'public'))`:** Configura o Express para servir arquivos estáticos da pasta "public".
- **`app.use(routes)`:** Configura o Express para usar as rotas definidas no arquivo "routes.js".
- **`app.set('views', path.resolve(__dirname, 'src', 'views'))`:** Define o diretório para os templates dinâmicos (usados na View).
- **`app.set('view engine', 'ejs')`:** Configura o motor de visualização EJS.

### Uso de `express.static`:

A função `express.static` do Express é crucial para servir esses arquivos estáticos. Quando o navegador faz uma solicitação para um recurso estático, o Express procura esse recurso no diretório especificado (neste caso, "public") e o envia de volta ao navegador.

~~~javascript
app.use(express.static(path.resolve(__dirname, 'public')));
~~~

Essa linha configura o middleware de arquivos estáticos e permite que URLs como "/images/logo.png" sejam resolvidas automaticamente para o arquivo correspondente em "public/images/logo.png".

### Vantagens da Separação:

- **Organização:** Facilita a organização da aplicação, separando conteúdo estático e dinâmico.

- **Desempenho:** Arquivos estáticos são tratados de forma eficiente pelo servidor, melhorando o desempenho.

- **Cache:** Os navegadores podem armazenar em cache arquivos estáticos, reduzindo a carga no servidor e acelerando futuros acessos.

- **Manutenção:** Facilita a manutenção, permitindo a atualização independente de arquivos estáticos e dinâmicos.

Essa organização permite a separação clara entre o conteúdo estático (imagens, estilos) e dinâmico (templates renderizados pelo servidor) na estrutura da aplicação, seguindo a abordagem MVC.

**OBS: Para acessar os arquivos estáticos e testar esta aula basta digitar na URI `/nome_do_arquivo_estático.extensão`**
