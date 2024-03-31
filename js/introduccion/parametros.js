/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/

const saludo = (nombre) => {
    console.log(`hola ${nombre}`);
};

/*
saludo('david')
saludo('Carlos');
saludo('Alex');
saludo('Cesar');
saludo();
*/

/*
	Multiples parametros
*/

const opereacion = (tipo, n1, n2) => {
    
    if (tipo === 'suma') {
        console.log(n1 + n2);
    } else if (tipo === 'resta') {
        console.log(n1 - n2);
    }
   
     
};

opereacion('suma', 2, 5);
opereacion('resta', 2, 5);