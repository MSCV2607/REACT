

//Se trabajan con Variables y constantes
const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;

console.log(nombre,apellido,valorDado);

//Se trabaja con el scope de las variables asi se puede poner una variable ya inicializada
if (true) {
  const nombre = "Peter";
  let valorDado = 6;
  console.log(valorDado);
}