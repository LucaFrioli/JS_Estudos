# Primeiros Passos:

## Instalando o NodeJS e o NVM(Node Version Manager)
**Introdução:**

Antes de mergulharmos no código, vamos instalar o NodeJS, base da linguagem JavaScript, permitindo a execução de scripts fora dos navegadores. Também abordaremos a instalação do nvm para gerenciar diferentes versões do NodeJS e garantir flexibilidade em seus projetos.

**Instalação do NodeJS:**

**Windows:**

1. Acesse o site NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/) e baixe a versão LTS mais recente (recomendado para estabilidade).
2. Siga o processo de instalação do wizard, permitindo a instalação de todas as dependências e arquivos necessários.
3. Teste a instalação no terminal com os comandos:

~~~powershell
node -v # exibe a versão do NodeJS
npm -v # exibe a versão do npm (gerenciador de pacotes)
~~~

4. Instale o nvm para gerenciar diferentes versões do NodeJS:

* Acesse GitHub NVM-Windows: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) e baixe o instalador `nvm-setup.exe`.
* Execute o instalador e siga os passos do wizard.
* Verifique a instalação com o comando `nvm -v`.

5. Aprenda comandos básicos do nvm:

* `nvm ls`: lista as versões instaladas do NodeJS.
* `nvm use x.x.x`: altera para a versão `x.x.x` do NodeJS.
* `nvm install x.x.x`: instala a versão `x.x.x` do NodeJS.
* `nvm uninstall x.x.x`: desinstala a versão `x.x.x` do NodeJS.

**Exemplo de uso do nvm:**

~~~powershell
nvm ls # lista as versões instaladas

# instala uma versão antiga
nvm install 16.14.0

# altera para a versão antiga
nvm use 16.14.0

# verifica a versão atual
nvm ls

# volta para a versão LTS mais recente
nvm use 20.11.1

# desinstala a versão antiga
nvm uninstall 16.14.0
~~~

**Lidando com políticas de execução no Windows:**

Ao desenvolver com NodeJS, scripts de frameworks ou pacotes externos podem precisar ser executados. Para permitir isso, configure a ExecutionPolicy no Powershell como administrador:

~~~powershell
Set-ExecutionPolicy RemoteSigned
~~~

**Observações importantes:**

* **RemoteSigned**: Permite scripts assinados digitalmente por editores confiáveis (recomendado).
* **Unrestricted**: Permite qualquer script, mas **não é recomendado** por motivos de segurança.

**Mac OS:**

1. Verifique se o nvm está instalado:

~~~bash
nvm -v
~~~

2. Se o nvm não estiver instalado:

* Execute o seguinte comando no terminal:

~~~bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
~~~

* Cole a saída do comando `export NVM_DIR` no terminal.
* Reinicie o terminal.
* Verifique a instalação com `nvm -v`.

3. Instalando o NodeJS:

* Averigue opções disponiveis :

~~~bash
nvm ls-remote
~~~

* Utilize a nvm para instalar a LTS:

~~~bash
nvm install node
~~~

* Verifique se é a versão LTS:

~~~bash
node -v
~~~

4. Gerencie as versões do NodeJS com os comandos `nvm`:

* `use`: altera para a versão desejada.
* `ls`: lista as versões instaladas.
* `uninstall`: desinstala a versão desejada.
* `ls-remote`: lista as versões disponíveis para instalação (não disponível no Windows).

**Linux:**

1. Remova o NodeJS se já estiver instalado:

~~~bash
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*
~~~

2. Instale o curl e o nvm:

~~~bash
sudo apt install curl -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
~~~

3. **Crie um script para instalar o nvm (recomendado):**

~~~txt
# REMOVE O NODE SE ELE EXISTIR
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*

# INSTALA O CURL
sudo apt install curl -y

# INSTALA O NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
~~~

**4. Rode o Script:**

* Abra um terminal com privilégios administrativos.
* Navegue até o diretório onde salvou o script (por exemplo, `cd ~/scripts`).
* Execute o script: `/bin/bash  nomedoarquivo.txt`.

**Após a execução do script, utilize o `nvm` normalmente como visto anteriormente.**

**Conclusão:**

Este documento fornece um guia abrangente para instalar o NodeJS e o gerenciador de versões nvm em diferentes sistemas operacionais. Lembre-se de sempre utilizar a versão LTS mais recente do NodeJS para maior estabilidade e segurança.

## Instalando extensões básicas do VSCode :

Abra seu Visual Studio Code e vá para a aba Extensions, no caso do windows poderá utilizar o atalho `ctrl+shift+x`(para windows), nela vamos instalar os seguintes items :

- **Code Runner** (um runer de diversos tipos de códigos incluindo NodeJS);
- **Color Highligth** (Adiciona uma camada de visualização de cores em códigos Hexadecimal, RGB/RGBA e afins);
- **EditorConfig for VS Code** (aciona o arquivo .editorconfig, padronizando assim alguns aspectos durante a codificação);
- **Live Server** (Principalmente nos primeiros módulos ele ajudará a agilizar o processo de desenvolvimento de designs e funcionalidades em client-side);
- **Material Icon Theme** (está extenção é totalmente opcional, mas ajuda a se encontrar melhor dentro dos diretórios ao longo do desenvolvimento);

## Conceitos básicos sobre variaveis javascript:

**O que é uma variável?**

Em JavaScript, uma variável é um espaço na memória do computador que armazena um valor. Ela é como um recipiente que você pode nomear e usar para guardar diferentes tipos de dados, como números, textos, listas, objetos, entre outros (não são fortemente tipadas).

**Criando variáveis:**

Para criar uma variável em JavaScript, você utiliza a palavra-chave `var`, seguida do nome da variável e do operador de atribuição `=`, e por fim, o valor que você deseja armazenar.

