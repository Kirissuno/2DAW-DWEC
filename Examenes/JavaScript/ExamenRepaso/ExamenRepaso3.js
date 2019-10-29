function add(){

    var array = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Almeria", "Jaen", "Cordoba"];
    array.sort();

    document.write('<table border = "1" align = "center">');
    for(var i = 0; i<array.length; i++){
        document.write('<tr>' + '<td>' + array[i]);
    }
}