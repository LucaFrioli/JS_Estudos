# Projeto Agenda :

Este projeto visa colocar todos os conceitos estudados em aulas anteriores em prática. Criando uma aplicação de agenda para usuários cadatrados no pequeno sistema, serão abordados tópicos um pouco mais avançados, em adição aos conhecimentos obtidos em aulas anteriores. A méta é estar documentando cada alteração feita no projeto de modo gradual e constante.

**Banco de tasks pendentes :**

_Legenda : x = concluida, / = em progresso_

-   1 task na primeira etapa; [/]

    -   obs : melhorado a funcionalidade do burguer menu (valor de referencia de commit : 4156829 );

-   Side quest da quarta etapa; [ ]

**Bugs encontrados :**

-   Problemas em navegadores desktop ao utilizar burguer menu (não abre ao redimencionar a teloa do navegador); [ ]

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
-   [x] Adionar botões disponiveis apenas para usuários logados, serão logout, e um botão que não leva ainda a rota alguma de settings;
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

**Para estudantes apenas realizar a ultima task.**

Nesta etapa iremos adicionar dentro da página de entrada um botão para um página de tasks, estas tasks deverão estar salvas dentro do localstorage, junto com a informação se já foram concluídas ou não. Isso além de facilitar para os alunos posteriores que estarão utilizando o prjeto para estudo. Auxiliará no treino de habilidades já aprendidas anteriormente.

-   [x] Adicionar uma rota que leve até a página de tasks, sendo que deverá ser aberta em uma aba diferente do navegador;
-   [x] Crirar bloco de tasks :
    -   [x] Cada bloco de tasks deve conter um titulo;
    -   [x] Cada bloco de tasks deve conter checkboxes com sua label na frente dizendo o que deve ser feito;
    -   [x] Caso seja necessário fazer subtasks elas devem ficar aninhadas a baixo da task pai;
    -   [ ] Toda vez que o bloco de task sofrer uma alteração deverá ser atualizado um localstorage, para que a próxima vez que a página for aberta no dispositivo, a task fique constada como concluida;
-	[ ] Popular a lista de tasks com as já realizadas e/ou idealizadas até o momento e atualizar continuamente ao longo do projeto;
-   [ ] Testar responsividade, e estilizar a página;
-   [/] Escolher uma task do banco de tasks pendentes e realizar;
-   [ ] Começar a criar o layout da página settings do usuário;

# Sumário de commits :

**Início das commits : 27 de maio de 2024 ---- Última commit : ## de ###### de 2024**

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
- 	35f0c4b
-	5e7ea7e
-	4156829
-	
