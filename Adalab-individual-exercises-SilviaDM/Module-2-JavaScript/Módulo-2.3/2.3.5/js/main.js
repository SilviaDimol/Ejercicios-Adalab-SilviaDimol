'use strict';

//Declaro las constantes
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

//Hago el condicional
if (container.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';
} else if (container.classList.contains('error')) {
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';
} else if (container.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
}

//Pruebo a ponerle clases

