//Seleciona inputs do formulário
const amount = document.querySelector('#amount');


amount.oninput = () => {
  amount.value = amount.value.replace(/\D/g, "");
};