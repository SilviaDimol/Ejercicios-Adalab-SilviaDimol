'use strict';

// Constantes generales
const input = document.querySelector(‘.js-numberInput’);
const button = document.querySelector(‘.js-button’);
const clue = document.querySelector(‘.js-clue’);
const form = document.querySelector(‘.js-form’);

// Crear un número random
const randomNumber = getRandomNumber(100);

// Eventos
button.addEventListener(‘click’, handleClick);

// Funciones
// Función que comprueba el número
function checkNumber() {
    const userNumber = parseInt(input.value);
    if (userNumber === randomNumber) {
        clue.innerHTML = ‘¡Lo has adivinado!’;

        else if (userNumber < randomNumber) {
            clue.innerHTML = ‘el número que buscas es más grande’;
        }
        else if (userNumber > randomNumber) {
            clue.innerHTML = ‘el número que buscas es más pequeño’;

        }
    }
    // Función que ejecuta lo importante
    function handleClick(ev) {
        ev.preventDefault();
        checkNumber();
    }
    // PreventForm para evitar efectos predeterminados
    function preventForm(ev) {
        ev.preventDefault();
    }
    // Función que crea el número random
    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
    }
    console.log(‘Este es el número que buscas: ’ + getRandomNumber(100));

