const button = document.getElementById("button");
button.addEventListener("click", () => {
    let miLista = document.getElementById('ul');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(variable of res){
            let miPunto = document.createElement('li');
            let miValor = document.createTextNode(variable.id + " - " + variable.name);
            miPunto.appendChild(miValor);
            miLista.appendChild(miPunto);
        }
    });
    button.disabled = true;
});