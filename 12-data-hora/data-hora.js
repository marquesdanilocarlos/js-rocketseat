//Data e hora atual
console.log(new Date());

//Data e hora inicial
console.log(new Date(0));

//Obtem o número em milissegundos
console.log(new Date().getTime());


let specificDate = new Date(2025, 0, 26);
console.log(specificDate);

let specificDateTime = new Date(2025, 0, 26, 12, 47, 0);
console.log(specificDateTime);

let dateByString = new Date("2026-01-26");
console.log(dateByString);

let dateByUTCString = new Date("2025-01-26T12:48:00");
console.log(dateByUTCString);

let dateByLongString = new Date("January 26, 2025");
console.log(dateByLongString);