/*  Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre = 'david';
console.log(nombre)

const saludo = () => {
    console.log('hola ' + nombre);

    nombre = 'Arturo';
    console.log('El nuevo nombre es: ' + nombre);
};

function saludo1() {
    console.log('hola ' + nombre);

    nombre = 'david';
	console.log('El nombre vuelve hacer: ' + nombre);
}

saludo();
saludo1();