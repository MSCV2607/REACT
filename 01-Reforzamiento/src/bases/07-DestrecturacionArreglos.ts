
const caracterNombre = ['Goku', 'Vegeta', 'Trunks'];

//Si quiero extraer a goku del arreglo:
//P1 y P2 son nombres de variables no mas
// const [p1, p2] = caracterNombre;

//Si quiero sacar alguna posicion en concreto por ejemplo Vegetta
const [, p2] = caracterNombre;
console.log(p2);

const returnsArrayFn = () => {
    return ["ABC",123];
}

const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);


//Tarea

const useState = (value:string) => {
    return [
        value,
        (newValue:string) => {
            console.log(newValue)
        },
    ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"