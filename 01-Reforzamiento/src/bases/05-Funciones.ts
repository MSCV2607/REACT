

//Funcion que espera un string y devuelve un string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

//Funciones de flecha
const saludo2 = (name: string) => {
    return `Hola, ${name}!`;
}

//Invoco la funcion con un argumento
const message = greet("Goku");

const message2 = saludo2("Vegetta");
    
console.log(message);
console.log(message2);




function getUser(){
    return {
        id: 1,
        name: "Goku"
    };
    
}

const getUser2 = () => {
    return {
        id: 2,
        name: "Vegeta"
    };
}

const user = getUser();
console.log(user);