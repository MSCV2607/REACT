// Creamos una nueva promesa. El constructor recibe una función con dos parámetros: resolve y reject.
// Usamos setTimeout para simular una operación asíncrona que tarda 2 segundos.
// Si todo sale bien, llamamos a resolve() para indicar que la promesa se resolvió correctamente.
// Si hubiera un error, se llamaría a reject().
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

// Cuando la promesa se resuelve exitosamente, se ejecuta el callback del método then.
// Si la promesa es rechazada (ocurre un error), se ejecuta el callback del método catch.
promesa.then(() => {
  console.log("La promesa se resolvió correctamente");
}).catch((error) => {
  console.log("La promesa fue rechazada");
});
