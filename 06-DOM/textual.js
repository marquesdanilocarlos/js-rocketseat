//Conteúdo textual visível e oculto da tag
const guest = document.querySelector('#guest-2');
console.log(guest.textContent);
//guest.textContent = 'Sinistro';

//Conteúdo somente conteúdo visível
console.log(guest.innerText);

//Conteúdo html da tag
console.log(guest.innerHTML);