**Exemplo:**

~~~javascript
var nome = "João"; // Declara uma variável 'nome' com o valor "João"
~~~

**Tipos de dados:**

As variáveis em JavaScript podem armazenar diversos tipos de dados, como:

* **String:** Textos entre aspas simples ou duplas. Ex: "Olá, mundo!"
* **Number:** Números inteiros ou decimais. Ex: 10, 3.14
* **Boolean:** Valores `true` ou `false`. Ex: `true`, `false`
* **Array:** Uma lista ordenada de valores. Ex: `[1, 2, 3, "banana"]`
* **Object:** Uma coleção de dados nomeados. Ex: `{nome: "João", idade: 25}`

**Palavra-chave:**

* **var:** Usada para declarar variáveis com escopo global ou de função.


**Escopo:**

O escopo de uma variável define onde ela é acessível no código. As variáveis declaradas com `var` têm escopo global ou de função.

**Regras de nomenclatura:**

Os nomes das variáveis em JavaScript devem seguir algumas regras:

* Começar com uma letra, sublinhado (_) ou cifrão ($).
* Conter apenas letras, números, sublinhados e cifrões.
* Não ser uma palavra-chave reservada da linguagem.

**Boas práticas:**

* Escolha nomes descritivos para suas variáveis.
* Utilize camelCase para nomes compostos.
* Evite usar palavras-chave reservadas.
* Utilize comentários para explicar o que cada variável armazena.

As variáveis são um conceito fundamental e essenciais para a criação de programas eficientes e legíveis.


## Utilizando variaveis :

As variaveis podem ser usadas para uma série de coisas, no caso dessa aula iremos apenas demonstrar que podemos realizar calculos, e além disso aprenderemos como mostrar este resultado dentro de um console apartir do Code Runner, para esse exeplo vamos declarar variaveis cahamadas `x`, `y`, `z`, atriburi com o sinal de atribuição `=` valores numéricos ao `x` e `y` e realizar um calculo, atribuindo seu rezultado a variavel `z`, veja :

~~~javascript
var x, y, z;
x = 2;
y = 4;
z = x + y; //z está recebendo a soma dos valores que x e y carregam
~~~

Perceba que qualquer valor que atribuirmos ao `x` ou `y` serão calculados autoimaticamente e atribuidos a variavel `z`, porém se rodarmos o code runner percebemos que nada acontece, e nada é escrito na tela do console, para escrevermos o resultado na tela deveremos utilizar o comando de palavra reservada `console` seguido de um `.`(quer dizer que o console deve executar um subcomando que ele contenha) e `log` que faz um print dentro do console, veja a seguir :

~~~javascript
console.log(z);
~~~

Ao adicionar esta linha ao final do código anterior e agora rodar o código aparecerá o resultado do calculo antes visto;

## Sobre o comando `console` :

O comando `console` em JavaScript é um objeto global que fornece acesso ao console do navegador. Ele permite que você imprima mensagens, execute JavaScript, inspecione elementos da página e muito mais.

**Funcionalidades:**

* **Exibir mensagens:** A função `console.log()` é a mais utilizada para imprimir mensagens no console. Você pode usar essa função para exibir variáveis, valores de retorno de funções, resultados de cálculos e qualquer outro tipo de informação que deseje.
* **Executar JavaScript:** Você pode usar o console para executar qualquer código JavaScript. Isso pode ser útil para testar trechos de código, depurar problemas ou executar comandos que não são possíveis através da interface do usuário do navegador.
* **Inspecionar elementos da página:** O console fornece ferramentas para inspecionar elementos da página web. Você pode usar o comando `console.dir()` para visualizar as propriedades e métodos de um objeto, e o comando `console.table()` para visualizar uma tabela com os dados de um objeto.
* **Depurar problemas:** O console é uma ferramenta essencial para depurar problemas em seu código JavaScript. Você pode usar o comando `console.log()` para imprimir mensagens que o ajudarão a identificar a origem do problema.
* **Limpar o console:** O comando `console.clear()` limpa o console, removendo todas as mensagens que foram exibidas anteriormente.

**Exemplos de uso:**

* **Exibir uma mensagem:**

~~~javascript
console.log("Olá, mundo!");
~~~

* **Executar um código JavaScript:**

~~~javascript
console.log(1 + 2); // Exibe o resultado da soma
~~~

* **Inspecionar um elemento da página:**

~~~javascript
console.dir(document.getElementById("meuElemento"));
~~~

* **Depurar um problema:**

~~~javascript
var x = 10;
console.log("Valor de x:", x);

// ... código que causa o problema ...

console.log("Valor de x após o problema:", x);
~~~

**Observações:**

* O console está disponível em todos os navegadores modernos.
* A forma de acessar o console varia de acordo com o navegador.
* No Chrome, você pode abrir o console pressionando `Ctrl`+`Shift`+`I` (Windows) ou `Cmd`+`Option`+`I` (Mac).
* No Firefox, você pode abrir o console pressionando `Ctrl`+`Shift`+`K` (Windows) ou `Cmd`+`Option`+`K` (Mac).

O comando `console` é uma ferramenta poderosa que pode ser usada para diversos fins, como exibir mensagens, executar JavaScript, inspecionar elementos da página e depurar problemas. É uma ferramenta essencial para qualquer desenvolvedor JavaScript.



**Recursos adicionais:**

* W3Schools - JavaScript Variables: [site](https://www.w3schools.com/js/js_variables.asp)
* W3Schools - JavaScript Console: [site](https://www.w3schools.com/jsref/obj_console.asp)
* Mozilla Developer Network - Debugging with the Web Console: [site](https://developer.mozilla.org/en-US/docs/Web/API/console)

