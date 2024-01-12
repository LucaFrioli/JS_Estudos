function subtra(x, y) {
    return x - y;
}
//Primeiramente devemos entender que só pode existir apenas uma exportação padrão (export default) em cada módulo. Isso se deve por conta que quando se faz a chamada do modulo com um nome generico, sem utilizar chaves, ou a palavra reservada as. O interpretador javascript entenderá que estamos nos referindo ao export default

function multiplica(x, y) {
    return x * y;
}

export const divide = (x, y) => x / y;

export { subtra as default, multiplica };//poderiamos adicionar diretamente default na função de modo local  como o seguinte comentário :

// export default function subtra(x, y) {
//     return x - y;
// }
