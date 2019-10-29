function aplicar(){
	var pos = document.getElementById("pos").value;
    var equipo = document.getElementById("equipo").value;
    var puntos = document.getElementById("puntos").value;

    document.getElementsByTagName('td')[(pos*3)-2].innerHTML = equipo;
    document.getElementsByTagName('td')[(pos*3)-1].innerHTML = puntos;

}
