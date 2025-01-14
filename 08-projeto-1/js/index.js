const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const currency= document.querySelector('#currency');

amount.addEventListener('input', e => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
});

form.onsubmit = (e) => {
    e.preventDefault();

    console.log(currency.value);
};