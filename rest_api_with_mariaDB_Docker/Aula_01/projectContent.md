# Explicação de objetivo de projeto:

Este projeto visa criar uma API que faz a gestão dos alunos de uma escola ou universidade, trazendo dados dos alunos cadastrados, os quais por exeplo, nome, sobrenome, idade, peso, altura, email, cpf, tipo sanguíneo, notas, usuário SGA, etc.

Vamos utilizar o padrão REST, principalmente por ele se adaptar bem na separação client/server, o que será crucial para o entendimento dos próximos dois módulos de aprendizagem. Pois utilizaremos a API criada como backend do nosso frontend React.

## Instalando as ferramentas necessárias no servidor e em nosso computador, para usuários de linux baseados em Debian/Ubuntu:

Antes de iniciarmos a entender mais a fundo a arquitetura, e os processos de nossa API, o relacionamento de informações entre tabelas e a estruturação da base de dados, vamos começar configurando as tecnologias necessárias de nosso servidor(citadas no [arquivo anterior](./stack.md)), e instalar as ferramentas que iremos utilizar em nosso dispositivo local.

**OBS: Caso por algum motivo não se sinta confortável em trabalhar dentro de um servidor real, ou não seja possível a realização dentro de um, basta seguir os seguintes passos,utilizando o script disponibilizado chamado de `installTools.sh` que se encontra na raíz desta primeira aula.**

### Instalando ferramentas localmente :
---

 - Primeiramente iremos abrir nosso terminal, e ir até a pasta onde o arquivo `installTools.sh` se encontra.

---

 - Após isto devemos permitir a execução deste arquivo, para isso iremos utilizar o seguinte comando :

  ```bash
    # Adicionar permição de execução ao nosso arquivo
    chmod +x installTools.sh
  ```

---

 - Então agora devemos executar o nosso arquivo, e para isso deveremos utilizar o seguinte comando :

 ```bash
    # Coloque o caminho completo para o arquivo
    /caminho/para/o/script/installTools.sh
 ```

---

Após isso se tudo ocorreu com êxito deveremos analisar se a porta 3306 está aberta para uso em modo local, caso não tenha realize a instalação padrão do mysql workbench e insomnia padrão para seu sistema operacional. Então vamos verificar a porta, para isso iremos utilizar o seguinte comando :

```bash
sudo ss -tuln | grep :3306
```
caso ela esteja sendo usada devermos trocar o primeiro 3306 contido no passo9 do arquivo `./forServers.txt` para uma porta que não estrá sendo utilizada em nosso computador.

**Sempre verifique a porta antes de realizar a criação de um container.**

---

Caso tudo esteja certo então iremos executar o comando, se não trocaremos a porta e executaremos o comando.

---

