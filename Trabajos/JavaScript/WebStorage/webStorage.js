const buttonAlta = document.getElementById('alta');
const buttonBorrarTodo = document.getElementById('borrarTodo');
const buttonBorrarUsuario = document.getElementById('borrarUsuario');
const buttonRecuperarPass = document.getElementById('recuperarPass');

//METODO PARA SUBIR OBJETO CON 2 PARAMETROS A LOCALSTORAGE
const upData = (usuario, pass) => {

    //CREAMOS OBJETO CON USUARIO Y PASS
    const person = {
        name: usuario,
        password: pass
    }

    //AÑADE A LOCALSTORAGE EL OBJETO PERSON, Y SU KEY SERA EL NOMBRE USUARIO
    localStorage.setItem(usuario, JSON.stringify(person));
}

//BORRAR TODO
const delData = () => {
    localStorage.clear();
}

//BORRAR POR USUARIO
const delUser = (usuario) => {
    localStorage.removeItem(usuario);
}

//BUSCAR PASS
const passData = (usuario) => {
    console.log(localStorage.getItem(usuario));
}

//EVENTOS
buttonAlta.addEventListener("click", (e) => {
    let usuario = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    e.preventDefault();
    upData(usuario, pass);
});

buttonBorrarTodo.addEventListener("click", (e) => {
    e.preventDefault();
    delData();
});

buttonBorrarUsuario.addEventListener("click", (e) => {
    let usuario = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    e.preventDefault();
    delUser(usuario, pass);
});

buttonRecuperarPass.addEventListener("click", (e) => {
    let usuario = document.getElementById("user").value;
    e.preventDefault();
    passData(usuario);
});

