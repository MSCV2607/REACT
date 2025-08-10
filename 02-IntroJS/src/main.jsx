import {heroes} from './data/heroes';

console.log(heroes);

// Esta función recibe un id y retorna el héroe cuyo id coincida con el valor recibido.
// Utiliza el método find para buscar en el arreglo de héroes.
const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHeroById(2));

// Esta función recibe un owner y retorna un arreglo con todos los héroes cuyo owner coincida con el valor recibido.
// Utiliza el método filter para obtener todos los héroes que pertenecen al owner indicado.
const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}
console.log(getHeroesByOwner('DC'));