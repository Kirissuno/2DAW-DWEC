setInterval(()=> {

    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let confirmar;
    document.getElementById("alarma").innerHTML = "Hoy es " + day + " - " + month + " - " + year + " y son las " + hour + "-" + minutes + "-" + seconds;

    let alarmHour = parseInt((document.getElementById("hour")).value);
    let alarmMinutes = parseInt((document.getElementById("minutes")).value);

    if(hour == alarmHour && minutes == alarmMinutes && seconds == 00){
        confirmar = confirm("Alarma!");
        if (confirmar == true){
            setTimeout(()=>{
                alert("Alarma!");
            },60000);
        }
    }

},1000);



