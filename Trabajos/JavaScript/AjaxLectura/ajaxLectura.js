//VARIABLES
const button = document.getElementById("image");
const buttonPdf = document.getElementById("pdf");
let divImage = document.getElementById("image-container");

//METODO PARA RECOGER IMAGEN
const getImage = () => {

    //BUSCAMOS
    fetch('./Imagenes/descarga.png')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    //TRANSFORMAMOS EL OBJETO RECIBIDO EN UN ARCHIVO MULTIMEDIA PARA PODER SER MOSTRADO
    .then(res => res.blob())
    .then(res => {

        //CREAMOS LA URL CON LA DIRECCION DE LA IMAGEN
        let url = URL.createObjectURL(res);

        //CREAMOS UNA ETIQUETA DE IMAGEN
        let image = document.createElement('img');

        //AÑADIMOS EL SRC A LA IMAGEN
        image.src = url;

        //LO INCRUSTAMOS EN EL DIV
        divImage.appendChild(image);
    });
}

//METODO PARA PDF
const getPdf = () => {

    fetch('./Imagenes/dns.pdf')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.blob())
    .then(res => {
        let url = URL.createObjectURL(res);

        //CREAMOS LA ETIQUETA IFRAME PARA LEER DOCUMENTOS
        let pdf = document.createElement('iframe');
        pdf.src = url;
        divImage.appendChild(pdf);
    });
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    getImage();
});

buttonPdf.addEventListener("click", (e) => {
    e.preventDefault();
    getPdf();
});

