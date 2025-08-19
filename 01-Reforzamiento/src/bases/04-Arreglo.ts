
//Esto es un arreglo que recibe numeros o string
const miArreglo = [1,2,3,46,82];

//Agrego al arreglo el numero 100
miArreglo.push(100);

console.log(miArreglo);


//Clono el arreglo poro puedo ponerle mas cosas
const miArreglo2 = structuredClone(miArreglo);
miArreglo2.push(200);
console.log(miArreglo2);