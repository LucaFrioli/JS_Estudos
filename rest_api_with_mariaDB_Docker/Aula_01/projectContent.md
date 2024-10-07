# Explicação de objetivo de projeto:

Este projeto visa criar uma API que faz a gestão dos alunos de uma escola ou universidade, trazendo dados dos alunos cadastrados, os quais por exeplo, nome, sobrenome, idade, peso, altura, email, cpf, tipo sanguíneo, notas, usuário SGA, etc.

Vamos utilizar o padrão REST, principalmente por ele se adaptar bem na separação client/server, o que será crucial para o entendimento dos próximos dois módulos de aprendizagem. Pois utilizaremos a API criada como backend do nosso frontend React.

## Instalando as ferramentas necessárias no servidor e em nosso computador, para usuários de linux ou macOS:

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

---


