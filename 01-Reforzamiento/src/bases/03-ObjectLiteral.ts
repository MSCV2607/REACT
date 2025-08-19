
//Defino un objeto
const ironman = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 30
}

//Esto apunta al mismo espacio de memoria
// const spiderman = ironman;


//Esto crea un nuevo objeto
//const spiderman = { ...ironman };

//Clon profundo
const spiderman = structuredClone(ironman);

//Cambio las propierties
spiderman.nombre = 'Peter';
spiderman.apellido = 'Parker';

console.log(spiderman);
console.log(ironman);