/* 
	.Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/
const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

for (let n = 0; n < nombres.length; n++){
    if (nombres[n][0] !== 'A') {
        console.log('ALTO! Hay un nombre que no empieza por la letra A');
        console.log(nombres[n] + ' no empieza por A')
        break;
    }
    console.log(nombres[n]);
}


/* 
	.Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/
const invitados = ['Carlos', 'Christian', 'Christoher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptadas:');


for (let i = 0; i < invitados.length; i++){
    if (invitados[i] === 'Jorge') {
        continue;
    }
    console.log(invitados[i]);
}