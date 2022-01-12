'use strict';

/*EJERCICIO 1
Bio de Adalabers
Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
Susana, 34 años, periodista
Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
'Mi nombre es Susana, tengo 34 años y soy periodista'
Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
Rocío, 25 años, actriz*/

const adalaber1 = {
    name: 'Susana',
    age: 34,
    career: 'Periodista'
};

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    career: 'actriz'
};

const container = document.querySelector('.container');

const text1 = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.career}.</p>`;

const text2 = `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.career}.</p>`;

container.innerHTML = text1 + text2;

/*EJERCICIO 2
A la carrera
Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.*/

adalaber1.run = 'Estoy corriendo';
console.log(adalaber1.run);

adalaber1.runMarathon = distance => console.log(`Estoy corriendo una maratón de ${distance} kilómetros.`)
console.log(adalaber1.runMarathon(50));
