var saludar = function (nombre, nombre2, pregunta) {
    if (nombre2 === void 0) { nombre2 = 'Antonio'; }
    alert("Hola " + nombre + " " + nombre2 + ", " + pregunta);
};
saludar('Jose', null);
