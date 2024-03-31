/*
	.Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
 console.log(comidaFavorita);

const datosLogin = {
	nombre: 'Arturo',
 	correo: 'correo@correo.com',
    password: '123',
};

const usuario  = {
    ...datosLogin,
    nombre: 'david', //sobre escribe el "nombre"
    edad: 22,
};

console.log(usuario);


/*
	.Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {//funcion flecha
    console.log(nombre, correo, datosAdicionales);
};
registrarUsuario('Carlos', 'correo@correo.com');
registrarUsuario('Alejandro', 'alex@correo.com', 28, 'España');

function registrarUsua(nombre, correo, ...datosAdicionales) {
    console.log(nombre, correo, datosAdicionales);
}
registrarUsua('Carlos', 'correo@correo.com');
registrarUsua('Alejandro', 'alex@correo.com', 28, 'España');


/*
	.Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];

const [amigo1, amigo2, amigo3] = amigos;
console.log(amigo2);

const persona = {
	nombre: 'Carlos',
	edad: 27,
	pais: 'México',
};

const { nombre, pais, edad } = persona;
console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => {//funcion flecha.
	console.log(`${nombre} tiene ${edad} años`);
}; 
mostrarEdad(persona);

function mostrarYears({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarYears(persona);