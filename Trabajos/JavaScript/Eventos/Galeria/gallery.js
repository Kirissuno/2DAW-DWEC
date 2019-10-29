const gallery = document.getElementById("gallery");

//Reemplazamos el color de fondo del boton al hacer click
gallery.addEventListener( "click", (e) => {
    e.target.classList.replace("gallery-item", "gallery-red");
});