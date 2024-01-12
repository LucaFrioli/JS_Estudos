//modulos são  arquivos que carregam informações que só poderão ser acessadas apartir de exportações/importações, podemos fazer uma analogia de um js module com um país, e o código são os recursos naturais deste país, que ele pode exportar caso necessário, e pode requisitar a um país vizinho um recurso que ele contenha, ou seja ele importa (a função,classe, estrutura de dado... etc.), de um outro país(js module);

import { name as nameImport, lnImport, age, sum, hello } from "./modulo1";//tudo que está dentro de chaves, é o que estamos querendo trazer do modulo.
//caso tenhamos uma variavel já declarada com um mesmo nome de importação original, podemos atribuir uma mascara de uso para os imports, observe o caso de name e lastname, para atribuir uma mascara de uso utilizamos a palvara reservada as tanto no import como export, name se transforma em nameImport e lastname se transforma em lnImport;
import * as teste from "./person";//qunado usamos um asterisco e damos uma mascara tudo que esta constido no modulo é importado

//podemos também realizar importações padrões veja o arquivo que o import referencia, isso permite renomear o default conforme a necessidade do consumo do modulo;
import subtrai, { divide, multiplica } from "./modulo2";//sempre que importar sem chaves ou palavra reservada as, estaremos importando o default, e ainda assim podemos importar o resto dos exports, que é o caso das chaves

hello();

console.log(`\n Aqui está o objeto que contem todos os itens do modulo person.js : `, teste);


const name = `José`;
const lastname = `Tiradentes`

const p1 = new teste.Person(`Maria`, `Madalena`);

console.log(`\n`, name, lastname, age, `\nA soma de 3 e 5 é ${sum(3, 5)}`);
console.log(nameImport, lnImport, age, `\nA soma de 7 e 5 é ${sum(7, 5)}`);//utilizando o valor do import
p1.showCompleatName();
console.log(subtrai(7, 2));
console.log(divide(7, 2));
console.log(multiplica(7, 2));
