
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Hola mundo');
        //resolve(100);
        reject('Mi amigo se perdio');
    }, 2000);
});

miPromesa.then(
    (miDineroDeVuelta) => {
        console.log(`Mi dinero de vuelta es: ${miDineroDeVuelta}`);
    }
).catch(reason => {
    console.log(`Error: ${reason}`);
})