const input = document.querySelector('input');
const form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const hasNumberRegex = /\d+/g;

    if (hasNumberRegex.test(inputValue)) {
        alert('O texto contém números.');
        return;
    }

    alert('Enviado!');

};