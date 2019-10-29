const button = document.getElementById("mostrarTodo");
const buttonParam = document.getElementById('mostrarParam');

const getAll = () => {
    let miTabla = document.getElementById("table");
    fetch("productos.php")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(producto of res){
            let miTr = document.createElement('tr');
            let miTd = document.createElement('td');
            let miTexto = document.createTextNode(producto.id);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTabla.appendChild(miTr);
            miTexto = document.createTextNode(producto.nombre);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTabla.appendChild(miTr);
            miTexto = document.createTextNode(producto.precio);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTabla.appendChild(miTr);


        }
    });
}

const getParam = (param) => {
    let miTabla = document.getElementById("table");
    let radio = document.getElementById('radioId').checked;
    if(radio == true){
        radio = document.getElementById('radioId').value;
        
    }else{
        radio = document.getElementById('radioNombre').value;
    }
    if(radio == 'ID'){
        fetch(`productos.php?id=${param}`)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let miTr = document.createElement('tr');
            let miTd = document.createElement('td');
            let miTexto = document.createTextNode(res[0].id);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTabla.appendChild(miTr);
            miTexto = document.createTextNode(res[0].nombre);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTexto = document.createTextNode(res[0].precio);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
        });

    }else{
        fetch(`productos.php?nombre=${param}`)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let miTr = document.createElement('tr');
            let miTd = document.createElement('td');
            let miTexto = document.createTextNode(res[0].id);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTabla.appendChild(miTr);
            miTexto = document.createTextNode(res[0].nombre);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miTexto = document.createTextNode(res[0].precio);
            miTd = document.createElement('td');
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
        });
    }
    
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    getAll();
});

buttonParam.addEventListener('click', (e) => {
    e.preventDefault();
    let text = document.getElementById('text').value;
    getParam(text);
});