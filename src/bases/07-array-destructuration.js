// Array Destructuration 

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 1234]
};

const [letras, numeros] = retornaArreglo();

console.log(letras, '-' ,numeros);

const useState = (name) => {
    return [name, () => { console.log('Hello World')}];
}

const [name, helloFunction] = useState("Brenda");

console.log(name);

helloFunction();

