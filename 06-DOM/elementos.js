const guests = document.querySelector('.guests');

const newGuest = document.createElement('li');
const guestName = document.createElement('span');
guestName.textContent = 'Benício';

//Append adiciona no final
newGuest.append(guestName);

//Prepend adiciona no começo
guests.prepend(newGuest);