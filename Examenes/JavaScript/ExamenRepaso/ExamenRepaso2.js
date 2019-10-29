function add(){

    var nuevoEle = document.getElementById("nuevo").value;
    var pos = document.getElementById("pos").value;
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    var nodo = document.createTextNode(nuevoEle);
    li.appendChild(nodo);
    lista.insertBefore(li, document.getElementsByTagName("li")[pos-1]);
}

function del(){

    var pos = document.getElementById("pos").value;
    var lista = document.getElementById("lista");
    lista.removeChild(document.getElementsByTagName("li")[pos-1]);
}