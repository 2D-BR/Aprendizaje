//window.alert();//mismo que alert, ya que los metodos window son globales.

console.log(`la ventana de tu navegdor mide ${window.innerWidth}px de ancho`);
console.log(`la ventana de tu navegdor mide ${window.innerHeight}px de ancho`);

/* 
	window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'nuevaVentana', 'width=500,height=500');
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!</h1>');
};  


const cerrarVentana = () => {
    ventana.close();
};



/*
	Screen Object
	Representa la pantalla del usuario.
*/
console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

console.log('Ancho de pantalla sin barra de Windows:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de Windows:', window.screen.availHeight);