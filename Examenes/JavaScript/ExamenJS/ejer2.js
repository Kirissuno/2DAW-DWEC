//DECLARAMOS CONSTANTES
const button = document.getElementById("submitConsultar");
const select = document.getElementById('select');

/*
FUNCION QUE RECOGE LOS DATOS DE TODOS LOS USUARIOS O DE UN USUARIO POR ID ALMACENADOS EN LA PAGINA DEL PROPORCIONADA
, ASIGNA EL ID DE CADA UNO AL SELECT Y LOS ALMACENA EN UNA TABLA.
*/
const getData = (id) => {
    let miLista = document.getElementById('table');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        if(select.length <= 0){
            for(person of res){
                let option = document.createElement('option');
                option.setAttribute('value', person.id);
                let nombre = document.createTextNode(person.name);
                option.appendChild(nombre);
                select.appendChild(option);
            }
        }else{
            fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {
                let miTr = document.createElement('tr');
                let miTd = document.createElement('td');
                let miTexto = document.createTextNode(res[0].id);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].name);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].username);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].email);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                direccion = res[0].address;
                miTexto = document.createTextNode(direccion.city + ' / ' + direccion.street + ' / ' + direccion.suite + ' / ' + direccion.zipcode);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
                miTd = document.createElement('td');
                miTexto = document.createTextNode(res[0].phone);
                miTd.appendChild(miTexto);
                miTr.appendChild(miTd);
                miLista.appendChild(miTr);
            });
        }
    });
}

//EVENTO QUE EJECUTA LA FUNCION CON UN PARAMETRO QUE ES EL ID ALMACENADO EN EL SELECT PARA CADA PERSONA
button.addEventListener('click', (e) => {
    e.preventDefault();
    getData(select.value);
});