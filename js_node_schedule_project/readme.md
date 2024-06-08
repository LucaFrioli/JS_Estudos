# Projeto Agenda :

Este projeto visa colocar todos os conceitos estudados em aulas anteriores em prática. Criando uma aplicação de agenda para usuários cadatrados no pequeno sistema, serão abordados tópicos um pouco mais avançados, em adição aos conhecimentos obtidos em aulas anteriores. A méta é estar documentando cada alteração feita no projeto de modo gradual e constante.

# Primeira etapa :

Criar um layout ejs que irá receber os conteúdos necessários, e servirá de entry point na aplicação :

Tasks da primeira etapa :

- [x] Criar um header que contenha uma barra de navegação e uma logo fantasia;

- [x] Criar um footer que contenha o nome do projeto, o ano em que está sendo feito e o autor que o desenvolveu;

- [x] Desenvolver uma Página de erro a qual seja amigavel ao usuário; (Tenha a total liberdade criativa);

- [x] Desenvolver um template de como deverá ser o display da agenda :
	- [x] Deverá conter um título dizendo do que se trata as informações;
	- [x] Deverá conter uma frase explicando o que está ocorrendo para o usuário ou o confortando com boas vindas;
	- [x] Deverá conter uma div com erro ou informação (no momento ela não precisa ser integrada a nada, mas funcionará com as flash messages posteriormente);
	- [x] Uma tabela ou display para informações de contatos cadastrados;

- [ ] Estilizar tudo que foi criado, e deixar responsivo, siga o padrão de desing mobile-first de preferência; (caso queira pode utilizar bootstrap);

**⚠️ ⚠️ De preferência tentar utilizar ao maxímo o html semântico ‼️**

# Segunda etapa :

Criar os layouts das telas de cadastro e login.

Foi realizada inserção dos formulários, além de reformular o arquivo de css para que seja mais reutilizavel. Além disso foram adicionadas as rotas referentes a estas páginas(um conceito inicial que poderá ser remodeladoao longo da implementação). E os controllers básicos para renderizar as páginas. Foi corrigido o Middleware que controla a demonstração dapágina de erro.

**Obs: ao fim do projeto deixarei todos os códigos das commits em forma de sumário para observação das mudanças decorrentes do desenvolvimento.**


# Terceira etapa :

Fazer a funcionalidade de cadatro dos usuários. Realizaremos a validação do email inserido, e trabalharemos com criptografia ao salvar a senha do usuário.

Tasks :
 - [x] implementar a lógica dentro da rota `\login` do método post, feito dentro do controller `registerReceived`;
 - [] criar um model que controlará a validação dos dados de entrada de cadatro;
   - [x] criar um schema que contenha os dados necessários email e pswd
   - [x] criar validação de dados para os dados recebidos dentro da classe do service *Utilizaremos o pacote vlaidator, terá uma explicação a seguir sobre este assunto*
   - [x] validar e spamar uma flash message caso tenha dados errados
   - [] se tudo estiver validado corretamente, adicionar criptografia na senha do usuário *terá uma explicação a seguir sobre este assunto*
   - [] com tudo validado e a senha criptogrfada, slavar dentro do banco de dados as informações

### Entendendo melhor flash messages dentro do contexto do projeto :

Ao settarmos uma flash message ou um array de flash messages temos uma variável engatilhada pronta para ser disparada. Isso dá uma margem para que possamos criar mensagens de erros e sucessos.

Para spamalas na tela do usuário podemos criar um componente `ejs` que só "existirá" caso existam flash messages para serem exibidas. Para que haja uma averiguação da existência de flash messages, podemos utilizar middlewares, que serão responsaveis por fazer este controle independentemente da rota em que nos encontremos dentro de nosso site. Em um middleware pré-settamos dentro de `locals`(a variavel que é inserida automaticamente em todo ejs) os erros das `flash-messages`;

OBS : lembre-se que os controllers serão responsáveis por não haverem inconsistencias de direcionamento ao obter um erro. Veja no caso do cadastro no controller específico `registerReceived`. Ao serem detectados erros, além de "armar" as flash messages, ele retorna o usuário para a página com erro.

# Sumário de comimits :

## Primeira etapa :
 - 164d9ee
 - b71cbd9
 - 3573aa7
 - 7a8ee30
 - 6db3b2a
 - 08cb9d8
 - 9c86a4c

## Segunda etapa :
 - 4c7d8a4
 - 72fb4d0

## Terceira etapa :
 - 1360fd8
 - 250fca1
