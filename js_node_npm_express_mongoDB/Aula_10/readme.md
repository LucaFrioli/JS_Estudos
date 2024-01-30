# Sobre Router e Controllers :

**OBS : Aqui terão tópicos abordando padrões de arquitetura como conteúdo extra que auxiliarão o entendimento dos conceitos abordados nessa aula.**

Em arquiteturas de desenvolvimento web, o padrão MVC (Model-View-Controller) é comumente utilizado para organizar e estruturar o código. Nesse contexto, o Express.js, um framework para Node.js, adota esse padrão e introduz os conceitos de roteador (Router) e controlador (Controller).

1. **Router (Roteador):**
   - **Definição:** O roteador no Express é responsável por lidar com as rotas da aplicação. Ele é utilizado para organizar o código em torno dos diferentes pontos de entrada (URIs) da aplicação.
   - **Como funciona:** Um roteador no Express é uma instância do `express.Router()`. Ele pode ser utilizado para definir rotas específicas e manipular as requisições HTTP associadas a essas rotas.
   - **Exemplo:**
     ~~~javascript
     const express = require('express');
     const router = express.Router();

     router.get('/', (req, res) => {
       res.send('Rota principal');
     });

     router.get('/about', (req, res) => {
       res.send('Sobre nós');
     });

     module.exports = router;
     ~~~
   - **Integração:** Um roteador pode ser integrado a uma aplicação principal usando o método `app.use()`.

2. **Controller (Controlador):**
   - **Definição:** O controlador é responsável por lidar com a lógica de negócios associada a uma rota específica. Ele é utilizado para separar a lógica de processamento das requisições HTTP da definição das rotas.
   - **Como funciona:** Um controlador pode ser uma simples função ou um conjunto de funções que são chamadas quando uma rota específica é alcançada. Ele recebe a requisição, processa os dados conforme necessário e envia uma resposta.
   - **Exemplo:**
     ~~~javascript
     // controlador.js
     const getMainPage = (req, res) => {
       res.send('Rota principal');
     };

     const getAboutPage = (req, res) => {
       res.send('Sobre nós');
     };

     module.exports = {
       getMainPage,
       getAboutPage
     };
     ~~~

     ~~~javascript
     // roteador.js
     const express = require('express');
     const router = express.Router();
     const controller = require('./controlador');

     router.get('/', controller.getMainPage);
     router.get('/about', controller.getAboutPage);

     module.exports = router;
     ~~~
   - **Benefícios:** A separação de responsabilidades entre o roteador e o controlador facilita a manutenção do código, tornando-o mais modular e fácil de entender.

No exemplo, o roteador define as rotas e especifica quais funções do controlador devem ser executadas quando essas rotas são acessadas. Isso ajuda a manter o código organizado e escalável, facilitando a adição de novas funcionalidades à aplicação.

## **Padrão MVC :**

O padrão MVC (Model-View-Controller) é um padrão de arquitetura de software amplamente utilizado para desenvolvimento de aplicativos, especialmente em frameworks e tecnologias voltadas para interfaces de usuário, como aplicações web. Ele ajuda a organizar o código em camadas distintas, separando preocupações específicas em módulos independentes. O MVC é composto por três principais componentes:

1. **Model (Modelo):**
   - **Definição:** O modelo representa a camada de dados e lógica de negócios da aplicação. Ele é responsável por armazenar, manipular e processar os dados, bem como por realizar operações de persistência, se necessário.
   - **Responsabilidades:** O modelo não está diretamente ligado à interface do usuário. Ele é projetado para encapsular a lógica de negócios e interagir com o banco de dados ou outras fontes de dados.

2. **View (Visão):**
   - **Definição:** A visão é responsável pela apresentação dos dados ao usuário e pela exibição da interface gráfica. Ela representa a camada de apresentação.
   - **Responsabilidades:** A visão exibe as informações do modelo ao usuário e recebe interações do usuário. Ela não realiza operações de lógica de negócios; em vez disso, apenas exibe os dados fornecidos pelo modelo.

3. **Controller (Controlador):**
   - **Definição:** O controlador é o componente responsável por gerenciar a interação entre o modelo e a visão. Ele atua como um intermediário que recebe entradas do usuário (geralmente a partir da visão), processa essas entradas e atualiza o modelo e a visão conforme necessário.
   - **Responsabilidades:** O controlador implementa a lógica de controle, interpretando as ações do usuário e coordenando as atualizações no modelo e na visão. Ele é a ponte entre a entrada do usuário, a lógica de negócios e a apresentação.

