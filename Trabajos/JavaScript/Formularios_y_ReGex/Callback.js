//CREAMOS OBJETOS
const users = [{
    id: 1,
    name: 'Dorian'
},
{
    id: 2,
    name: 'Jose'
},
{
    id: 3,
    name: 'Pedrin'
}];

id = prompt("introduzca id usuario");

//METODO CALLBACK PARA BUSCAR USUARIO POR ID
const getUser = (id, cb) => {
    const user = users.find(user => user.id == id);
    if(!user){
        cb(`No existe ningun usuario con el id: ${id}`);
    }else{
        cb(user, null);
    }
    
}

//LLAMAMOS AL METODO CON EL PARAMETRO ID QUE HEMOS INTRODUCIDO ARRIBA CON PROMPT
getUser(id, (user, err) => {
    if(err){
        return console.log(err);
    }else{
        console.log(`El nombre del usuario es ${user.name}`);
    }
});