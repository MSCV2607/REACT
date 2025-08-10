//Desestructuracion
//Asignacion desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "IronMan"
}

//Extrae lo que se pone entre las llaves de este objeto (Persona)
const { nombre, edad, clave } = persona;

//Imprime las variables extraidas
//console.log(nombre);
//console.log(edad);
//console.log(clave);


const useContext = ({clave, nombre, edad, rango = "Desconocido"}) => {
  //console.log (nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,

  }
}

const {nombreClave, anios} = useContext(persona);

console.log(nombreClave, anios);