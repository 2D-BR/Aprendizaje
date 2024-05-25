/*
	Alerta
	Para informarle al usuario de algo.
*/

//window.alert('hola!');

alert('hola!');

/*
	Ventana de confirmación
	una ventana donde el usuario puede aceptar o cancelar.
*/


const ingresar = () => {
    const accesoPermitido = confirm('eres mayor de edad?');
    if (accesoPermitido) {
        alert('bienvenido');
    } else {
        alert('denegado');
    }
};

//otra manera de hacer la funcion
function ingresar1() {
    const accesoPermitido = confirm('eres mayor de edad?');
    if (accesoPermitido) {
        alert('bienvenido');
    } else {
        alert('denegado');
    }
}


/*
	Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/


const saludo = () => {
    const nombre = prompt('Digite su nombre');
    alert(`hola ${nombre}`);
}
