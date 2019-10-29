// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE : {nombre: string, edad: number} = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
const batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface validarBatman {
  nombre: string;
  artesMarciales: Array<string>;
}

function validar(batman : validarBatman){
  return batman.nombre + ' ' + batman.artesMarciales;
}

console.log(validar(batman));

//Con esta opcion validamos directamente con la interfaz al decirle que el batman2 debe cumplir con los parametros de la interfaz
const batman2: validarBatman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
const resultadoDoble = ( a: number, b: number ) => {
  return (a + b) * 2
}

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre:string, poder?:string, arma:string='Arco'):string{
  let mensaje:string;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${arma}`;
  }

  return mensaje;
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo{

  base:number;
  altura:number;

  constructor(){
    
  }

  calculaArea = (base: number, altura: number):number => {
    let area: number = base * altura;
    return area;
  }
  
}