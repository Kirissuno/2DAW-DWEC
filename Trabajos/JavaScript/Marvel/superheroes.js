const button = document.getElementById("submit");
const buttonFilter = document.getElementById("submitFilter");
const select = document.getElementById("select");
const selectFilter = document.getElementById("selectFilter");

//CREAMOS FUNCION PARA RECUPERAR DATOS DE LA BBDD YA SEA POR ID O SIN ID
const getData = (id) => {
    let miLista = document.getElementById('table');
    //BUSCAMOS EN EL ARCHIVO MARVEL.PHP
    fetch('marvel.php')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        if(select.length <= 0){
            for(superheroe of res){
                let option = document.createElement('option');
                //CREAMOS Y APLICAMOS VALOR AL ATRIBUTO VALUE CON EL ID DE CADA SUPERHEROE
                option.setAttribute('value', superheroe.ID);
                //AÑADIMOS AL SELECT
                let nombre = document.createTextNode(superheroe.Name);
                option.appendChild(nombre);
                select.appendChild(option);   
            }
        }else{
            //BUSCAMOS POR ID
            fetch(`marvel.php?id=${id}`)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {
                let miTr = document.createElement('tr');
                let miTd = document.createElement('td');
                let miTexto = document.createTextNode(res[0].Name);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].Gender);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].Fighting_Skills);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
            });
        }
    });
}

//BUSCAMOS POR PARAMETROS
const getFilter = (alignment, gender) => {
    
    let miListaFilter = document.getElementById('tableFilter');
    //PASAMOS LOS PARAMETROS A MARVEL.PHP POR GET
    fetch(`marvel.php?gender=${gender} && alignment=${alignment}`)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for(superheroe of res){
            let miTr = document.createElement('tr');
            let miTd = document.createElement('td');
            let miTexto = document.createTextNode(superheroe.Name);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
            miTd = document.createElement('td');
            miTexto = document.createTextNode(superheroe.Alignment);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
            miTd = document.createElement('td');
            miTexto = document.createTextNode(superheroe.Gender);
            miTd.appendChild(miTexto);
            miTr.appendChild(miTd);
            miListaFilter.appendChild(miTr);
        }  
                
    });
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    getData(select.value);
});

buttonFilter.addEventListener("click", (e) => {
    e.preventDefault();
    let radio = document.getElementById("male").checked;
    if(radio == false){
        radio = document.getElementById("female").value;
    }else{
        radio = document.getElementById("male").value;
    }
    getFilter(selectFilter.value, radio);
});