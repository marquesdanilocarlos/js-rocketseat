const fruits = ['Apple', 'Banana', 'Orange', 'Watermelon'];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[1]);

console.log(fruits[fruits.length - 1]);

let fullName = "Danilo Carlos Marques";
console.log(fullName.split(' '));
console.log(Array.from(fullName));

let users = [];

users.push('Danilo');
users.push('João');
users.push('Marcos');
users.unshift('Ana');

console.log(users);

users.shift();
users.pop();

console.log(users);


let cars = ['Volvo', 'Honda', 'Fiat', 'Ford'];

let position = cars.indexOf('Honda');
console.log(position);

cars.splice(position, 1);
console.log(cars);

let mixedArray = ['texto', 10, false, ()=> alert('Função'), {'nome': 'Danilo'}, [20, 'array dentro de array']];

mixedArray[3]();

console.log(mixedArray[5][1]);

console.log(mixedArray.includes('texto'));