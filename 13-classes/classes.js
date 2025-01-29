class Animal {
    constructor (name) {
        this.name = name;
    }
    makeNoise() {
        console.log(`Som genérico do ${this.name}!`);
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log('Wooof!');
    }
}

class Cat extends Animal {
    makeNoise() {
        console.log('Miau!');
    }
}

let dog = new Dog('Cachorro');
dog.makeNoise();

let cat = new Cat('Gato');
cat.makeNoise();