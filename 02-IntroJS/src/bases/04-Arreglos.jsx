
//Arreglo JS
//const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);

//Clonando el arreglo y agregando nuevos elementos
let arreglo2 = [...arreglo, 5, 6, 7, 8];

// La funcion map hace una transformacion de los elementos del arreglo
const arreglo3 = arreglo2.map(function(numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
