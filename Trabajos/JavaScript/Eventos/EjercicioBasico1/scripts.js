const caja = document.getElementById("box");

caja.addEventListener( "mouseenter", () => {
    caja.style.background = "green";
});

caja.addEventListener( "mouseleave", () => {
    caja.style.background = "red";
});

caja.addEventListener( "mousedown", () => {
    console.log("Has pulsado la caja!");
});

caja.addEventListener( "mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja!");
});