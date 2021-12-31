'use strict';

/*EJERCICIO 8
Botones de alarma
Vamos a partir de un HTML que tiene 3 botones con el texto ALARMA en un fondo blanco. Vamos a hacer que al pulsar en cualquiera de ellos, el fondo de la pantalla se ponga rojo. Si volvemos a pulsar en cualquiera de ellos, el fondo se pondrá blanco. Y así sucesivamente. Vamos a hacer uso de querySelectorAll para evitar repetir mucho código.*/

/*// Guardamos una lista de todos los parrafos de la página
const paragraphs = document.querySelectorAll('p');

// Modificamos el primer párrafo
paragraphs[0].innerHTML = 'Soy el primero';

// Muestra el número de parráfos que hay en nuestra web
console.log(paragraphs.length);

// Iteramos sobre todos los párrafos para asignarles a todos una clase
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('highlight');
}*/

const buttons = document.querySelectorAll('.alarmActive');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('.alarmActive');
}