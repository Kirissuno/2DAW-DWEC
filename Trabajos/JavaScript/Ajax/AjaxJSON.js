const button = document.getElementById("button");


button.addEventListener("click", () => {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const lista = JSON.parse(data.target.response);
        let miLista = document.getElementById('ul');
        for (variable of lista) {
            let miPunto = document.createElement('li');
            let miValor = document.createTextNode(variable.id + " - " + variable.name);
            miPunto.appendChild(miValor);
            miLista.appendChild(miPunto);
        }
        button.disabled = true;

    });
    xhr.send();
});