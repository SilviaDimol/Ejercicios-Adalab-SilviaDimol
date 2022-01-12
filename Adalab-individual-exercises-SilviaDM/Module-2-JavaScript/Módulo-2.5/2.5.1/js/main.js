'use strict';

//Declaro las constantes
const button = document.querySelector('.button');
const text = document.querySelector('.text');

//Handler
function activeButton() {
    text.innerHTML = 'Mi pirmer click, ¡ole yo y la mujer que me parió'
}

//Listener
button.addEventListener('click', activeButton);