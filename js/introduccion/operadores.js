/* 
	=	Operador de asignacion. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicacion
	/	Division
	%	Modulo
	++	Aumento
	--	Disminucion
*/

// Ejemplo de suma usando +
const resultSuma = 10 + 10; // Suma de 10 mas 10
console.log(resultSuma); // Muestra el resultado de la suma

// Ejemplo de resta usando -
const resultResta = 10 - 10; // Resta de 10 menos 10
console.log(resultResta); // Muestra el resultado de la resta

// Ejemplo de modulo usando %
const modul0 = 10 % 2; // Calculo del modulo de 10 entre 2
console.log(modul0); // Muestra el resultado del modulo

// Ejemplo de aumento usando ++
let numero = 1; // Asignar un valor inicial
numero = numero + 1; // Incremento de 1 al valor de numero (manera uno)
console.log(numero); // Muestra el valor de numero despues del aumento

let num = 1;
num++; // Incremento de 1 al valor de num (manera dos)
console.log(num); // Muestra el valor de num despues del aumento

// Ejemplo de disminucion usando --
let numero1 = 3; // Asignar un valor inicial
numero1 = numero1 - 1; // Decremento de 1 al valor de numero1 (manera uno)
console.log(numero1); // Muestra el valor de numero1 despues de la disminucion

let num1 = 3;
num1--; // Decremento de 1 al valor de num1 (manera dos)
console.log(num1); // Muestra el valor de num1 despues de la disminucion


/* Operadores de Asignacion
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Multiplica el valor de una variable por un numero.
	/=	Divide el valor de una variable por un numero.
	%=	Calcula el resto de una division y lo asigna a la variable.
*/

// +=: Suma un valor a una variable
let n = 10;
n += 5; // n ahora es 15
console.log(n);

// -=: Resta un valor de una variable
let n1 = 10;
n1 -= 5; // n1 ahora es 5
console.log(n1);

/* Operadores de Comparacion:
==	Igual que
===	Igual en valor y tipo
!=	Diferente
!==	Diferente en valor o tipo
>	Mayor que
<	Menor que
>=	Mayor o igual que
<=	Menor o igual que
?	Operador ternario
*/

// >: Compara si un valor es mayor que otro
const resultadoMayor = 5 > 1; // true
console.log(resultadoMayor);

// >=: Compara si un valor es mayor o igual a otro
const resultadoMayorOigual = 10 >= 10; // true
console.log(resultadoMayorOigual);

// ===: Compara si dos valores son iguales en valor y tipo
const resultadoIgualYtipo = 10 === '10'; // false
console.log(resultadoIgualYtipo);

// ?: Operador ternario
const resulTernario = 7 > 10 ? 'El primer valor es mayor' : 'El segundo valor es mayor';
console.log(resulTernario);

