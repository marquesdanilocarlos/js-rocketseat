const input = document.querySelector('#name');

//Adiciona uma classe
input.classList.add('input-error');

//Remove a classe
input.classList.remove('input-error');

//Alterna entre incluir e remover a classe
input.classList.toggle('input-error');

const button = document.querySelector('button');
button.style.background = '#006699';
button.style.color = '#FFF';