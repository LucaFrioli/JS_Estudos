# Projeto Agenda :

Este projeto visa colocar todos os conceitos estudados em aulas anteriores em prática. Criando uma aplicação de agenda para usuários cadatrados no pequeno sistema, serão abordados tópicos um pouco mais avançados, em adição aos conhecimentos obtidos em aulas anteriores. A méta é estar documentando cada alteração feita no projeto de modo gradual e constante.

_Legenda : x = concluida, / = em progresso_

**Banco de tasks pendentes :**

-   1 task na primeira etapa; [/]

    -   Melhorado a funcionalidade do burguer menu (valor de referencia de commit : 4156829 );
    -   Melhorar o desing, Trazendo uma experiência de Usuário mais agrdavel (); obs : está etapa será realizada junto a ultima etapa extra do projeto.

-   Side quest da quarta etapa; [ ] ();

-   1 Task na etapa Extra 1; [ ]
    -   Idealizar e criar desing da página Settings [ ] ();

**Bugs encontrados :**

-   Problemas em navegadores desktop ao utilizar burguer menu (não abre ao redimencionar a tela do navegador); [x]

# Primeira etapa :

Criar um layout ejs que irá receber os conteúdos necessários, e servirá de entry point na aplicação :

Tasks da primeira etapa :

-   [x] Criar um header que contenha uma barra de navegação e uma logo fantasia;

-   [x] Criar um footer que contenha o nome do projeto, o ano em que está sendo feito e o autor que o desenvolveu;

-   [x] Desenvolver uma Página de erro a qual seja amigavel ao usuário; (Tenha a total liberdade criativa);

-   [x] Desenvolver um template de como deverá ser o display da agenda :

    -   [x] Deverá conter um título dizendo do que se trata as informações;
    -   [x] Deverá conter uma frase explicando o que está ocorrendo para o usuário ou o confortando com boas vindas;
    -   [x] Deverá conter uma div com erro ou informação (no momento ela não precisa ser integrada a nada, mas funcionará com as flash messages posteriormente);
    -   [x] Uma tabela ou display para informações de contatos cadastrados;

-   [ ] Estilizar tudo que foi criado, e deixar responsivo, siga o padrão de desing mobile-first de preferência; (caso queira pode utilizar bootstrap);

**⚠️ ⚠️ De preferência tentar utilizar ao maxímo o html semântico ‼️**

# Segunda etapa :

Criar os layouts das telas de cadastro e login.

Foi realizada inserção dos formulários, além de reformular o arquivo de css para que seja mais reutilizavel. Além disso foram adicionadas as rotas referentes a estas páginas(um conceito inicial que poderá ser remodeladoao longo da implementação). E os controllers básicos para renderizar as páginas. Foi corrigido o Middleware que controla a demonstração dapágina de erro.

**Obs: ao fim do projeto deixarei todos os códigos das commits em forma de sumário para observação das mudanças decorrentes do desenvolvimento.**

# Terceira etapa :

Fazer a funcionalidade de cadatro dos usuários. Realizaremos a validação do email inserido, e trabalharemos com criptografia ao salvar a senha do usuário.

Tasks :

-   [x] implementar a lógica dentro da rota `\login` do método post, feito dentro do controller `registerReceived`;
-   [x] criar um model que controlará a validação dos dados de entrada de cadatro;
    -   [x] criar um schema que contenha os dados necessários email e pswd
    -   [x] criar validação de dados para os dados recebidos dentro da classe do service _Utilizaremos o pacote vlaidator, terá uma explicação a seguir sobre este assunto_
    -   [x] validar e spamar uma flash message caso tenha dados errados
    -   [x] se tudo estiver validado corretamente, adicionar criptografia na senha do usuário _terá uma explicação a seguir sobre este assunto_
    -   [x] com tudo validado e a senha criptogrfada, slavar dentro do banco de dados as informações

### Entendendo melhor flash messages dentro do contexto do projeto :

Ao settarmos uma flash message ou um array de flash messages temos uma variável engatilhada pronta para ser disparada. Isso dá uma margem para que possamos criar mensagens de erros e sucessos.

