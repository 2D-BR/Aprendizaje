class Usuario{

    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;

    }

    ObtenerPosts() {
        const post = ['post1', 'post2'];
        return post
    }
}

const usu1 = new Usuario('david', '1087');
console.log(usu1.ObtenerPosts());

class Moderador extends Usuario{
    constructor(usuario, password, permisos) {
        super(usuario, password);
        this.permisos = permisos;

    }

    borrarPost(id) {
        if (this.permisos[1] === 'borrar') {// o if (this.permisos.includes('borrar'))
            console.log(`El post con el ${id} ha sido borrado`);
        }else {
			console.log('No tienes los permisos para borrar post');
		}
    }

}

const usu2 = new Moderador('Nicolas', '9495', ['editar']);
console.log(usu2.permisos);
usu2.borrarPost(1);
