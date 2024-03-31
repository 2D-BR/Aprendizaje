/*  Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/
var num=1
var Numletras = (nombre) => {
    var num = nombre.length;

    console.log(`El nombre ${nombre} tiene ${num} letras.`);

    function anidada() {
        console.log(num)
    }
    anidada()
};

Numletras('david');
//console.log(num);