

//Funcion que espera un string y devuelve un string
function saludo(name: string): string {
  return `Hello, ${name}!`;
}

//Funciones de flecha mas resumido
const saludo2 = (name: string) => `Hello, ${name}!`;

//Invoco la funcion con un argumento
const message = saludo("Goku");

const message2 = saludo2("Vegetta");
    
console.log(message);
console.log(message2);



//Funcion que devuelve un objeto
function getUser(){
    return {
        id: 1,
        name: "Goku"
    };
    
}

//Funcion de flecha que devuelve un objeto
const getUser2 = () => ({
        id: 2,
        name: "Vegeta"
    });

const user = getUser();
console.log(user);

const user2 = getUser2();
console.log(user2);


const misNumeros = [1, 2, 3, 4, 5];

//Funcion que recorre un arreglo y muestra sus elementos
misNumeros.forEach((numero) => {
    console.log(numero);
});