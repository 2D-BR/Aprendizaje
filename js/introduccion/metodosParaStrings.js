/*
	.length 
    - Devuelve el número de caracteres de una cadena de texto.
*/
const texto = 'Hola yo soy david!';
console.log(texto.length);


/*
	.indexOf() .lastIndexOf() 
    - Devuelve el index del primer/último caracter especificado.
    - Devueleve -1 si no a encontrado valor 
*/
console.log(texto.indexOf('d'));
console.log(texto.lastIndexOf('d'));


/*
	.slice() 
    - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
console.log(texto.slice(0, 4));
index = texto.indexOf('d');
lastIndex = texto.lastIndexOf('d');
console.log(texto.slice(index, lastIndex + 1));
console.log(texto.slice(-7, -1));



/*
	.replace() 
    - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
console.log(texto.replace('david', 'fede'));

/*
	.split()
    - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
const arreglo = texto.split(' ');
console.log(arreglo);


/*
	.toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());


/*
	Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/

const texto1 = '     Hola yo soy Carlos!    ';
console.log(texto1);
console.log(texto1.trim());
console.log(texto1.trimStart());//elimina espacio incial.
console.log(texto1.trimEnd());//elimina espacio final.
