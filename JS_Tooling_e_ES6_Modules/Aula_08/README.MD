## Configurando o que faltava :

Para utilizar algumas funcionalidades do js moderno em navegadores muito antigos, precisaremos atualizar algumas configurações envolvendo o Core-js e o regenerator-runtime. Consolidando um novo boilerplate, o mais atualizado até então, dentro da arquitetura atual.

Mudanças feitas :

Dentro do arquivo main.js(nosso arquivo principal) adicionaremos os seguintes imports :

~~~javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
~~~

são imports que permitirão uma "transpilção" legivel para navegadores antigos, como o finado internet explorer 9 á diante;

Se possível rode o código em um internet exploresr ou navegador da época, para notar a diferença.
