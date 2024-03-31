class Usuario{

    constructor(usuario, correo) {
        this.usuario = usuario;
        this.correo = correo;

    }

    static borrar(id) {
        console.log(`El usuario con el id: ${id} ha sido borrado de la base de datos`);
    }

    static registrados = 1000;
}

Usuario.borrar(1);
console.log(Usuario.registrados);
//const usuario1 = new Usuario('Carlos', 'correo@correo.com');
