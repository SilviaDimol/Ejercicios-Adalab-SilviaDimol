'use strict';

/*EJERCICIO 6
Tenemos mucho en común
Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.*/


const yourFavouriteFilm = ['Lo que el viento se llevó', 'Sonrisas y lágrimas', 'Amélie'];

for (const movie of yourFavouriteFilm) {
    console.log('¡A mí también me encantó ' + movie + ' Tenemos mucho en común, humana.');
}