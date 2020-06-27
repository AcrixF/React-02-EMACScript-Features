// Template String

const nombre = 'Brenda Marlen';
const apellido = 'Martinez Flores';

//const nombreCompleto =  nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto ${getSaludo('Brenda')}`)