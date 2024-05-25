const fetchPost = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = true;

			if (error) {
				reject('Hubo un error al intentar obtener los posts');
			} else {
				resolve(posts);
			}
        }, 2000);
    });
}

const mostrarPosts = async() => { 
    try {
        const posts = await fetchPost();
        console.log(posts) 
    } catch (mensaje) {
        console.log(mensaje);
    }
};

console.log('Inicia operacion');
/*fetchPost().then((posts) => {
    console.log(posts);
}).catch((mensaje) => {
    console.log(mensaje);
});*/
mostrarPosts();
console.log('Finaliza operacion');

