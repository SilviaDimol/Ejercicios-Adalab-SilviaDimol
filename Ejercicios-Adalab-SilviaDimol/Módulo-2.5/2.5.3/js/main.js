'use strict';

//Constantes
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');

//Función, handler
function touchText() {
    const newcontent = '<p>New lorem ipsum</p>';
    text2.innerHTML = newcontent;
}

//Listener
text.addEventListener('mouseover', touchText);