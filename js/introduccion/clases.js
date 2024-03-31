/*
	.Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

class Usuario{
    tipo = 'usuario';

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        
        console.log('Nuevo usuario registrado!');
    }

    obtenerNombreCompleto() {
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }

}


const usuario1 = new Usuario('David', 'Buitrago');
console.log(usuario1.nombre);
console.log(usuario1.obtenerNombreCompleto());



const usuario2 = new Usuario('Fede', 'Perez');
console.log(usuario2.nombre);
console.log(usuario2.obtenerNombreCompleto());
