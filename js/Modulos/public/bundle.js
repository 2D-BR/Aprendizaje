'use strict';

// Forma 1 - mediante palabras export default
/*export default () => {
    return {
        nombre: 'david',
        correo: 'correo@correo.com'
    };
};


//exportacion  de otro tipo de funcion
export default function () {
    return {
        nombre: 'david',
        correo: 'correo@correo.com'
    };
 }
*/


// Forma 2 - Final del documento
const obtenerUsuario = () => {
	return {
		nombre: 'Carlos',
		correo: 'correo@correo.com',
	};
};

console.log('soy codigo que se ejecuta desde el modlo emptyExports.js');

const correo = "correo@correo.com";

/*
    Named exports
*/
/*//importar con otra nomenclatura
//import { nombre as NombreImportado, obtenerPosts } from "./namedExports";

import { nombre, obtenerPosts } from "./namedExports";
console.log('Mi nombre es ' + nombre);

const post = obtenerPosts();
console.log(post);*/

const usuario = obtenerUsuario();
console.log(usuario);
console.log(correo);
