const colores = ['Rojo', 'Amarillo', 'Azul'];

/* 
	.length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores.length);

/*
	.toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

//document.body.innerHTML = colores.toString();


/*
    .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

console.log(colores.join('/'))

/*
	.sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
    Tambien ordena numeros de forma ascendente 
*/

const letras = ['e', 'i', 'b', 'a', 'd']
const numeros = [4, 1, 3, 2]
console.log(letras.sort())
console.log(numeros.sort())

/*
	.reverse()
	Nos permite ordenar un arreglo de forma descendente ya sean letras o numeros. 
*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*
	.concat()
	Nos permite juntar dos arreglos en uno solo. 
*/


const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

const array3 = array1.concat(array2);

console.log(array3);


/* 
	.push()
	Nos permite agregar un elemento al final de un arreglo.
*/

colores.push('Verde');
console.log(colores);

/*
	.pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/

colores.pop();
console.log(colores);

/* 
	.shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']; 

const diaEliminado = dias.shift();
console.log(dias);
console.log(diaEliminado);

/*
	.unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

dias.unshift('lunes');
console.log(dias);


/* 
	.splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/

const amigos = ['rendon', 'juan', 'marian'];
console.log(amigos);
amigos.splice(0, 2, 'fede', 'nicolas');
console.log(amigos);


/* .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/

const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);


