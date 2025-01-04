/**
*Conversão de tipos (type casting): ocorre quando você, explicitamente, transforma um valor de um tipo para outro.
*Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão/
 * */

console.log(typeof "9");
console.log(typeof Number("9"));

let idade = 36;
console.log(typeof idade.toString());
console.log(typeof String(idade));

console.log(Boolean(28))
console.log(Boolean(0))


/**
 * Coerção de tipos: Acontece de forma automártica (implicitamente). O JS tenta automaticamente converter um dos valores
 * para um tipo compatível antes de realizar a operação.
 */

let calc = "10" + 5;
let sub = "10" - 5;
console.log(calc, typeof calc);
console.log(sub, typeof sub);