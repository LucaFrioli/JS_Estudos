# Recaptulação dos conteúdos vistos no módulo

Todo o projeto feito com javascript, pode ou não ser feito com ele puro. No caso neste modulo configuramos um boilerplate que engloba o fullstack do desenvolvimento.

Neste módulo, o Node.js foi a estrela principal, abrindo um mundo de possibilidades para o desenvolvimento web completo. Através dele, exploramos:

**Manipulação de dados:**

* Tráfego e manipulação de dados com total liberdade.
* Leitura e escrita em arquivos JSON e de texto com o módulo `fs`.
* Gerenciamento dinâmico e seguro de caminhos na aplicação com o módulo `path`.

**Criação de servidores robustos:**

* Construção de servidores Node.js do zero.
* Abstração da complexidade da criação de servidores com o pacote `express`.
* Otimização do desenvolvimento com o `nodemon`.

**Integração com banco de dados:**

* Conexões com o banco de dados `MongoDB` utilizando o pacote `mongoose`.

**Gerenciamento de ambientes e segurança:**

* Importância do uso de arquivos de ambientes com o `dotenv`.
* Adição de camadas de segurança com os módulos `helmet` e `csurf`.

**Desenvolvimento full-stack:**

* Integração do backend com o frontend seguindo o padrão arquitetural MVC.
* Comparação teórica com outros padrões arquiteturais.

**Conceitos e ferramentas avançadas:**

* Seções e flash messages com ferramentas específicas.
* Middlewares do `express`: aprofundamento e funcionalidades.
* Componentização de HTML com o módulo `ejs`.
* Injeção de conteúdo do servidor na view com a View Engine `ejs`.

**Dominando o Node.js:**

A seguir iremos discorrer sobre toda a teoria vista de uma maneira mais ampla que nas aulas, porém aprofundando em cada tópico.

## Sobre a npm :

Para facilitar alguns processos e gerencia-los da melhor forma, existem então os gerenciadores de pacotes para o ecossistema do nodeJS, o que utilizamos e vamos utilizar é o mais famoso e um dos primeiros, e recomendado isso por vir nativo junto do node, ele se chama Node Package Maneger(NPM), com ele podemos instalar pacotes e módulos para otimizar e gerenciar funcionalidades dentro de uma aplicação.

Conhecemos os principais comandos para utilizar o npm, sendo eles :

-   `npm init -y` para iniciar o projeto;
-   `npm i *nome_do_pacote*` e `npm i --save-dev *nome_do_pacote*` para instalar dependencias de projeto e de desenvolvimento respectivamente;
-   `npm i *nome_do_pacote* --save-prod` para mover uma dependencia de desenvolvimento para uma de projeto;
-   `npm i *nome_do_pacote --save-dev*` para mover uma dependencia de desenvolvimento para uma dependencia de projeto;
-   `npm outdate` para averiguar se existe alguma dependencia necessitando de atualização;
-   `npm update` para atualizar as dependencias;
-   `npm unistall *nome_do_pacote*` para desistalar um pacote;
-   `npm prune --dry-run` para averiguar de modo seguro se tem algum arquivo que não tem mais uso dentro da `node_modules`;
-   `npm prune` para a retirada de arquivos orfãos definitivamente;
-   `npm audit` para averiguar se tem erro graves de segurança nas dependencias;
-   `npm audit fix` para corrigir os erros e vinerabilidades dos modulos sem firçar a mudanças de versões deles;
-   `npm audit fix --force` para corrigir os erros e vunerabilidades porém forçando atualizações se necessário;
-   `npm ls` para ver todas as dependencias instaladas no projeto;
-   `npm ls --all` para averiguar todas as dependencias e subdependencias do projeto;

# Sobre leitura e escrita de arquivos com o FS :

Após conhecer um pouco sobre o gerenciador de pacotes `npm` caimos de cara no código para compreender um pouco mais sobre o nodeJS em si e conecemos dois modulos muito importantes para programação backend, o `fs` e o `path`, que sao muito uteis e importantes para gerenciar logs de erros e afins, o que ajuda a manter um bom ecossistema de desenvolvimento dentro de um site. Com esses dois modulos em conjuntos além de podermos explorar arquivos, fazer contagem deles na raís do projeto, eventualmente criar automatizações,como abastecimento e leitura de planilhas e e documentos, ele ajuda a criar os logs, o que facilita na prevenção de bugs, e é muito útil a longo prazo dentro do ecossistema criado no aplicativo;

