const obj = {};
console.log(obj);
console.log(typeof obj);

const user = {
    email: 'john@gmail.com',
    age: 33,
    name: {
        firstName: 'John',
        lastName: 'Doe',
    },
    address: {
        street: 'Street',
        number: '10A',
        city: 'City',
        postalCode: '73753-000',
    },
    message(){
        console.log('Oi Usuário!');
    }
};