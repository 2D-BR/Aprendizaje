const opereacion = (tipo, n1, n2) => {
    let result
    if (tipo === 'suma'){
        result = n1 + n2;
    } else if (tipo === 'resta') {
        result = n1 - n2;
    }

    return result;
}

const mivAR = opereacion('suma', 2, 5);
console.log(mivAR)

/*otro forma de usar return:
const operacion = (tipo, numero1, numero2) => {
	if (tipo === 'suma') {
		return numero1 + numero2;
	} else if (tipo === 'resta') {
		return numero1 - numero2;
	}
};

const miVariable = operacion('suma', 150, 111);
console.log(miVariable);
*/