'use strict';

/*EJERCICIO 3
Bio de Adalabers 2
Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?*/

const adalaber4 = {
    name: 'Juana',
    age: 60,
    career: 'Profesora',
    showBio: function() {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.career}.`);
    }
};

adalaber4.showBio();