Ao utilizar também abos os módulos do nodeJS usamos conceitos já vistos dentro de módulos anteriores, como recursão mútua para iterar sobre diretórios, compreendemos também um pouco sobre expressões regulares para filtragem de buscas. Utilizamos para criação de logs objetos nativos como o objeto Date, além de conceitos avançados de função e delegação de serviços.

## Sobre o módulo path :

Antes de entender melhor a manipulação de arquivos devemos compreender conceitos de caminhos relativos vs. caminhos absolutos.

* Caminho relativo : O caminho relativo é aquele que tem como ponto referencial o arquivo que se está fazendo a chamada, ele geralmente não é tão detalhado pois não contempla toda a raíz da máquina em que o software está rodando, veja um exemplo de caminho relativo :

    * Exeplo linux :
    ~~~bash
    ./arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no mesmo diretório que o script que está sendo executado.
    ../diretorio/arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no diretório pai do diretório atual.
    ~/Documentos/arquivo.txt: #Refere-se ao arquivo `arquivo.txt` no diretório Documentos do usuário atual.
    ~~~

    * Exemplo MacOS :
    ~~~bash
    ./arquivo.txt: #Similar ao Linux.
    ../diretorio/arquivo.txt: #Similar ao Linux.
    ~/Documentos/arquivo.txt: #Similar ao Linux.
    ~~~

    * Exemplo Windows :
    ~~~powershell
    .\arquivo.txt: #Similar ao Linux.
    ..\diretorio\arquivo.txt: #Similar ao Linux, mas com \ como separador de diretórios.
    %USERPROFILE%\Documentos\arquivo.txt: #Similar ao Linux, mas usando a variável de ambiente %USERPROFILE% para o diretório do usuário.
    ~~~

* Caminho absoluto : O caminho absoluto especifica o local exato de um arquivo ou diretório a partir do diretório raiz do sistema, tornando sua referencia categórica, veja um exeplo de caminho absoluto :

    * Exemplo Linux
    ~~~bash
    /home/usuario/Documentos/arquivo.txt: #Refere-se ao arquivo arquivo.txt no diretório Documentos do usuário usuario.
    /etc/passwd: #Refere-se ao arquivo passwd no diretório /etc.
    ~~~

    * Exemplo MacOS
    ~~~bash
    /Users/usuario/Documents/arquivo.txt: #Similar ao Linux.
    /etc/passwd: #Similar ao Linux.
    ~~~

    * Exemplo Windows
    ~~~powershell
    C:\Users\usuario\Documents\arquivo.txt: #Refere-se ao arquivo arquivo.txt no diretório Documents do usuário usuario na unidade C.
    C:\Windows\System32\cmd.exe: #Refere-se ao arquivo cmd.exe no diretório System32 da pasta Windows na unidade C.
    ~~~

***Observações:***

*Os exemplos acima são apenas alguns casos básicos. A sintaxe de caminhos pode variar ligeiramente entre diferentes sistemas operacionais e distribuições.*

*É importante lembrar que os sistemas de arquivos podem ser configurados de diferentes maneiras, o que pode afetar a forma como os caminhos são interpretados.*

*Em geral, é recomendável usar caminhos absolutos quando se precisa ter certeza da localização de um arquivo ou diretório, especialmente em scripts ou programas que podem ser executados em diferentes ambientes.*

### **Compreendendo variaveis nativas do Nodejs sobre arqivos e caminhos :**

As variáveis `__filename` e `__dirname` são variáveis especiais predefinidas dentro do contexto de execução de um script Node.js. Elas fornecem acesso ao nome do arquivo e ao diretório atual do script, respectivamente, facilitando o acesso a informações importantes sobre o ambiente de execução.

**Sobre a variavel `__filename`:**

* Contém o caminho completo do arquivo JavaScript que está sendo executado no momento.
* É útil para:
    * Obter o nome do arquivo para fins de log ou identificação.
    * Carregar outros arquivos JavaScript de forma relativa ao local do script atual.
    * Acessar recursos específicos do sistema relacionados ao arquivo.

**Exemplo:**

~~~javascript
console.log(`Nome do arquivo: ${__filename}`);

const outroArquivo = require(`./outro-arquivo.js`); // Carrega um arquivo relativo

// Acessa um recurso do sistema específico do arquivo
~~~

**Sobre a variavel `__dirname`:**

