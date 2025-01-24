// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  //almacena los nombres de la lista de amigos 
let amigoSeleccionado = ''; //almacena el nombre del amigo seleccionado

//funcion que agraga un nuevo nombre a la lista de amigos
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim(); //obtiene el valor ingresado y elimina espacios 
    //verifica que el campo no este vacio 
    if(!nombre){ 
        alert('¡Por favor, inserte un nombre!');
        return;
    }
    //verifica que no se guarden datos duplicados 
    if(amigos.includes(nombre)){
        alert('¡El nombre ya esta en la lista!');
        return;
    }
    amigos.push(nombre); //guarda el nombre si no hay duplicados 
    actualizarListaAmigos(); 
    document.getElementById('amigo').value=''; //limpia el campo de entrada
}

//funcion que actualiza el contenido de la lista 
function actualizarListaAmigos(){
    let listaAmigosElementos = document.getElementById('listaAmigos'); // almacena los elementos 
    listaAmigosElementos.innerHTML = ''; //limpia el contenido existente 

    //recorre sobre cada elemento 
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); //crea un nuevo elemento
        li.textContent = amigos[i]; 
        listaAmigosElementos.appendChild(li); //agrega el elemento a la lista
    }
}

//funcion que sortea la lista de amigos agregados
function sortearAmigo(){

    //verifica que la lista no este vacia 
    if(!amigos.length){
        alert('¡No hay amigos, La lista de amigos está vacía!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length); //selecciona un indice aleatorio de la lista
    amigoSeleccionado = amigos[indiceAleatorio]; //asigna el amigo correspondiente al indice selecciona de la lista
    let resultadoElemento = document.getElementById('resultado'); //muesta el elemento seleccionado

    //verifica si existe el elemento
    if (resultadoElemento) {
        resultadoElemento.innerHTML = `<li> El amigo secreto sorteado es: ${amigoSeleccionado}</li>`;
    } else {
        console.error('¡Elemento con ID "resultado" no encontrado!');
    }

    amigos=[]; //limpia la lista de amigos después de sorterar
    actualizarListaAmigos(); //actualiza muestra la lista vacia
}

