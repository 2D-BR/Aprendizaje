/*
    Named exports
*/
/*//importar con otra nomenclatura
//import { nombre as NombreImportado, obtenerPosts } from "./namedExports";

import { nombre, obtenerPosts } from "./namedExports";
console.log('Mi nombre es ' + nombre);

const post = obtenerPosts();
console.log(post);*/


/* 
    Namespace Imports
*/
/*
import * as datos from './namedExports';
console.log(datos.nombre);
console.log(datos.obtenerPosts());*/

/* 
	Default Imports
*/

import  obtenerUsuario  from './defaultExports';
const usuario = obtenerUsuario();
console.log(usuario);


/* 
	Empty Imports
	Carga todo el codigo pero sin hacer ningun objeto.
*/

import './emptyExport';
import { correo } from './emptyExport';//importar variables ya que con esta forma, este tipo de cosas no se pueden ejcutar
console.log(correo);