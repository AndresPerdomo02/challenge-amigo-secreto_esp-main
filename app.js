// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == ''){
        alert('Por favor ingrese un nombre');
    }
    else {
        amigos.push(amigo);
        limpiarCaja();
        return amigo;
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}
