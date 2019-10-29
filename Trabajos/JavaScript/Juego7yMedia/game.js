let arrayPalos = ['Oros', 'Copas','Espadas', 'Bastos'];
let totalPuntos = 0;
let puntosPlayer = 0;
let puntosBank = 0;
let miFila = document.getElementById("tr");
let miTabla = document.getElementById("tabla");
let tablaBank = document.getElementById("tablaBank");
let filaBank = document.getElementById("trBank");

const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

//CREAMOS METODO PARA PLAYER
function player(){

    let random = parseInt((Math.random() * 10) + 1);
    let palos = parseInt(Math.random() * 4);

    document.getElementById("img2-1").src='imagenes/imagenes/' + random + '' + arrayPalos[palos] + ".jpg";

    let imagen = document.createElement("img");
    let miColumna = document.createElement("td");
    
    imagen.src = 'imagenes/imagenes/' + random + '' + arrayPalos[palos] + '.jpg';
    imagen.width = 65;

    miColumna.appendChild(imagen);
    miFila.appendChild(miColumna);
    miTabla.appendChild(miFila);
    

    if(random < 8){
        puntosPlayer = puntosPlayer + random;
    }else{
        puntosPlayer = puntosPlayer + 0.5;
    }

    document.getElementById("pointsPlayer").innerHTML = puntosPlayer;
    if(puntosPlayer >= 7.5){
        final();
    }
}

//EVENTOS
img2.addEventListener("click", player);
img3.addEventListener("click", banco);

//METODO PARA BANCO
function banco(){

    img2.removeEventListener("click", player);
        
        let interval = setInterval(()=>{
            let random = parseInt((Math.random() * 10) + 1);
            let palos = parseInt(Math.random() * 4);
        
            document.getElementById("img3-1").src='imagenes/imagenes/' + random + '' + arrayPalos[palos] + ".jpg";
        
            let imagen = document.createElement("img");
            let miColumna = document.createElement("td");
            
            imagen.src = 'imagenes/imagenes/' + random + '' + arrayPalos[palos] + '.jpg';
            imagen.width = 65;
        
            miColumna.appendChild(imagen);
            filaBank.appendChild(miColumna);
            tablaBank.appendChild(filaBank);
            
        
            if(random < 8){
                puntosBank = puntosBank + random;
            }else{
                puntosBank = puntosBank + 0.5;
            }
        
            document.getElementById("pointsBank").innerHTML = puntosBank;

            if(puntosBank > puntosPlayer){
                clearInterval(interval);
                recuento();
            }

        },1000);

}

function final(){
    document.getElementById("winner").innerHTML = "GANA LA BANCA";
    img2.removeEventListener("click", player);
}

function recuento(){
    if((puntosBank > puntosPlayer) && (puntosBank <= 7.5)){
        document.getElementById("winner").innerHTML = "GANA LA BANCA";
    }else{
        document.getElementById("winner").innerHTML = "GANA EL JUGADOR";
    }
}

function reiniciar(){
    location.reload();
}