Para spamalas na tela do usuário podemos criar um componente `ejs` que só "existirá" caso existam flash messages para serem exibidas. Para que haja uma averiguação da existência de flash messages, podemos utilizar middlewares, que serão responsaveis por fazer este controle independentemente da rota em que nos encontremos dentro de nosso site. Em um middleware pré-settamos dentro de `locals`(a variavel que é inserida automaticamente em todo ejs) os erros das `flash-messages`;

OBS : lembre-se que os controllers serão responsáveis por não haverem inconsistencias de direcionamento ao obter um erro. Veja no caso do cadastro no controller específico `registerReceived`. Ao serem detectados erros, além de "armar" as flash messages, ele retorna o usuário para a página com erro.

### Sobre as novas dependências adicionadas :

O pacote `validator` é um pacote que pode ser acoplado aos projetos, ele é um módulo já bem estabelecido e que possuí uma série de validações já pré-feitas, isso ajuda a manter o código mais limpo e organizado já que reduzirá o número de linhas escritas e trará uma validação sólida e de rápida escrita.

Já o pacote `bcryrptjs`, tem como objetivo realizar um hashing da senha ao salvar no banco de dados, assim seguindo uma recomendação mínima de segurança, ou seja a de nunca salvar senhas em texto plano em banco de dados.

# Quarta etapa :

Esta etapa será referente a logar o usuário, após ele ser cadastrado, devemos conseguir recuperar suas informações, e averiguar se batem com as informações enviadas dentro do formulário de longin, assim authenticando e referênciadndo a seessão ao usuário logado. usuários logados trão acessos a mais funcionalidades, e maior libertdade dentro do site.

Tasks :

-   [x] Criar uma rota para fazer averiguação de login.
-   [x] Criar o método para realização de login dentro do model
    -   [x] Validar os campos (a principio utilizaremos já o método anteriormente criado);
    -   [x] Resgatar os dados da tabela, e averiguar a existência do email;
    -   [x] Comparar a senha utilizando `bcryptjs`;
    -   [x] Lançar erros caso necessário;
-   [x] Caso o usuário seja logado com sucesso iniciaremos uma sessão;
-   [x] Com a sessão inciada devemos criar um middleware que adicionará a sessão nas outras rotas até que o usuário faça logout;
-   [x] Adionar botões disponiveis apenas para usuários logados, serão logout, e um botão que não leva ainda a rota alguma, porém o chamaremos de settings;
-   [x] Criar uma rota que seja responsável por realizar o logout do usuário;
-   [x] Começar modelagem de rotas, garantindo que alguns locais sejam acessados apenas por pessoas logadas;
    -   [x] Redefinindo precedências de rotas para melhor organização do site (neste tópico tenha total liberdade criativa, se quiser utilize outros sites conhecidos como inspiração);
    -   [x] Corrigir bugs de layout caso sejam apresentados
        -   [x] Reformular a lógica de frontend do burguer menu quando só exite um botão de opção. (caso queira pode deixar apenas o botão);
        -   [x] Começar a adicionar responsividade na página index, tornando-a responsiva em todos os tamanhos de tela padrão oferecidos pela devtools do navegador;
    -   [x] Testar se tudo está funcionando como o esperado.

Obs : ao começar a testar o comportamento das interfaces gráficas em diferentes dispositivos, após a reformulação das rotas e retirar botões desnecessários para pessoas não logadas, erros forma capturados dentro do burguer menu, e footer assim criaram-se subtasks dentro da task de _correção de bugas de layout_.

### Side Quest :

    Caso queira treinar um pouco mais de lógica, começar a implementar o sitema de logs, e corrigi-lo, para que tenhamos um controle do mapeamento de comportamento de usuário dentro de nosso site.

# Etapa Extra 1 (off topic em relação a idelização do projeto prático):

**Para estudantes apenas realizar a ultima e a penultima(caso necessário) tasks.**

