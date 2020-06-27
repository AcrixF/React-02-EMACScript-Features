const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const greet = (name) => `Hi ${name}`

console.log(saludar("Brenda"));

console.log(greet("Marlen"));

const getUser = () => {
    return {
        uid:12345,
        name: 'Neoa',
    }
};

console.log(getUser());


const getUsuarioActivo = (nombre) => ({
    uuid: 1234567890,
    username: 'Neoa'
});

console.log(getUsuarioActivo());