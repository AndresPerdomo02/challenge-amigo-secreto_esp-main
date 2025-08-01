// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == ''){
        alert('Por favor ingrese un nombre');
    }
    else {
        amigos.push(amigo); // Se agrega un amigo a la lista 
        document.querySelector('#amigo').value = ""; // Se limpia la caja
        mostrarAmigos(); // Se muestra la lista de amigos
    }
}

function mostrarAmigos() {
    let listaHTML = document.getElementById("listaAmigos"); // Se declara la lista
    lista.innerHTML = ""; // Se pone como vacía

    amigos.forEach(function(item) {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        listaHTML.appendChild(listItem);
    })

}