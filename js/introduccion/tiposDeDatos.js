/*  Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/


//cadena de texto
// para guardar este tipo de datos siempre debe tener comillas simples '' o comillas dobles ""
const nombre = 'david'; 

const frase =  "esto es una frase";
const frase2 =  "esto es una 'frase'";//cadena con comillas simples
const frase3 =  'esto es una "frase"';//cadena con comllas dobles
const frase4 =  'esto es una \'frase\'';//cadena con comillas simples usando comillas simples

console.log(frase4);



//numero
const num = 4;
const numneg = -4.2;


//boleanos
//variables que se definen con true o false
const usarioConectado = true;
const usuarioNoconecto = false;

//tambien varaibles que puedan dar un true o un false
const mayorque = 6 > 2;

console.log(mayorque);

//arreglos
const array = [1, 10 , 5];

const arreglo = ['texto', 456, true, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

//objetos 
const persona = {
    nombre: "carlos",
    edad: 23,
    carro :
    {
        marca: 'kia',
        color: 'gris',
    },
};


console.log(persona.carro.color);


//funciones 

function hola(){
    console.log('hola');
}

hola();

// Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
const miVariable = null;

// Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
const miVariable2 = undefined;