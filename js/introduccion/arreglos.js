 
 const arreglo = ['texto', -456, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo)
 
const friends = ['federico', 'nicolas', 'jose'];
console.log(friends[0]);

const colores = [];
colores[0] = 'rojo';
colores[1] = 'azul';
colores[2] = 'verde';
colores[4] = 'blanco';//salto de valor en posicion de lista
colores[4] = 'negro'//se re-define la poscion

console.log('El arreglo colores tiene: ' + colores.length + ' colores');


colores.push('Amarillo');
console.log(colores);