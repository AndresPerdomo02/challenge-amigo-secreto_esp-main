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
        document.getElementById('resultado').innerHTML = "";
    }
}

function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos'); // Se declara la lista
    listaHTML.innerHTML = ""; // Se pone como vacía

    amigos.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerText = item;
        listaHTML.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("No hay suficientes amigos para sortear");
    }
    else {
        let indice = Math.floor(Math.random()*amigos.length) + 1; // Se crea el indice aleatorio
        let nombre = amigos[indice]; // Se obtiene el amigo

        let sorteo = document.getElementById('resultado');
        sorteo.innerHTML = `El amigo escogido es ${nombre}`; //Se muestra el resultado

        amigos = []; // Se limpia la lista amigos


    }
}