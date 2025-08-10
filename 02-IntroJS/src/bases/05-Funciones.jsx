const saludar = function saludar(nombre) {
  return `Hola ${nombre}`;
}

//Funcion de flecha
const saludarFlecha = (nombre) => `Hola ${nombre}`;

console.log(saludar("Goku"));
console.log(saludarFlecha("Vegeta"));


const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502"
  }
}

console.log(getUser());

//Funcion de flecha y objeto activo
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre
});

