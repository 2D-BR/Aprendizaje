/*
	.Ciclo forEach
	Es un método de los arreglos que podemos usar para recorrer los elementos.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];

amigos.forEach((amigo, index) => {
    console.log(`El amigo #${index} es: ${amigo}`);
});


/*
	.Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo.com',
};

for (i in persona) {
    console.log(persona[i]);
    persona[i] = ' ';
}
console.log(persona);


/*
	.Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/

const etiquetas = document.head.children;
//console.log(etiquetas);

for (elemento of etiquetas) { // con este metodo porque el forEach solo es para arreglos
    console.log(elemento);
}

[...etiquetas].forEach((etiqueta) => { 
    console.log(etiqueta);
});
