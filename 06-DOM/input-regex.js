const input = document.querySelector('input');

const form = document.querySelector('form');

input.addEventListener('input', (e) => {
    const value = e.target.value;
    const regex = /\D+/g;

    //Retorna o padrão encontrado na string
    //console.log(value.match(regex));

    //Testa de atende o padrão
    const isValid = regex.test(value);
    console.log(isValid);


});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regex = /\D+/g;

    if (!regex.test( input.value)) {
        alert('Valor inválido, digite corretamente.');
        return;
    }

    //Substitui com base na regex
    const value = input.value.replace(regex, '');
    console.log(value);
})