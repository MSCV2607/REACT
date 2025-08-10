// Objetos en JavaScript
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    calle: "Main St",
    numero: 123
  }
}

//Se puede usar console.table tambien
console.log(persona);

/*
//Esto se hace referencia a la misma posicion de memoria
const persona2 = persona;
persona2.nombre = "Peter";

console.log(persona);
*/

//Clona los atributos de persona 
const persona2 = {...persona};