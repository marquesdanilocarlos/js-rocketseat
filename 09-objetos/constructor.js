function CreateProduct(name) {
    const product = {};
    product.name = name;
    product.details = function(){
        return `The product name is ${name}`;
    }
    return product;
}

const product1 = new CreateProduct('Keyboard');
console.log(product1.name);
console.log(product1.details());

const product2 = new CreateProduct('Mouse');
console.log(product2.name);
console.log(product2.details());

console.log(product1 === product2);


let myName = new String('Danilo');
console.log(myName);

function Person(name) {
    this.name = name;
    this.message = function(){
        console.log(`Hello ${this.name}!`);
    }
}

const person = new Person('Danilo');
console.log(person.name);
person.message();