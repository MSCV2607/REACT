
const personajes = ["IronMan", "Thor", "Hulk"];

//El arreglo se desetructura con p1, p2, p3, y se pueden ignorar posiciones
const [, p2, p3] = personajes;

console.log( p2, p3);

const retronaArreglo = () => {
  return ["ABC", 123];
}

const [letras, numeros] = retronaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
  return [valor, ()=> {console.log("Hola mundo")}]
}

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
arr[1]();