Para ter certeza de que tudo foi configurado corretamente faça os comandos da seção [**comandos docker**](#comandos-docker).
Agora iremo para a seção [**Configurando o MySQL Workbench**](#configurando-o-mysql-workbench-).

### Instalando ferramentas no servidor e na máquina local:

**Ao trabalharmos com servidores reais devemos adotar uma postura diferente em relação a criação de um projeto local, então iremos utilizar os scripts contidos na pasta `./forServers`, segue o passo a passo :**

---

- Primeriamente iremos abrir nosso terminal e acessar nosso servidor utilizando ssh, para isso devemos digitar os seguinte comando dentro da nossa bash :

```bash
 # troque o nome de usuário para o nome de seu usuário e depois o ip_do_servidor pelo ip estático da máquina do servidor
 ssh username@ip_do_servidor
```
---

- Após acessar o nosso server iremos copiar e colar cada um dos comandos passo a passo do documento `./forServers/server.txt`, dentro do terminal de nosso servidor, lembre-se **não é preciso copiar os comentários**, basta apenas copiar os comandos. Os comentários são as linhas que se iniciam com `#`;

**OBS : No passo 9 especificamente lembre de trocar o atributo `NOME` para o nome que você quer que o contâiner tenha, e `SUA_SENHA_FORTE` por alguma senha forte que você queira que o contâiner tenha. Lembre-se de anotar sua senha e guarda-la em um local seguro.**

---

- Então deveremos ter certeza que o docker está rodando para isso vamos realizar os seguintes comandos no terminal do servidor.

##### comandos docker:
```bash
    # Verificar container rodando dentro do servidor :
    sudo docker ps

    # Caso por algum motivo você queira que parar o docker basta utilizar este comando, lembrando que deve ser utilizado o nome real do container, basta trocar o texto de exeplo nome_dado_para_o_container (isso vale para os próximos comandos) :
    sudo docker stop nome_dado_para_o_container

    # Caso queira iniciar um container que está parado basta utilizar o seguinte comando :
    sudo docker start nome_dado_para_o_container

    # Caso eventualmente seja necessário fazer um reinicio de um container ativo basta utilizar :
    sudo docker restart nome_dado_para_o_container

    # Caso eventualmente você desative um container e queira lista-lo utilizamos o comando :
    sudo docker ps -a
    ## A flag -a serve para listar todos os container independentemete se estão parados ou não;

    # Caso por algum motivo queiramos remover um container basta utilizar o seguinte comando depois de parar o container em questão :
    sudo docker rm nome_dado_para_o_container
```
---

- Agora com o container já configurado, devemos criar uma regra de firewall para que possamos utilizar nosso banco de dados fora de nosso servidor. Para isso iremos dentro do gestor online de nosso servidor e iremos criar uma regra específica para a porta `3306` que é a porta usada e configurada em nosso script pelo container docker. Aqui haverão algumas pequenas mudanças dependendo do servidor utilizado mas em suma as regras serão as seguintes :

    - Criar um nome para a regra de nosso firewall;
    - Adicionar uma descrição caso seja possível;
    - Direção de tráfego de entrada;
    - Caso haja uma ação de configuração ela deve ser permitir;
    - Adicionar todas as instâncias na rede do servidor;
    - Configurar o ip, caso haja algum ip fixo utilizar o seu, caso não utilizaremos a configuração 0.0.0.0/0 que corresponde a todos os IPs;
    - Definir a porta TCP 3306;
    - Então criar a regra;
    **Caso haja duvidas dde como realizar estas ações no seu servidor, entre em contato com a empresa gestora dele para ter mais auxílios.**

---

- Agora vamos começar a trabalhar com a nossa máquina local, para usuários windows, basta utilizar os links que estarão no final do arquivo `./forServers/local.txt`, para usuários linux ou macOS, iremos copiar e colar os comandos, também presentes no arquivo seguindo a distro utilizada.


## Configurando o MySQL Workbench :

---

Nesse momento com o docker configurado iremos então tomar a ação de conexão para podermos fazer a gestão dos dados via GUI(Graphic User Interface). Para isso então deveremos abrir o Workbenche clickar no icone de mais(+), isso abrirá uma janela de contexto onde primeiramente devemos colocar o nome da conexão no campo encontrado na parte mais superior da janela.

---

Após colocar o nome iremos para o parâmetro chamdo `hostname`, iremos clicar na caixa, e então termos duas opções.

- Caso de estar trabalhando em modalidade local :  manter o `ip` 127.0.0.1, ou apagar e colocar localhost.
- Caso de estar subindo um servidor : colocar o endereço `ip` estático da máquina em que o servidor está rodando.

---

Após realizado isso iremos direcionar a atenção ao campo chamado `port`, nesse passo iremos adicionar a porta da máquina em que o container docker foi configurado para utilizar, se não foi preciso fazer a mudançautilizaremos *3306* caso tenha sido preciso fazer uma mudança de porta, utilize a que foi configurada.

---

Então iremos testar a nossa conexão, provavelmente neste momento ocorrerá um erro, e aparecerá uma janela de contexto com dois botões. deveremos então clicar em `Continue Anyway`, e após isso `okey`.

---

Logo iremos clicar em `ok` que se encontra no canto inferior direito de janela de contexto principal para finalizar, e inserir a password que foi utilizada na hora de criar o docker.

---

Pronto agora temos tudo configurado da maneira que precisamos para começar finalmente nosso projeto.

No próximo passo iremos entender o que é um linter e uma ferramenta de harmonização e como configurar o ESLint e o EditorConfig em nosso projeto, continue aprendendo.
[Próximo passo, continue sua leitura!](../Aula_02/readme.md)

