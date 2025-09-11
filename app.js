let listaAmigo = [];

function agregarAmigo() {
  let inputNames = document.getElementById("amigo").value;

  if (inputNames == ""){
    alert (`Por favor, inserte un nombre`);
  } else {
    listaAmigo.push(inputNames);
    document.getElementById("amigo").value = "";
  }

};