* Contém o caminho do diretório que contém o arquivo JavaScript que está sendo executado.
* É útil para:
    * Acessar arquivos dentro do mesmo diretório do script atual.
    * Criar novos arquivos em um local específico relativo ao script.
    * Simplificar a manipulação de caminhos de arquivos dentro do script.

**Exemplo:**

~~~javascript
console.log(`Diretório do arquivo: ${__dirname}`);

const arquivoNoDiretorio = require(`./pasta/arquivo.js`); // Carrega um arquivo dentro do diretório

// Cria um novo arquivo no diretório atual
~~~

**Observações:**

* *As variáveis `__filename` e `__dirname` são variáveis globais, acessíveis em qualquer lugar dentro do script.*
* *Elas são predefinidas pelo Node.js e não podem ser modificadas.*
* *O valor de `__dirname` pode ser diferente do diretório de trabalho atual do processo.*

Essas variáveis facilitam o acesso a informações importantes sobre o ambiente de execução e simplificam o desenvolvimento de scripts Node, especialmente ao trabalhar com arquivos e diretórios.

### **Utilizando o módulo path para manipular as variaveis nativas:**

Logo com a ideia de padronizar e reprimir essas grandes diferenças entre declaração de caminhos, foi-se introduzido o módulo `path`, o qual tanto utilizamos ao longo dessa sessão, é um módulo que visa deixar o código fonte escrito o mais portátil possível em relação a declaração e chamadas de caminhos nos diferentes sistemas operacionais. A seguir vamos nos aprofundar um pouco mais sobre ele, sanando a falta de aprofundamento feita anteriormente em prol da simplificação inicial do aprendizado.

**Funcionalidades Essenciais:**

* **Normalização de Caminhos:**

  * `path.normalize(caminho)`: converte um caminho para o formato normalizado do sistema operacional.
  * `path.sep`: caractere separador de diretórios (ex: `/` no Linux e `\` no Windows).

* **Manipulação de Partes do Caminho:**

  * `path.basename(caminho)`: retorna o nome do arquivo (sem a extensão).
  * `path.dirname(caminho)`: retorna o diretório pai do caminho.
  * `path.extname(caminho)`: retorna a extensão do arquivo.

* **Resolução de Caminhos Relativos:**

  * `path.join(caminho1, caminho2, ...)`: junta vários segmentos de caminho em um único caminho.
  * `path.resolve(caminho)`: resolve um caminho relativo em relação ao diretório de trabalho atual.

* **Verificação de Caminhos:**

  * `path.isAbsolute(caminho)`: verifica se um caminho é absoluto ou relativo.
  * `path.isExtensible(caminho)`: verifica se um caminho é extensível (ex: se pode ser criado um novo arquivo).

* **Acesso à Informação do Sistema:**

  * `path.parse(caminho)`: retorna um objeto com informações sobre o caminho (diretório raiz, nome do arquivo, extensão, etc.).

**Exemplos de Uso:**

* Obter o nome do arquivo atual:

~~~javascript
const nomeArquivo = path.basename(__filename);
console.log(nomeArquivo); // script.js
~~~

* Criar um caminho absoluto para um arquivo:

~~~javascript
const caminhoAbsoluto = path.join(__dirname, 'pasta', 'arquivo.txt');
console.log(caminhoAbsoluto); // /home/usuario/pasta/arquivo.txt
~~~

* Verificar se um caminho é absoluto:

~~~javascript
const isAbsoluto = path.isAbsolute('/home/usuario/arquivo.txt');
console.log(isAbsoluto); // true
~~~

Dentro do módulo `fs` temos varias ações possíveis para manipulação das estruturas e dos arquivos. Antes do NodeJs 10 era preciso trablahar com estruturas de callbacks para evitar o fluxos de dados I/O bloqueantes, apartir da verção 10 foi disponibilizado o módulo `fs.promises`, assim permitindo estruturas assíncronas para as operações que são realizadas, assim deixando o desenvolvimento mais intuitivo, e menos verboso, sanando os bloqueis criados pelas operações realizadas.

Podemos definir e dividir os métodos em quatro grandes grupos :

- Leitura e Escrita;
- Operações de Diretórios;
- Operações de Arquivos;
- Estatísticas de Arquivo;

**Recursos Adicionais:**

* Documentação do módulo `path`: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)
* Tutoriais sobre o módulo `path`:
    * [https://m.youtube.com/watch?v=p995SdRXw_E](https://m.youtube.com/watch?v=p995SdRXw_E)
