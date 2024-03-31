// Estructura de un condicional
// if (true) {
// Código a ejecutar
// }

// ej:
const user = {
    edad: 14,
    pais: 'Colombia',
    ticket: false
};

/*
if (user.edad >= 18){
    console.log("cumple con uno de los requisitos para entrar");
} else {
    console.log("el usuer no cumple");
}
*/

//ej:combinando operadores
/*
if ( (user.edad >= 18) && (user.ticket)){
    console.log("cumple con  los requisitos para entrar");
} else {
    console.log("el usuer no cumple");
}*/

//ej:Anindando condicionales
/*
if (user.edad >= 18){
    console.log("El usuario es mayor de edad ");
    if (user.ticket) {
        console.log('El usuario tiene ticket, cumple con los requisitos');
    } else {
        console.log('no tiene ticket no cumple');
    }
} else {
    console.log("el usuer no tiene edad no cumple");
}*/

//otra  forma
/*
if (user.edad >= 18) {
    if (user.ticket) {
 		console.log('El usuario es mayor de edad y tiene ticket.');
 	} else {
    		console.log('El user es mayor de edad, pero no tiene ticket.');
	}
    } else {
     	console.log('El user es menor de edad.');
     }
*/

if (user.pais === 'mexico') {
	console.log('El user es mexicano');
} else if (user.pais === 'colombia') {
	console.log('El user es colombiano');
} else if (user.pais === 'españa') {
	console.log('El user es español');
} else {
	console.log('El user es otro pais');
}
    