Nesta etapa iremos adicionar dentro da página de entrada um botão para um página de tasks, estas tasks deverão estar salvas dentro do localstorage, junto com a informação se já foram concluídas ou não. Isso além de facilitar para os alunos posteriores que estarão utilizando o prjeto para estudo. Auxiliará no treino de habilidades já aprendidas anteriormente.

-   [x] Adicionar uma rota que leve até a página de tasks, sendo que deverá ser aberta em uma aba diferente do navegador;
-   [x] Crirar bloco ou lista de tasks :
    -   [x] Cada bloco/lista de tasks deve conter um titulo;
    -   [x] Cada bloco/lista de tasks deve conter checkboxes com sua label na frente dizendo o que deve ser feito;
    -   [x] Caso seja necessário fazer subtasks elas devem ficar aninhadas a baixo da task pai;
    -   [x] Toda vez que o bloco/lista de task sofrer uma alteração deverá ser atualizado um localstorage para que a próxima vez que a página for aberta no dispositivo, a task fique constada como concluida;
-   [x] Popular a lista de tasks com as já realizadas e/ou idealizadas até o momento e atualizar continuamente ao longo do projeto; (as tasks extras não entrarão dentro da lista e ficarão apenas como desfios para uqem está seguindo todo o matrial);
-   [x] Testar responsividade, e estilizar a página;
-   [/] Escolher uma task do banco de tasks pendentes e realizar; (task do sistema de Logg em processo);
-   [ ] Começar a criar o layout da página settings do usuário;

Várias mudanças de ideias ocorreram ao longo desta etapa principalmente por conta do hiato que foi necessário ser feito... porém uma segunda ideia de implementação é talvez criar um mecanismo de reconhecimento de rede, assim já portando todas as mudanças de um computador ao outro, ou afins pela sessão iniciada em determindo ip de rede, mas isto ficará nos planos de ideias, para serem implementadas ao amadurecimento do desenvolvedor. E com o decorrer da jornada que se prosseguirá com typescript e webassembly em rust. (Breve divagação).

---

**Apartir deste ponto iniciaremos a criar propriamente um CRUD, ele será responsavel por realizar todo o gerenciamento dos contatos da agenda. Criarei primeiro um crud simples sugerido para entender o funcionamento dos processos de uma forma mais primordial, após isto criarei mais algumas etapas extras para trabalharmos o CRUD dos contatos lincando diretamente ao usuário. Nas próximas etapas para haver uma compreesão mais aprofundada do passo a passo no desenvolvimento é recomendado seguir o sumário de commits referente as etapas a risca. Observando e anlaizando as mudanças feitas nos códigos.**

**Conceituando o que é um CRUD :**

O `CRUD` é um acrônimo para **Create, Read, Update e Delete**, que faz referencia ao processos que os dados sofrerão de acordo com as ações do usuário.

-   **Create** = A primiera inserção ou registro de um novo dado dentro de nossa base de dados.
-   **Read** = Faz referencia a tentativa de resgate e leitura de um registro dentro de nossa base de dados.
-   **Update** = É a atualização da informação contida dentro de um registro de nossa base de dados.
-   **Delete** = É a remoção de um registro dentro de nossa base de dados;

Para entender um pouco mais como funciona um CRUD completo vá para a pasta models e abra o arquivo `modelDemonstration.js`, lá está um crud simples, e documentado como exeplo, além disso já contém um método de tópico avaçado que veremos mais adiante, porém se atenha apenas aos métodos referentes ao CRUD. Obviamente um Bom CRUD vai muito além do que apresentado no arquivo, em niveis de validação, tratamento de dados e afins, além de muitas vezes ser criado com varios desacoplamentos e arquiteturas. Observe este modelo somente como um exeplo rápido para compreender o que são as transações de DBs.

# Quinta etapa :

Nesta etapa, construiremos a funcionalidade de cadastro de novos contatos na agenda, seguindo as informações definidas na criação do modelo. Para tal, elaboraremos um modelo específico para gerenciar todo o processo, implementando seus métodos de forma gradual.

