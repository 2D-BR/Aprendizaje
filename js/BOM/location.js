// href - Retorna la URL de la página actual
console.log(window.location.href);

console.log(location.href);//no se necesita window ya que sus metodos son globales.\

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);


const cargarDocumento = () => {
    location.assign('https://www.google.com/');
}

const regresar = () => {
    history.back();
}

const adelante = () => {
    history.forward();
}