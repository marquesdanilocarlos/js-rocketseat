let message = 'Estou estudando os fundamentos do Javascript';

console.log(message);

console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.length);

let value = 12695;
console.log(value.toString().length);

console.log(message.replace('Javascript', 'PHP'));

console.log(message.slice(0, 5));
console.log(message.slice(-11));

console.log('  Texto com espaço    '.trim());


let creditCardNumber = '1234567812344298';
let lastDigits = creditCardNumber.slice(-4);
let maskedNumber = lastDigits.padStart(creditCardNumber.length, 'X');
console.log(maskedNumber);

let number = '123';
console.log(number.padEnd(10, '#'));

let text = 'Estudar, aprender, praticar';
let splited = text.split(',');

let joined = splited.join(' - ');
console.log(splited);
console.log(joined);