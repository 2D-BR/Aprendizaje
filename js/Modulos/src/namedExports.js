
/*
// Forma 1 - Palabra export
export const nombre = 'David';

export const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};

//exportacion  de otro tipo de funcion
export function obtenerPosts() {
    return ['Post1', 'Post2', 'Post3'];
}*/


// Forma 2 - Final del documento
const nombre = 'Fede';

const obtenerPosts = () => {
	return ['PostA', 'PostB', 'PostC'];
};

export { nombre, obtenerPosts };
