'use strict';

// Declaro las constantes
const dogAge = 1;
const humanAge = document.querySelector('.human');

//Describo las condiciones

if (dogAge === 0) {
    humanAge.innerHTML = 'es un bebé';
} else if (dogAge === 1) {
    humanAge.innerHTML = 15;
} else if (dogAge === 2) {
    humanAge.innerHTML = 15 + 9;
} else if (dogAge > 2) {
    humanAge.innerHTML = 15 + 9 + (dogAge - 2) * 5;
} else if (dogAge < 0) {
    humanAge.innerHTML = 'no ha nacido aún';
}
