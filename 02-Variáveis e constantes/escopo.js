//Não da erro (hoisting)
//Undefined
console.log(nome);

//Não funciona com let
console.log(endereco);

var nome = 'Danilo';
let endereco = 'Rua sem nome 08';

//Escopo global
//Funciona dentro do escopo da função
var email = 'danilo@email.com';

function teste(){
    console.log(email);
}

if (true){
    //Escopo global, vai funcionar no escopo de bloco
    var age = 55;

    //Escopo local, não funciona fora do bloco
    let sobrenome = 'Carlos';
}

//Funciona devido ao escopo global de var
console.log(age);

//Não funciona, devido ao escopo local de let
console.log(sobrenome);

teste();