// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == ''){
        alert('Por favor ingrese un nombre');
    }
    else {
        amigos.push(amigo); // Se agrega un amigo a la lista 
        mostrarAmigos(); // Se muestra la lista de amigos
        limpiarCaja(); // Se limpia la caja
        
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function mostrarAmigos() {
    let listaHTML = document.getElementById("listaAmigos"); // Se declara la lista
    lista.innerHTML = ""; // Se pone como vacía

    for(let i = 0; i < amigos.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = amigos[i];
        listaHTML.appendChild(listItem);
    }

}