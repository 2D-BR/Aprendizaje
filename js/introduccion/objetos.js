const personArray = ['David', 21, 'correo@correo.co', true, true];

const person = {
    nombre: 'carlos',
    edad: 27,
    correo: 'davidcorreo@.co',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavorito: ['negro', 'blanco'],
    salud: function () {
        alert('hola!')
    }
};

/*
console.log(person.suscripciones.web);
console.log(person['edad']);

const variable = 'correo';
console.log(person[variable]);
*/

person.pais = 'colombia';
console.log(person);


person.salud();
