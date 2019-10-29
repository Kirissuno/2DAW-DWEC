function inicializa(){

    var array = [];
    var nombre;
    var ok;

    for(var i = 0; i < 5; i++){
        ok = true;
        do{
            array[i] = prompt(i + " Nombre");
            if(i !== 0){
                for(var j = i; j > 0; j--){
                    if(array[i] === array[j-1]){
                        console.log("ERROR! INTRODUZCA DE NEW");
                        ok = false;
                        break;
                    }else{
                        ok = true;
                    }
                }
            }
            
        }while(ok === false);
        
    }

    array.sort(); 
    for(var i = 0; i < array.length; i++){
        console.log(array[i].charAt(0).toUpperCase());
    }
    
    
    
}