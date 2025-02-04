//Seleciona inputs do formulário
const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const expense = document.querySelector('#expense');
const category = document.querySelector('#category');

//Elementos da lista
const expenseList = document.querySelector('ul');

const expenseQuantity = document.querySelector('aside>header>p>span');

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
        //Item da lista
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        //Ícone do item
        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `img/${newExpense.categoryId}.svg`);
        expenseIcon.setAttribute('alt', newExpense.categoryName);

        //Caixa do item
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        //Título e categoria do item
        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.categoryName;

        //Informações de valor do item
        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`;

        //Ícone de remover
        const removeIcon = document.createElement('img');
        removeIcon.classList.add('remove-icon');
        removeIcon.setAttribute('src', `img/remove.svg`);
        removeIcon.setAttribute('alt', `Remover`);

        expenseInfo.append(expenseName, expenseCategory);
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
        expenseList.append(expenseItem);

        updateTotals();
    } catch (error) {
        alert('Não foi possível atualizar a lista de despesas.');
        console.log(error.message);
    }
}

function updateTotals() {
    try {
        const items = expenseList.children.length;

        expenseQuantity.textContent = `${items} ${items > 1 ? 'despesas' : 'despesa'}`;
    } catch (error) {
        console.log(error);
        alert('Não foi possível atualizar os totais');
    }
}