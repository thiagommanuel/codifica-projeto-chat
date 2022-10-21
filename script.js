var clientone = []


function cliente1() {
    var messageone = document.getElementById("mensagemUsuario1").value;
    clientone.push(messageone)
    var novoli = document.createElement("li")
    novoli.classList.add("mensagemUsuario1")
    novoli.innerHTML = messageone
    var lista = document.getElementById("listaDeMensagens")
    lista.append(novoli)
}

function cliente2() {
    var messageone = document.getElementById("mensagemUsuario2").value;
    clientone.push(messageone)
    var novoli = document.createElement("li")
    novoli.classList.add("mensagemUsuario2")
    novoli.innerHTML = messageone
    var lista = document.getElementById("listaDeMensagens")
    lista.append(novoli)
}