Começaremos definindo o schema da coleção no MongoDB, que representará a estrutura dos dados armazenados para os contatos. Em seguida, implementaremos boas práticas para desacoplar as responsabilidades dentro do modelo, garantindo organização e manutenabilidade do código. Criaremos validações para garantir a integridade dos dados inseridos, prevenindo erros e inconsistências. Descreveremos o método responsável por inserir os dados validados no banco de dados e, por fim, elaboraremos uma view reutilizável para o formulário de edição de contatos, que será abordado em etapas posteriores.

-   [x] Criar um diretório de referência para conter toda a lógica referente a coleção contatos;
-   [x] Criar o arquivo que conterá o Schema e possíveis posteriores versões do mesmo;
    -   [x] Neste arquivo iremos iniciar instancinado um objeto que conterá chave(verção) valor(o schema e possíveis updates);
    -   [x] Iremos comentar ao máximo este arquivo utilizando JSDoc para que fique compreesível e explícito;
-   [x] Criar um arquivo que conterá as validações dos campos necessárias;
    -   [x] Criar função de sanitização de dados;
    -   [x] Criar funções de validação de entrada de dados;
        -   [x] Validação de número de celular;
        -   [x] Validação de email;
-   [x] Criar um arquivo main que irá consumir os anteriores citados e criar a classe que será utilizada dentro dos controladores;
    -   [x] Iremos adicionar o Model, e definir o nome da coleção e o schema de dados;
    -   [x] Contruir a classe, com um contrutor esperando os seguintes dados : [Modelo, corpo de requisição]. Além destes dados para iniciar a classe já definiremos atributo de error:array, e contato:null(posteriormente receberá outros valores com o decorrer do CRUD);
    -   [x] Criar método de sanitização e validação de dados do body;
    -   [x] Desenvolver o método de inserção de dados no banco de dados (OBS: posteriormente iremos adicionar um campo no schema para a criação de mais números para um mesmo contato);
-   [x] Criar um controlador que irá gerenciar os comportamentos das rotas referentes aos contatos;
    -   [x] Criaremos uma função de processamento para poder realizar a renderização da camada view, chamaremos ela de index;
    -   [x] A principio iremos criar uma função de processamento que será utilizada na postagem do formulário de cadastro, e utilizar a lógica para receber os dados do mesmo e tráta-los, iremos chamar está função de createContact;
-   [x] Criar a primeira rota responsável pelo cadastro de contatos (referencia o C do acrônimo CRUD) [**POST**];
-   [x] Criar uma rota para dar acesso ao formulário de cadastro de usuário [**GET**];
-   [x] Criar um arquivo ejs para o formulário;
-   [] Deixar todo o frontend responsivo;

Caso queira adicionar tratamentos de erros e validações de parâmetros para a validação de modelo, o faça, no caso nesta etapa adicionarei um diretório extra na pasta de models, chamado `services`, e começar a criar um serviço para o tratamento de erros que será atualizado na liberação de do módulo de logger, e será utilizado para capturar e catalogar os erros que forem ocorrendo durante e após o desenvolvimento.

# Sexta etapa :

Nesta etapa, focaremos no U do acrônimo CRUD, significando Update. Como já realizamos um template, basta construirmos duas funções de processamento: uma que renderizará o formulário para edição do contato e outra para realizar a atualização propriamente dita.

Para isso, precisaremos criar um botão ou link com um ícone na frente de cada contato, o qual retornará uma query de busca com o ID do contato referente. Neste momento, apenas passaremos uma query "na mão" para fins de teste; iremos criar a lógica completa quando implementarmos as operações de leitura e exclusão. Após isso, renderizaremos o template com os valores do contato injetados nos inputs. Se necessário, reformularemos a lógica da view e o objeto de injeção. Para isso, criaremos um método em nosso serviço chamado findOneById.

Em seguida, criaremos outra função de processamento responsável pela atualização do contato. Nessa função, criaremos um novo método em nosso serviço para realizar a atualização em si. No controller, validaremos o corpo da requisição e faremos o update. Para testar, utilizaremos a ferramenta MongoDB Atlas.

