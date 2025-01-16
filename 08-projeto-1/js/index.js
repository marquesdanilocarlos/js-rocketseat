const USD = 6.20;
const EUR = 5.32;
const GBP = 6.03;

const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const description = document.querySelector('#description');
const result = document.querySelector('#result');

amount.addEventListener('input', e => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
});

form.onsubmit = (e) => {
    e.preventDefault();

    const amountValue = amount.value;

    switch (currency.value) {
        case 'USD':
            convertCurrency(amountValue, USD, "US$");
            break;
        case 'EUR':
            convertCurrency(amountValue, EUR, "€");
            break;
        case 'GBP':
            convertCurrency(amountValue, GBP, "£");
            break;
    }
};

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
        result.textContent = `${formatCurrencyBRL(amount*price)} reais`.replace('R$', '');
        footer.classList.add('show-result');
    } catch (e) {
        console.log(e);
        alert('Não foi possível converter');
        footer.classList.remove('show-result');
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}