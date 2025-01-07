
function message(username) {
    console.log(`Olá, ${username}`);
}

message('Danilo');
message('Tolete');


function sum(a, b) {
    console.log(a+b);
}

sum(2,6);
sum(8,10);
sum(7,9);


function joinText(text1, text2, text3 = 'Marques') {
    console.log(text1, text2, text3);
}

joinText('Danilo', 'Carlos');


function multiply(num1, num2) {
    return num1 * num2;
}

let result = multiply(14,3);
console.log(result);

/**
 *
 * @param {String} email user email
 * @param {String} password more then 6 characteres
 * @returns {Number} user id
 */
function signIn(email, password) {
    //fluxo de autenticacão

    return 7;
}

signIn('marquesdanilocarlos@gmail.com', '123456');


let showMessage = function(message) {
    console.log(message);
};

showMessage('Danilo Anonimous');


let arrowFunction = (message) => {
    return `ArrowFunction do ${message}`;
};

console.log(arrowFunction('Marques'));