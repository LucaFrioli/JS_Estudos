# Trabalhando com Express + Nodemon.

Nodemon é uma ferramenta de linha de comando que automatiza o reinício de aplicações Node.js quando houver alterações nos arquivos de origem. Ela é muito útil para desenvolvimento, pois permite que sejam feitas alterações no código e veja elas em tempo real sem ter que reiniciar manualmente o servidor, apenas recarregando a página.

Para usar o nodemon, basta instalar o pacote nodemon através do NPM:

~~~bash
npm install --save-dev nodemon
~~~

Em seguida, podemos iniciar a aplicação Node.js usando o nodemon:

~~~bash
nodemon my-app.js
# Ou criar um script no package.json com o comando em valor
~~~

O nodemon irá monitorar o diretório atual e reiniciar o servidor sempre que houver alterações nos arquivos de origem.

O nodemon também permite que se configure quais arquivos devem ser monitorados. Para isso, podemos utilizar a opção `watch`:

~~~bash
nodemon --watch my-app.js,my-other-file.js
~~~

O nodemon também permite que seja configurado um tempo de espera antes de reiniciar o servidor. Para isso, podemos usar a opção `delay`:

~~~bash
nodemon --delay 1000
~~~

O nodemon é uma ferramenta essencial para qualquer desenvolvedor Node.js. Ela torna o desenvolvimento mais rápido e fácil, pois permite que se veja as alterações no código em tempo real.

Aqui estão alguns dos benefícios do uso do nodemon:

* **Agilidade:** O nodemon permite que sejam feitas alterações no código e as veja em tempo real, sem ter que reiniciar manualmente o servidor.
* **Eficiência:** O nodemon economiza muito tempo e esforço, pois não é necessário se preocupar em reiniciar o servidor manualmente.
* **Facilidade de uso:** O nodemon é fácil de configurar e usar.

