/*
	window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

const saludo = () => {
    console.log('hola');
}

let id;
const iniciar = () => {
    console.log('Iniciando timer');
    id = setTimeout(saludo, 3000);
}

const parar = () => {
    console.log('Parando timer');
    clearTimeout(id);
}



