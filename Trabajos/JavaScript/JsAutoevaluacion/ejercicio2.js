function insert() {

    var ok;
    var arrayDNI = [];
    var long = (document.getElementById("tabla").rows.length) - 1;
    var numEm = parseInt(document.getElementById("numEm").textContent);

    for (var i = 1; i <= long; i++) {
        arrayDNI[i - 1] = document
            .getElementsByTagName('td')[(i * 4) - 3]
            .textContent;
    }

    var nombre = prompt("Inserte el nombre del empleado");
    console.log(nombre);
    var apellidos = prompt("Inserte los apellidos del empleado");

    do {
        ok = false;
        var dni = prompt("Introduzca DNI del empleado");
        for (var i = 0; i < long; i++) {
            if (dni == arrayDNI[i]) {
                alert("ERROR!");
                ok = false;
                break;
            } else {
                ok = true;

            }
        }

    } while (ok === false);

    if (ok === true && ((nombre !== null && nombre.length > 0) && (apellidos !== null && apellidos.length > 0) && (dni !== null && dni.length > 0))) {

        numEm = numEm + 1;
        document
            .getElementById("numEm")
            .innerHTML = numEm;

        var miTabla = document.getElementById("tabla");
        var miFila = document.createElement("tr");
        var miColumna = document.createElement("td");
        var miColumna2 = document.createElement("td");
        var miColumna3 = document.createElement("td");
        var miColumna4 = document.createElement("td");
        var text = document.createTextNode(long + 1);
        var text2 = document.createTextNode(dni);
        var text3 = document.createTextNode(nombre);
        var text4 = document.createTextNode(apellidos);
        miColumna.appendChild(text);
        miColumna2.appendChild(text2);
        miColumna3.appendChild(text3);
        miColumna4.appendChild(text4);
        miFila.appendChild(miColumna);
        miFila.appendChild(miColumna2);
        miFila.appendChild(miColumna3);
        miFila.appendChild(miColumna4);
        miTabla.appendChild(miFila);
    }
}

function remove() {

    var ok = false;
    var arrayDNI = [];
    var long = (document.getElementById("tabla").rows.length) - 1;
    var numEm = parseInt(document.getElementById("numEm").textContent);

    for (var i = 1; i <= long; i++) {
        arrayDNI[i - 1] = document
            .getElementsByTagName('td')[(i * 4) - 3]
            .textContent;
    }

    var dni = prompt("Introduzca DNI del empleado");
    for (var i = 0; i < long; i++) {
        if (dni == arrayDNI[i]) {

            document
                .getElementById("tabla")
                .deleteRow(i + 1);
            numEm = numEm - 1;
            document
                .getElementById("numEm")
                .innerHTML = numEm;
            ok = true;
            break;
        }
    }

    if (ok === false) {
        alert("ERROR! MARICO!");
    }

}

function mod(){

    var pos; 
    var ok = false;
    var arrayDNI = [];
    var long = (document.getElementById("tabla").rows.length) - 1;

    for (var i = 1; i <= long; i++) {
        arrayDNI[i - 1] = document
            .getElementsByTagName('td')[(i * 4) - 3]
            .textContent;
    }

    do {

        var dni = prompt("Introduzca DNI del empleado");
        for (var i = 0; i < long; i++) {
            if (dni == arrayDNI[i]) {
                ok = true;
                pos = i+1;
            }
        }

    } while (ok === false);

    var nombre = prompt("Inserte el nuevo nombre");
    var apellidos = prompt("Inserte los nuevos apellidos");
    var dniN = prompt("Inserte el nuevo DNI");

    if (ok === true && ((nombre !== null && nombre.length > 0) && (apellidos !== null && apellidos.length > 0) && (dni !== null && dni.length > 0))) {

        document.getElementsByTagName('td')[(pos * 4) - 3].innerHTML = dniN;
        document.getElementsByTagName('td')[(pos * 4) - 2].innerHTML = nombre;
        document.getElementsByTagName('td')[(pos * 4) - 1].innerHTML = apellidos;
    }
}
