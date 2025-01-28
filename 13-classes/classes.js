class Animal {
    constructor (name) {
        this.name = name;
    }
    makeNoise() {
        console.log('Som genérico');
    }
}

class Dog extends Animal {

}

let dog = new Dog();
dog.makeNoise();