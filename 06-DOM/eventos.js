//Adiciona evento na página inteira
window.addEventListener('load', () => {
    console.log('Página carregada!');
});

//Evento num elemento específico
const button = document.getElementById('btn');
button.addEventListener('click', (e) => {
    //Previne comportamento padrão
    e.preventDefault();

    //Todas as informações do evento
    console.log(e);
});