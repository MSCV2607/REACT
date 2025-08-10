
const nombre = "Fernando";
const apellido = "Herrera";

//Template String
const nombreCompleto = `
${nombre} 
${apellido}
${1*1}
`;

console.log(nombreCompleto);    


function getSaludo() {
  return "Hola mundo"
}

console.log(`Este es un texto: ${getSaludo()}`);