// mudanças de valores, e lógica de programação básica;

let a = 2, b = 4, c = 6;
console.log(`os valores consecutivos são : a= ${a}, b= ${b}, c= ${c}`);
//Agora devemos fazer o valor de a receber o de b,o de b receber o de c e o de c recebr o de a;

//está é uma solução mais estrutural existe também uma segunda solução possível
let auxiliar;
auxiliar = a;
a = b;
b = c;
c = auxiliar;

console.log(`Os valores alternados são : a= ${a}, b= ${b}, c= ${c}`);

//vamos retornar os valores ao normal com este método, oas valores passama avaler o da array contraria
[a,b,c]=[c,a,b];
console.log(`OS valore retornarão como no início: a= ${a}, b= ${b}, c= ${c}`);