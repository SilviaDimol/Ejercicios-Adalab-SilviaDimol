'use strict';

//Uan función para hallar la media.
function average(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(average(10, 10, 10, 10));
console.log(average(2, 4, 6, 8));
console.log(average(2, 2, 4, 4));

/*EJERCICIO 3
Ticket con IVA
Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/

//const showResult = document.querySelector('.text');*/
const result = function ticketConIVA(precio) {
    return `Precio sin IVA: ${precio}, IVA: ${precio * 0.21} y total: ${precio + precio * 0.21}`;
}
console.log(result(5));
//showResult.innerHTML = result(5);

/*EJERCICIO 4
Pares o nones
Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
Ejecutala e imprime el resultado para comprobar que funciona.*/

const showResult = document.querySelector('.text');
function odd(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

showResult.innerHTML = odd(1);