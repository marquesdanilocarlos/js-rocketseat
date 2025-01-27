class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(`Meu nome é ${this.name}!`);
    }
}

const person = new Person('Danilo',33);
person.sayName();

const newPerson = new Person('Samara', 29);
newPerson.sayName();