**Fluxo de Trabalho no MVC:**
1. O usuário interage com a interface do usuário (visão), gerando uma solicitação.
2. O controlador recebe essa solicitação, interpreta-a e toma as medidas necessárias.
3. O controlador pode atualizar o modelo com base na solicitação do usuário.
4. A visão consulta o modelo para obter os dados atualizados e os exibe ao usuário.
5. O ciclo se repete conforme o usuário interage com a aplicação.

**Benefícios do Padrão MVC:**
- **Separação de Responsabilidades:** Cada componente tem uma responsabilidade clara, facilitando a manutenção e o desenvolvimento.
- **Reusabilidade de Código:** Os modelos e controladores podem ser reutilizados em diferentes partes da aplicação.
- **Facilidade de Teste:** A separação permite testar as diferentes partes do aplicativo de forma isolada.
- **Escalabilidade:** Permite escalar a aplicação de forma mais organizada e modular.

Embora o MVC tenha sido originalmente concebido para aplicações desktop, várias adaptações, como o padrão MVVM (Model-View-ViewModel) para aplicações de interface de usuário baseadas na web, foram desenvolvidas para atender às necessidades específicas dessas plataformas.

## **Sobre o padrão MVVM :**

O MVVM (Model-View-ViewModel) é um padrão de arquitetura de software que se baseia no conceito de separação de preocupações para projetar aplicações, especialmente aquelas com interfaces de usuário complexas, como aplicações web. O MVVM é amplamente utilizado em frameworks de frontend, como Angular, Vue.js e Knockout.js. Ele é uma evolução do padrão MVC (Model-View-Controller) e introduz uma camada adicional chamada ViewModel.

**Componentes do MVVM:**

1. **Model (Modelo):**
   - Representa a camada de dados e lógica de negócios, semelhante ao conceito de modelo no padrão MVC. O modelo é responsável por armazenar e gerenciar os dados da aplicação.

2. **View (Visão):**
   - Representa a camada de apresentação, exibindo a interface do usuário. Ao contrário do padrão MVC, a visão no MVVM está mais intimamente ligada ao ViewModel.

3. **ViewModel:**
   - É uma camada intermediária entre a visão e o modelo. O ViewModel contém a lógica específica da interface do usuário e fornece os dados necessários para a visão. Ele é responsável por adaptar os dados do modelo para serem consumidos pela visão.

**Funcionamento do MVVM:**

1. **Início:**
   - Quando a aplicação inicia, a visão é renderizada, mas ela ainda não tem dados.

2. **Conexão com o ViewModel:**
   - A visão se conecta ao ViewModel, que fornece os dados necessários para a renderização inicial. O ViewModel pode preparar os dados do modelo de maneira específica para a visão.

3. **Interatividade do Usuário:**
   - Quando o usuário interage com a aplicação (por exemplo, ao preencher um formulário), essa interação é capturada pela visão.

4. **Atualização do ViewModel:**
   - A visão encaminha a interação do usuário para o ViewModel, que, por sua vez, pode validar, processar ou atualizar os dados do modelo conforme necessário.

5. **Atualização Automática da Visão:**
   - Qualquer alteração nos dados do ViewModel é automaticamente refletida na visão. Isso é possível por meio de técnicas de vinculação de dados (data binding), que permitem que a visão e o ViewModel permaneçam sincronizados.

**Arquitetura do MVVM:**
~~~javascript
+----------------+       +-----------------------+
|    Model       |       |       ViewModel       |
|                |       |                       |
|    (Lógica     |       |   (Lógica de UI e     |
|  de Negócios)  |       |  Adaptação de Dados)  |
+----------------+       +-----------------------+
        |                            |
        |                            |
        v                            v
+----------------+       +-----------------------+
|      View      |       |       Interface       |
|                |       |       do Usuário      |
|   (Interface   |       |                       |
|     Gráfica)   |       |                       |
+----------------+       +-----------------------+
~~~

**Benefícios do MVVM:**
- **Separação de Responsabilidades:** Cada componente tem uma responsabilidade clara, facilitando a manutenção e a evolução do código.
- **Reatividade:** As alterações nos dados do ViewModel são automaticamente refletidas na visão, simplificando a atualização da interface do usuário.
- **Testabilidade:** O ViewModel pode ser testado de forma isolada, facilitando a criação de testes unitários.

O MVVM é especialmente útil em aplicações frontend, onde a interatividade do usuário e a reatividade da interface são aspectos cruciais do desenvolvimento. As bibliotecas e frameworks que implementam o MVVM geralmente fornecem funcionalidades de vinculação de dados, simplificando ainda mais o desenvolvimento de aplicações complexas.

**Esta aula terá um redme_extra.md que visa abordar temas como arquiteturas escalaveis, todo o processo do segundo arquivo será feito com auxílio de inteligências artificiais!**
