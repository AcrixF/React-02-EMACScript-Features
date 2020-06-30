// Promeses

import {findHeroeById, findHeroesByOwner} from './bases/08-imports-exports'

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => { 
        const heroe = findHeroeById(1);
        resolve(heroe); 
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Heroe: ', heroe);
}) */

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = findHeroeById(10);
            if (heroe)
                resolve(heroe);
            else 
                reject('No Heroe Found');
        }, 5000);
    });

    return promesa;
};

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)
