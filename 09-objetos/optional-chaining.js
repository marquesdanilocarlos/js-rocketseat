const user = {
    email: 'john@gmail.com',
    age: 33,
    name: 'Danilo',
    /*address: {
        street: 'Street',
        number: '10A',
        city: 'City',
        postalCode: '73753-000',
        geolocation: {
            latitude: 47.453,
            longitude: 17.369,
        }
    },*/
    /*message(){
        console.log(`Olá, ${this.name} !`);
    }*/
};

console.log(user?.address?.street || 'Propriedade não existe');
user.message?.()