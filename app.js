let listaAmigo = [];

function agregarAmigo() {
  let inputNames = document.getElementById("amigo").value;

  if (inputNames == "") {
    alert("Por favor, inserte un nombre");
  } else {
    // Guardamos el nombre en el array
    listaAmigo.push(inputNames);

    // Obtenemos el UL donde estarán los amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de volver a generarla
    lista.innerHTML = "";

    // Recorremos el array y pintamos los <li>
    for (let i = 0; i < listaAmigo.length; i++) {
      lista.innerHTML += `<li>${listaAmigo[i]}</li>`;
    }

  }
}

function sortearAmigo() {
  if (listaAmigo.length === 0) {
    alert("No hay amigos para sortear");
  } else {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let indiceAleatorio = Math.floor(Math.random() * listaAmigo.length);
    let resultado = document.getElementById("resultado");

    // Mostramos el nombre sorteado
    resultado.innerHTML = `<li>${listaAmigo[indiceAleatorio]}</li>`;
  }
}
