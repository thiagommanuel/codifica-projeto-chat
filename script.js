var clientone = []


function cliente1() {
    var messageone = document.getElementById("mensagemUsuario1").value;
    clientone.push(messageone)
    var novoli = document.createElement("li")
    novoli.innerHTML = messageone
    novoli.className = "mensagemUsuario1"
    var lista = document.getElementById("listaDeMensagens")
    lista.append(messageone)


}
//