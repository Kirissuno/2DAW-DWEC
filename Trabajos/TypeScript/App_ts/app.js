// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
function validar(batman) {
    return batman.nombre + ' ' + batman.artesMarciales;
}
console.log(validar(batman));
//Con esta opcion validamos directamente con la interfaz al decirle que el batman2 debe cumplir con los parametros de la interfaz
var batman2 = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = 'Arco'; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo() {
        this.calculaArea = function (base, altura) {
            var area = base * altura;
            return area;
        };
    }
    return rectangulo;
}());
