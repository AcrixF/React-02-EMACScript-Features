// Import and Export modules

//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';

import heroes, { owners } from './data/heroes';

const findHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

console.log(findHeroeById(5));

const findHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(findHeroesByOwner('DC'));

console.log(owners);