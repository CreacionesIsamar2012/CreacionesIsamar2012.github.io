var vector_imagenes[] = new Array
(
	'Imagenes/1-UN.jpg'
	'Imagenes/2-UN.jpg'
	);

function CambiarImagen() {
	// body...
	var indice = Match.floor((Match.random()*vector_imagenes.length));
	document.getElementsByTagName('.Visor').src = vector_imagenes[indice];
}

/*
* Una funcion que ejecuta todo
*/
function Ejecutar() {
	//Elegimos una imagen
	CambiarImagen();
	//Iniciamos la transicion cada 3 segundos
	setInterval(CambiarImagen,3000);
}

//Esto se debe tomar en cuenta al recargar la pagina
window.onload = Ejecutar; 