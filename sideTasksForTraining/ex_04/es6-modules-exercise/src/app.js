//lembre-se de executar "npm i" antes de testar o exemplo
import concatenar, { inverter } from "./stringManipulation";
import * as calculus from "./mathOperations";

const teste01 = concatenar(`um`, 2, `sei lá`);
console.log(teste01);

const teste02 = inverter(teste01);
console.log(teste02);

const result = calculus.default(1, 2);

console.log(result);
