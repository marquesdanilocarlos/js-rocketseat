//Adiciona evento na página inteira
window.addEventListener('load', () => {
    console.log('Página carregada!');
});

//Evento num elemento específico
const button = document.getElementById('btn');
/*button.addEventListener('click', (e) => {
    //Previne comportamento padrão
    e.preventDefault();

    //Todas as informações do evento
    console.log(e);
});*/

//Lidando com eventos padrão
const form = document.querySelector('#form');

form.onsubmit = (e) => {
    e.preventDefault();

    console.log('Submit do formulário');
};

const input = document.querySelector('input');
/*input.addEventListener('keyup', e => {
    console.log(e.key);
});*/

//Não captura acionamento de teclas como CTRL e SHIFT
input.addEventListener('keypress', (e) => {
    console.log(e.key);
});

let inputChange = (e) => {
    console.log('Valor do input mudou');
};
input.onchange = inputChange;