/* .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 4, 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
//console.log(nombres.indexOf('david'));


/* 
	.lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
//console.log(nombres.lastIndexOf('Rafael'));


/* 	
	.forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
/*nombres.forEach((nombre,index) => {
   console.log(`hola ${nombre} (${index})`) 
});*/


/* 
	.find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
/*
const result = nombres.find((nombre) => {
    if (nombre[0] === 'E') {
        return nombre;
    }
});
console.log(result);*/


/* 
	.map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
/*
const Mayusnom = nombres.map((nombre) => {
	return nombre.toUpperCase();
});
console.log(Mayusnom);*/

//otra foram de hacer funcion flecha que retorne
// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);


/*  .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
/*const nom4_letras = nombres.filter((nombre) => {
	if (nombre.length == 6) {
		return nombre;
	}
});
console.log(nom4_letras);*/


/* 
	.includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
//console.log(nombres.includes('Julio'));
//console.log(nombres.includes('Rafael'));

/* 
	.every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
/*const resultEvery = nombres.every((nombre) => { 
	if (typeof nombre === 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿Todos los nombres son validos? ' + resultEvery);*/


/* 
	.some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/

const resultSome = nombres.some((nombre) => { 
	if (typeof nombre !== 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿arreglo invalido? ' + resultSome);
// true si hay algun valor invalido
// false si no hay algun valor invalido