/*Author: Pablo Garrido
Date: 26/06/2016
Developed with Sublime Text 3*/

/********** API HTM Storage **********/

//Esta función comprueba si el argumento param es un objeto (elemento del DOM),
//un id de un elemento del DOM, o ninguno de los anteriores.
//En los dos primeros casos devuelve el propio objeto y en el tercero null
function selectObjId (param){
	var out;
	/*SI el argumento es un objeto*/
	if (typeof(param)=== 'object') {
		out=param;
	/*SI el argumento es un string*/
	} else if (typeof(param)=== 'string') {
		/*SI el string corresponde a un Id válido*/
		if (document.getElementById(param)) {
			out=document.getElementById(param);
		}
		/*SI el string NO corresponde a un Id válido*/
		else {
			out=null;
		}
	/*SI el argumento NO es ni objeto ni string*/
	} else {
		out = null;
	}
	return out;
}

/***** SESSION STORAGE *****/

//ARGUMENTO OBLIGATORIO: pobj
function valueToSStorage(pobj){ //pobj debe ser un elemento o id de elemento válido
	/*SI el navegador dispone del objeto Storage*/
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj); //comprueba si pobj es válido para operar
		console.log('aux:');
		console.log(aux.value);
		/*SI pobj es válido Y pobj.value SI existe*/
		if ((aux!==null) && (aux.value!==undefined)){
			sessionStorage.setItem(aux.id, aux.value); //value se almacena en sessionStorage con el mismo id que pobj
		}
		/*SI pobj NO es válido O pobj.value NO existe*/
		else {
			console.log('ERROR: Objeto o propiedad value inexistente'); //ERROR para el desarrollador
		}
	/*SI el navegador NO dispone del objeto Storage*/
	}	else {
		alert('Su navegador no soporta HTML5 API Storage'); //ERROR para el usuario
		console.log('ERROR: Su navegador no soporta HTML5 API Storage'); //ERROR para el desarrollador
	}

}

//ARGUMENTO OBLIGATORIO: pobj
function inhtmlToSStorage(pobj){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		if ((aux!==null) && (aux.innerHTML!==undefined)){
			sessionStorage.setItem(aux.id, aux.innerHTML);
		}
		else {
			console.log('ERROR: Objeto o propiedad innerHTML inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');
		console.log('ERROR: Su navegador no soporta HTML5 API Storage');
	}
}

//ARGUMENTO OBLIGATORIO: pobj OPCIONAL: pid (si no se utiliza se entiende que pid===pobj.id)
function sStorageToValue(pobj, pid){ //pobj debe ser un elemento o id de elemento válido
	/*SI el navegador dispone del objeto Storage*/
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj); //comprueba si pobj es válido para operar
		var idaux=pid;
		/*SI pobj es válido Y pobj.value SI existe*/
		if ((aux!==null) && (aux.value!==undefined)){
			if (idaux=== undefined) {idaux=aux.id;} //Si no se pasa el argumento pid se asigna por defecto pobj.id
			aux.value=sessionStorage.getItem(idaux); //El contenido de sessionStorage.idaux se alamcena en pobj.value
		}
		/*SI pobj NO es válido O pobj.value NO existe*/
		else {
			console.log('ERROR: Objeto o propiedad value inexistente'); //ERROR para el desarrollador
		}
	/*SI el navegador NO dispone del objeto Storage*/
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');
		console.log('ERROR: Su navegador no soporta HTML5 API Storage');
	}
}

//ARGUMENTO OBLIGATORIO: pobj OPCIONAL: pid
function sStorageToInhtml(pobj, pid){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		var idaux=pid;
		if ((aux!==null) && (aux.innerHTML!==undefined)){
			if (idaux=== undefined) {idaux=aux.id;}
			aux.innerHTML=sessionStorage.getItem(idaux);
		}
		else {
			console.log('ERROR: Objeto o propiedad value inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage'); //ERROR para el usuario
		console.log('ERROR: Su navegador no soporta HTML5 API Storage'); //ERROR para el desarrollador
	}
}

/***** LOCAL STORAGE *****/

//ARGUMENTO OBLIGATORIO: pobj
function valueToLStorage(pobj){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		if ((aux!==null) && (aux.value!==undefined)){
			localStorage.setItem(aux.id, aux.value);
		}
		else {
			console.log('ERROR: Objeto o propiedad value inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');}
}

//ARGUMENTO OBLIGATORIO: pobj
function inhtmlToLStorage(pobj){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		if ((aux!==null) && (aux.innerHTML!==undefined)){
			localStorage.setItem(aux.id, aux.innerHTML);
		}
		else {
			console.log('ERROR: Objeto o propiedad innerHTML inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');}
}

//ARGUMENTO OBLIGATORIO: pobj OPCIONAL: pid
function lStorageToValue(pobj, pid){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		var idaux=pid;
		if ((aux!==null) && (aux.value!==undefined)){
			if (idaux=== undefined) {idaux=aux.id;}
			aux.value=localStorage.getItem(idaux);
		}
		else {
			console.log('ERROR: Objeto o propiedad value inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');}
}

//ARGUMENTO OBLIGATORIO: pobj OPCIONAL: pid
function lStorageToInhtml(pobj, pid){ //pobj debe ser un elemento o id de elemento válido
	if (typeof(Storage)!== 'undefined'){
		var aux=selectObjId(pobj);
		var idaux=pid;
		if ((aux!==null) && (aux.inneHTML!==undefined)){
			if (idaux=== undefined) {idaux=aux.id;}
			aux.innerHTML=localStorage.getItem(idaux);
		}
		else {
			console.log('ERROR: Objeto o propiedad value inexistente');
		}
	}	else {
		alert('Su navegador no soporta HTML5 API Storage');}
}