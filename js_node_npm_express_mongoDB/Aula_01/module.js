let name = `teste`;
let lastname = `lastname test`;

const sayHello = (name,lastname) => {
    console.log(`${name} ${lastname} diz olá`);
}

console.log(module);

module.exports.name = name;
module.exports.lastname = lastname;
module.exports.sayHello = sayHello;

console.log(module.exports);

//podemos utilizar no node o exports que já aponta para o objeto module.exports podendo assim omitir modules. :
name = `José`;
lastname = `Silva`;

exports.newName = name;
exports.newLastname = lastname;


//o this no caso se compreende como exports se referncia exports dentro do node
this.qualquerCoisa = `teste super this`

console.log(exports)
