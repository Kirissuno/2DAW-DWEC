const saludar = (nombre: string, nombre2:string='Antonio', pregunta?:string) => {
    alert(`Hola ${nombre} ${nombre2}, ${pregunta}`);
}

saludar('Jose');