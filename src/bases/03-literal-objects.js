// Objetos Literales

const persona = {
    nombre: 'Brenda',
    apellido: 'Martínez',
    edad: 26,
    direccion: {
        ciudad: 'Toluca',
        zip: 50505,
        lat: 14.3422,
        lng: 34.2344,
    }
};



const persona2 = {...persona};

persona2.nombre = 'Cristian';

console.log(persona);
console.log(persona2);