-   [x] Criar uma área de botões dentro da View `home.ejs`. e adicionar um botão utilizando um icone do googleicons que represente edição (para isso basta utilizar o head);
-   [x] Encapsular o icone dentro de um hyperlink, e construir um caminho que utilize um id de usuário e a palavra edit(ou alguma palavra relacionada); ex :`/contatos/editar/:id`
-   [x] Criar um método dentro do `ContactService` que resgate as informações do contáto de referência do id e apena isto. Apesar de ser uma referência a letra R do acronimo, trabalharemos ela mais a fundo na próxima etapa;
-   [x] Criar uma função de processamento que irá receber este id, e utilizar o método anteriormente construido para, moldar o objeto de injeção da página;
-   [x] Desenvolver o método que será responsável por atualizar os dados do contato referênciado pelo Id;
-   [x] Criar uma outra função de processamento que será responsável por realizar a atualização das informações do contato de referência;
-   [x] Implementar flash message para que o usuário entenda o que está ocorrendo;
-   [x] Declarar as rotas dentro do arquivo de rotas, respeitando as precedências;
-   [] Deixar todas as mudanças possíveis das views de forma responsiva;

off :

-   [x] Corrigir bug referente ao objeto de caching no login controller; (off class para quem está realizando após o dia 17 de agosto não é necessário realizar esta etapa).

# Sétima etapa :

Prosseguindo iremos adicionar a leitura execlusão dos elementos da tambela de Contatos. Para isso iremos mexer nos nossos arquivos `homeController` e continuar mexendo no `main` do `contactsModel`. Além disso iremos dinamizar o nosso arquivo de vizualização `home.ejs` para que seja possível ter o display de todos os contatos cadastrados até o momento.

Esta etapa abordará de forma mais profunda as letras R e D do acônomo CRUD.

**OBS : como todas as etapas anteriores se atente sempre em realizar as validações necessárias;**

-   [x] Iniciaremos criando um método em nosso model que será responsável por trazer todos os contatos presentes na coleção do banco de dados;
-   [x] Iremos construir dentro da renderização da home no `homeController` uma lógica que possibilitará a o resgate utilizando o método anteriormente criado dos objetos, e a injeção dos mesmos na view;
-   [] Criaremos a lógica da view para iterar sobre os contatos, e renderiza-los na tela, note que neste momento também iremos contruir dinâmicamente os links de referências de edição, trocando o link que estava em hardcode para umlink dinâmico.
-   [] Após isto iremos adicionar um botão ou link em formato de lixeira ou algo que referêncie a exclusão do contato, além disso já iremos construir a rota da mesma forma que na etapa anterior a tornando dinâmica com o id de cada usuário;
-   [] Devemos então nos voltar ao modelo novamente e criar o método que será responsável da exclusão do contato referênciado pelo id da rota;
-   [] Então finalmente iremos criar um controller para que possa gerênciar o processo de exclusão uitlizando o método anterior, ele everá retornar a home;

# Sumário de commits :

**Início das commits : 27 de maio de 2024 ---- Última commit : ## de ###### de 2024**

## Commits de preparações :

-   eb061c6

## Primeira etapa :

-   164d9ee
-   b71cbd9
-   3573aa7
-   7a8ee30
-   6db3b2a
-   08cb9d8
-   9c86a4c

## Segunda etapa :

-   4c7d8a4
-   72fb4d0

## Terceira etapa :

-   1360fd8
-   250fca1
-   01343ae
-   30c081f

## Quarta etapa :

-   5243437
-   d441240
-   a0700df
-   64cb215

## Etapa Extra 1 :

-   b3f7b36
-   35f0c4b
-   5e7ea7e
-   4156829
-   d72b31e
-   b252cb2
-   72fbe4b
-   4e06cb0

## Quinta Etapa :

-   441f246
-   900c575
-   b3d798e
-   3f52ac5
-   86ba664
-   0dfedfb

## Sexta Etapa :

-   da91e01
-   1cbef5c
-   dffd856
-   577fe80

## Sétima Etapa :

-
