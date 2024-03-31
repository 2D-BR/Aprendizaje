const user = {
    nombre: 'David',
    pais: 'colombia',
   
};



switch (user.pais) {
	case 'colombia':
		console.log('El usuario es colombiano.');
		break;
	case 'españa':
		console.log('El usuario es español.');
		break;
	case 'argentina':
		console.log('El usuario es argentino.');
		break;
	default:
		console.log('El usuario es de otro pais');
}




