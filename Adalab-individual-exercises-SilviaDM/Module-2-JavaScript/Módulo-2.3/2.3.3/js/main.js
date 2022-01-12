'use strict';

//Declaro constantes
const number = 5
const text = document.querySelector('.text');

//Condicional
if (number === 10) {
    text.innerHTML = 'Este es el número correcto';
  } else if (number > 10) {
    text.innerHTML = 'El número es más bajo';
  } else if (number < 10) {
    text.innerHTML = 'El número es más alto';
  } else {
    text.innerHTML = 'Esto no es un número';
  }