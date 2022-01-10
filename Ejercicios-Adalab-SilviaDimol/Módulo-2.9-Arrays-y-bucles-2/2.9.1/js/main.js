'use strict';

/* EJERCICIO 1
Numeritos
Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden. */


function get100Numbers() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      // otra forma: array[i] = i + 1; 
      array.push(i + 1);
    }
    return array;
  }
  
  const numbers = get100Numbers();
  
  for (const number of numbers) {
    console.log(number);
  }

/*EJERCICIO 2
Sotiremun
Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.*/

/*const arr = [1, 2, 3];
console.log(arr.reverse()); // Loguea 3,2,1
console.log(arr); // Loguea también 3,2,1 porque reverse modifica arr*/


  function getReversed100Numbers() {
    return get100Numbers().reverse();
  }
  
  const orderedNumbers = getReversed100Numbers();
  
  for (const orderedNumber of orderedNumbers) {
    console.log(orderedNumber);
  }