// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = "";
let listaNombreAmigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo(){
    nombreAmigos = document.getElementById('amigo').value;
    resultado.innerHTML = "";
    if (nombreAmigos == "") {
        alert ("Por favor, inserte un nombre");
    } else {
        listaNombreAmigos.push(nombreAmigos);
        recorreLista()
        LimpiarCaja();
        return nombreAmigos;

    }
}

function recorreLista() {

    for (let contador = 0; contador < listaNombreAmigos.length; contador++) {

        const li = document.createElement('li');
        li.textContent = listaNombreAmigos[listaNombreAmigos.length-1];
        lista.appendChild(li);
        console.log(listaNombreAmigos[listaNombreAmigos.length-1]);
        return;
      
    }    

}

function LimpiarCaja() {
    document.querySelector('#amigo').value='';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    if (listaNombreAmigos.length === 0) {
        resultado.innerHTML = "No hay amigos disponibles para sortear";
        return;
    }else{
        resultado.innerHTML = "";
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaNombreAmigos.length);
    
    // Obtener el amigo sorteado
    let amigoSorteado = listaNombreAmigos[indiceAleatorio];
    
    // Mostrar el resultado con animación
    resultado.innerHTML = `
        <div class="resultado-sorteo">
            <h3>¡El amigo sorteado es!</h3>
            <p class="nombre-sorteado">${amigoSorteado}</p>
        </div>`;
    listaAmigos.innerHTML="";
    listaNombreAmigos=[];

}

