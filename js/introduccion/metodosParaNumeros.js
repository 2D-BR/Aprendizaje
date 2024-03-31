/*
	.toString()
*/
 const numero = 10;
console.log(numero, typeof numero); 

const numtext = numero.toString();
console.log(numtext, typeof numtext);


/*
	.toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/

const numDecimal = 3.1416;
console.log(numDecimal.toFixed(2));
console.log(numDecimal.toFixed(10));


/*
	.parseInt()
	Intenta transformar un valor a un entero.
*/
//const num1 = parseInt(prompt('escribe un numero'));
//const num2 = parseInt(prompt('escribe un numero'));
//console.log(num1 + num2);


/*
	.parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
//const numero1 = parseFloat(prompt('Escribe un numero'));
//const numero2 = parseFloat(prompt('Escribe un numero'));
//console.log(numero1 + numero2);

/*
	'Math.random()
	Genera un numero al azar entre 0 y 1
*/

const numRan = Math.random();
console.log(numRan);

/*
	.Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));


/*
	.Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));


/*
	.Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round('10.1'));
console.log(Math.round('10.99'));


/*
	Ejemplo de numero al azar de 0 a 100
*/
const num = Math.random();
console.log(Math.floor(num * 101));



