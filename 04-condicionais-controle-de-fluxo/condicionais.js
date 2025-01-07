//Ternário
let age = 16;
console.log(age >= 18 ? 'Pode dirigir' : 'Não pode dirigir');

/**
 * FALSY é quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde um boolean é
 * obrigatório (condicionais e loops)
 */

console.log("### Exemplos de FALSY ###");
console.log(false ? "VERDADEIRO" : "FALSO");
console.log(0 ? "VERDADEIRO" : "FALSO");
console.log(-0 ? "VERDADEIRO" : "FALSO");
console.log(null ? "VERDADEIRO" : "FALSO");
console.log("" ? "VERDADEIRO" : "FALSO");
console.log(undefined ? "VERDADEIRO" : "FALSO");
console.log(NaN ? "VERDADEIRO" : "FALSO");

console.log("### Exemplos de TRUTHY ###");
console.log(true ? "VERDADEIRO" : "FALSO");
console.log({} ? "VERDADEIRO" : "FALSO");
console.log([] ? "VERDADEIRO" : "FALSO");
console.log(1 ? "VERDADEIRO" : "FALSO");
console.log(3.14 ? "VERDADEIRO" : "FALSO");
console.log(-1 ? "VERDADEIRO" : "FALSO");
console.log("oi" ? "VERDADEIRO" : "FALSO");
console.log(" " ? "VERDADEIRO" : "FALSO");

//If
let hour = 23;

if (hour < 12) {
    console.log('Bom dia!');
} else if (hour >= 12 && hour <= 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

//Switch case

let options = 3;

switch (options) {
    case 1:
        console.log('Consultar pedido');
        break;
    case 2:
        console.log('Falar com atendente');
        break;
    case 3:
    case 4:
        console.log('Falar com suporte');
        break;
    default:
        console.log('Nenhuma das opções selecionadas');
}