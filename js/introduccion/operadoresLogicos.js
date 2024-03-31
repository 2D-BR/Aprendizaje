/*  Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

const nom = 'David';
const edad = 17;
const entrada = true;
const permiso = true;

/*ejemplo And &&
    const acceso = edad >= 18 && entrada;
    console.log('Acceso permitido al concierto: ' + acceso);
*/

/* ejemplo Or ||
    const acceso = (edad >= 18 && entrada) || (permiso && entrada);
    console.log('Acceso permitido al concierto: ' + acceso);
*/

// ejemplo Not !
const variable = true;
console.log(!variable);