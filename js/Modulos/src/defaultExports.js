// Forma 1 - mediante palabras export default
/*export default () => {
    return {
        nombre: 'david',
        correo: 'correo@correo.com'
    };
};


//exportacion  de otro tipo de funcion
export default function () {
    return {
        nombre: 'david',
        correo: 'correo@correo.com'
    };
 }
*/


// Forma 2 - Final del documento
const obtenerUsuario = () => {
	return {
		nombre: 'Carlos',
		correo: 'correo@correo.com',
	};
};

export default obtenerUsuario;
