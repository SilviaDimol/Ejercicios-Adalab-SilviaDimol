'use strict';

//Crear nombre de acceso
const accessName = 'Silvia';
const accessControl = document.querySelector('.accessControl');

//Crear condicional para controlar acceso
if (accessName === 'Silvia') {
  accessControl.innerHTML = 'Bienvenida, Silvia';
} else {
  accessControl.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}