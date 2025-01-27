/*
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
console.log(dateByLongString);*/

let date = new Date("January 26, 2025 13:01:00");

//Obtém dia da semana, de 0 a 6
console.log(date.getDay());

//Dia do mês, de 0 a 30
console.log(date.getDate());

//Mês de 0 a 11
console.log(date.getMonth())

//Hora
console.log(date.getHours());

//Minutos
console.log(date.getMinutes());

//Segundos
console.log(date.getSeconds());

//Modificar data
date.setFullYear(2030);
date.setMonth(6);
date.setDate(10);
date.setHours(3);
date.setMinutes(36);
date.setSeconds(59);
console.log(date);

console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


console.log(date.toLocaleString('en-US'));

console.log(date.toLocaleString('pt-BR', {
    //dateStyle: 'short',
    /*dateStyle: 'medium',
    dateStyle: 'long',
    dateStyle: 'full',*/
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
}))

let amount = 12.5;
console.log(amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}));
