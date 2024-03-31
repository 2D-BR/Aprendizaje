const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
    },
    saludo2: function () {//misma funcion diferente forma 
        console.log('Hola!');
    }
};

/*
    .Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
usuario.saludo2();


/*
	.Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const Llaves = Object.keys(usuario);
console.log(Llaves);

/*
	Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
const Claves = Object.values(usuario);
console.log(Claves);


/*
	Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const propiedades = Object.entries(usuario);

console.log(propiedades);

console.log(`El objeto tiene ${propiedades.length} propiedades`);