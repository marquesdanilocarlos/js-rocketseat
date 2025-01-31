//Seleciona inputs do formulário
const amount = document.querySelector('#amount');


amount.oninput = e => {
  console.log(e.target.value);
};