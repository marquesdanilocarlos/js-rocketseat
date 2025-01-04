//String
let userName = "Toledo";
console.log(typeof userName);

let userMail = 'toledao@gmail.com';

//Quando utilizar "" ou ''
console.log('Utilizar aspas simples quando tem "aspas duplas" dentro do texto');
console.log("Utilizar aspas duplas quando tem 'aspas simples' dentro do texto");

console.log('Só pode concatenar ->' + userMail);
console.log("Só pode concatenar ->" + userName);

//Template Literals

console.log(`Permite
quebra
de
linha
literal
`);


console.log(`Permite interpolar o valor de variáveis como: ${userMail}`);