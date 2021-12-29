'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

// añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.
const image = document.querySelector('.user__avatar');
image.src = userAvatar;

//Poner que el avatar no tenía URL, que estaba vacío.
/*let userAvatar = ''*/

//que la ficha de usuario tenga una imagen sí o sí.
image.src = userAvatar || DEFAULT_AVATAR;