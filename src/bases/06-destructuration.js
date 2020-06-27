//Desestructuración

const persona = {
    nombre: 'Marlen',
    edad: 26,
    clave: 'ABCD12345',
    rango: 'Cheef',
    coordenadas: {
        lat: 19.232,
        lng: -34.233
    }
};

const {nombre, edad, clave} = persona;

console.log(nombre + " ", edad + " ", clave);


const retornaPersona = ({nombre, edad, rango = 'Lost'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(rango);
};

retornaPersona(persona);

const decoratePesona = ({nombre, edad, coordenadas}) => {
    return {
        nombreClave: nombre,
        anios: edad,
        coord: coordenadas
    };
};

console.log(decoratePesona(persona));

const {nombreClave, anios, coord:{lat, lng}} = decoratePesona(persona);

console.log(nombreClave);
console.log(anios);
console.log(lat, lng)