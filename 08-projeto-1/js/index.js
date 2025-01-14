const amount = document.querySelector('#amount');

amount.addEventListener('input', e => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
});