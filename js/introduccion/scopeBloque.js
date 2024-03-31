/*   Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

/*
const edad = 19;
if (edad >= 18) {
    const accesoPermitido = true;
    if (true) {
        console.log(accesoPermitido);
    }

    function mifuncion() {
        console.log(accesoPermitido);
    }
    mifuncion();
}

const accesoPermitido = 'si';
console.log(accesoPermitido);
*/

if (true) {
    var nombre = 'davd';// con var la variable se desentiende del bloque y se puede tomar en cualquier parte del codigo
}
console.log(nombre);