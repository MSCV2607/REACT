interface Persona {
  nombre: string;
  apellido: string;
  edad: number;

  //Esto puede pedir o no
  direccion?: Direccion;
}

//Esto es una interfaz para la dirección por separado
interface Direccion {
  postalCode: string;
  ciudad: string;
}

const ironman: Persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 30
}

console.log(ironman);