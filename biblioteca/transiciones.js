var indice=0;

var vector_imagenes= new Array
(
	'imagenes/1-UN.jpg',
	'imagenes/2-UN.jpg'
	);

function CambiarImagen() {
	// body...
//	var indice = Math.floor((Math.random()*vector_imagenes.length));
	
	document.getElementById('imagen').src = vector_imagenes[indice];
	indice++;
	if(indice >= vector_imagenes.length) indice=0;
/*	getElementById('testqq')*/
}

/*
* Una funcion que ejecuta todo
*/
function Ejecutar() {
	//Elegimos una imagen
	CambiarImagen();
	//Iniciamos la transicion cada 3 segundos
	setInterval(CambiarImagen,5000);
}

//Esto se debe tomar en cuenta al recargar la pagina
window.onload = Ejecutar; 