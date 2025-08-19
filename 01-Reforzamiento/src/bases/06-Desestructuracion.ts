//La desestructuracion es desarmar un objeto o un arreglo en partes mas pequeñas

const Persona = {
    nombre: "Goku",
    edad: 30,
    poder: "Kamehameha"
};

//Si necesito extraer los datos de la persona
const { nombre, edad, poder } = Persona;
console.log(nombre,edad,poder);

interface Heroe {
    key:string
    nombre: string;
    edad: number;
    poder: string;
}


const useContext = ({key,nombre,edad,poder}: Heroe) => {
    return {
        keyName:key,
        user: {
            nombre,
            edad,
        },
        poder
    }

}

//Estructuracion anidada...