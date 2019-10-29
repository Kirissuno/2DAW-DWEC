let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let time = new Date();
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

const tiempo = setInterval(()=> {

    document.getElementById("texto").innerHTML = "Hoy es " + day + " - " + month + " - " + year + " y son las " + hour + ":" + minutes + ":" + seconds + " horas";
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hour++;
        }
    }

},1000);

