'use strict';

//Declaro constantes
const inputName = document.querySelector('.name');
const button = document.querySelector('.button');

//Handler
function pushButton() {
    if (inputName.value !== '') {
        console.log(`Hola, ${inputName.value}`);
    } else {
        console.error('Error: input vacío');
    }
}

//Listener
button.addEventListener('click', pushButton);
