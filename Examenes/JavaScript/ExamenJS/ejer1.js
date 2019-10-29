//DECLARACION VARIABLES
const form = document.getElementById("form");
const submitAlta = document.getElementById("submitAlta");
const submitBorrar = document.getElementById('submitBorrar');
const submitConsultar = document.getElementById('submitConsultar');
const submitLogin = document.getElementById('submitLogin');
let miTabla = document.getElementById('table');
let password = document.getElementById('password');

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//FUNCION DE REGEX DE PASSWORD
const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if (passwordRegex.test(password)) console.log('password válido')
    else console.log('password incorrecto')
}

//INICIAMOS LA PASS EN FALSE
const formIsValid = {
    password: false
}

//EVENTO PARA EL CAMPO PASSWORD QUE SE EJECUTARÁ CADA VEZ QUE CAMBIE EL VALOR EN EL INPUT
password.addEventListener('change', (e) => {
    if (validatePasswordComplex(password.value) == true) {
        formIsValid.password = true;
    }
});

//FUNCION PARA VALIDAR EL FORMULARIO
const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        form.submit();
    } else {
        alert("DATOS INVALIDOS");
    }
}

//FUNCION PARA DAR DE ALTA UN USUARIO
const upData = (nickname, nombre, pass, dni, edad, fechaAlta) => {

    //CREAMOS OBJETO CON SUS ATRIBUTOS PASADOS POR PARAMETROS
    const person = {
        nombre: nombre,
        password: pass,
        dni: dni,
        edad: edad,
        fechaAlta: fechaAlta
    }

    //AÑADE A LOCALSTORAGE EL OBJETO CONVERTIDO A STRING, Y SU KEY SERA EL NICKNAME
    localStorage.setItem(nickname, JSON.stringify(person));
}

//BORRAR TODOS LOS DATOS DEL LOCALSTORAGE
const delData = () => {
    localStorage.clear();
}

//CONSULTAR UN USUARIO POR SU NICKNAME QUE ESTÁ EN EL LOCALSTORAGE
const consultarUser = (nickname) => {
    //  CONVERTIMOS EL USUARIO A TIPO OBJETO
    let user = JSON.parse(localStorage.getItem(nickname));
    let miTr = document.createElement('tr');
    let miTd = document.createElement('td');
    let miText = document.createTextNode(nickname);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
    miTd = document.createElement('td');
    miText = document.createTextNode(user.nombre);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
    miTd = document.createElement('td');
    miText = document.createTextNode(user.nombre);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
    miTd = document.createElement('td');
    miText = document.createTextNode(user.dni);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
    miTd = document.createElement('td');
    miText = document.createTextNode(user.edad);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
    miTd = document.createElement('td');
    miText = document.createTextNode(user.fechaAlta);
    miTd.appendChild(miText);
    miTr.appendChild(miTd);
    miTabla.appendChild(miTr);
}

const consultarLogin = (nickname) => {
    let user = JSON.parse(localStorage.getItem(nickname));

}

//EVENTO PARA DAR DE ALTA AL USUARIO AL HACER CLICK EN EL SUBMIT CORRESPONDIENTE
submitAlta.addEventListener("click", (e) => {
    let nickname = document.getElementById('nickname').value;
    let nombre = document.getElementById('nombre').value;
    let pass = document.getElementById("password").value;
    let dni = document.getElementById('dni').value;
    let edad = document.getElementById('edad').value;
    let fechaAlta = day + "/" + month + "/" + year + " - " + hour + ":" + minutes + ":" + seconds;
    e.preventDefault();
    upData(nickname, nombre, pass, dni, edad, fechaAlta);
});

//EVENTO PARA BORRAR TODOS LOS DATOS ALMACENADOS AL HACER CLICK EN EL SUBMIT CORRESPONDIENTE
submitBorrar.addEventListener("click", (e) => {
    e.preventDefault();
    delData();
});

//EVENTO PARA BUSCAR AL USUARIO POR SU NICKNAME AL HACER CLICK EN EL SUBMIT CORRESPONDIENTE
submitConsultar.addEventListener('click', (e) => {
    let nickname = document.getElementById('nickname').value;
    e.preventDefault();
    consultarUser(nickname);
});

submitLogin.addEventListener('click', (e) => {
    let nickname = document.getElementById('nickname').value;
    e.preventDefault();
    consultarLogin(nickname);
});

form.addEventListener('submit', (e) => {

    e.preventDefault();
    validateForm();

});