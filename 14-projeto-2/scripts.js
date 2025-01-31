//Seleciona inputs do formulário
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const expense = document.querySelector('#expense');
const category = document.querySelector('#category');


amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "");
    value = value / 100;
    amount.value = brlCurrency(value);
};

function brlCurrency(value) {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

form.onsubmit = e => {
    e.preventDefault();
};