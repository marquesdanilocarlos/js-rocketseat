//Seleciona inputs do formulário
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const expense = document.querySelector('#expense');
const category = document.querySelector('#category');

//Elementos da lista
const expenseList = document.querySelector('ul');


amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "");
    value = value / 100;
    amount.value = brlCurrency(value);
};

function brlCurrency(value) {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

form.onsubmit = e => {
    e.preventDefault();

    const newExpense = {
        id: Date.now(),
        expense: expense.value,
        categoryId: category.value,
        categoryName: category.options[category.selectedIndex].text,
        amount: amount.value,
        createdAt: new Date(),
    };

    addExpense(newExpense);
};

function addExpense(newExpense) {
    try {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `img/${newExpense.categoryId}.svg`);
        expenseIcon.setAttribute('alt', newExpense.categoryName);

        expenseItem.append(expenseIcon);
        expenseList.append(expenseItem);

    } catch (error) {
        alert('Não foi possível atualizar a lista de despesas.');
        console.log(error.message);
    }
}