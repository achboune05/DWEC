// Activitat 3.6

// 3.6.1 Desestructura un array con nombre, primer apellido y segundo apellido. Asigna un valor
// predeterminado al segundo apellido.

const array = ["ayoub","achboune","garcia"];

let [nombre,primerApellido,segundoApellido] = array;

segundoApellido="juan";

console.log(segundoApellido);



// 3.6.2 Separa el primer elemento de un array y guarda el resto mediante rest.

const arrayElementos= ["Primer","Segundo","Tercer","Cuarto"];

const [primer, ...resto] = arrayElementos;

console.log(primer);



// 3.6.3 Combina dos arrays y añade un elemento al principio y otro al final utilizando spread.

const primerArray= [1,2,3,4,5];
const segonArray= [6,7,8,9];

const resultado =[0,...primerArray,...segonArray,10];
console.log(resultado);




// 3.6.4 Crea un objeto libro con título, autor, páginas y un método resumen() que muestre una
// frase descriptiva.

const libro = {
    titulo: "La Bellaquita",
    autor: "Samuel",
    paginas: 256,

    resumen() {
        console.log(`${this.titulo} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
    }
};

libro.resumen();

// 3.6.5 Crea un objeto contador con una propiedad valor y los métodos incrementar(),
// decrementar() y mostrar().

const contador = {
    valor: 0,

    incrementar() {
        this.valor++;
    },

    decrementar() {
        this.valor--;
    },

    mostrar() {
        console.log(this.valor);
    }
};

contador.incrementar();
contador.mostrar();

// 3.6.6 Copia un producto utilizando spread, modifica su precio y comprueba que el original no se
// ha modificado.


const producto = {
    nombre: "Ratón",
    precio: 30
};

const copia = { ...producto, precio: 25 };

console.log(producto);
console.log(copia);