//Arrays i Funciones de orden superior 

// forEach nap i filter

const arrayProva = [2, 4, 6, , 1, -2];


//  arrayProva.nombreMetode(element, index, arrayComplet) => {
//  instruccions del callback;
//};

// forEach se utiliza para mostrar datos o acumular resutlado
const llenguatges = ["Python", "JavaScript", "Java"];
llenguatges.forEach((llenguatge, index) => {

    console.log(`${index + 1}.${llenguatges}`)
});



//map transforma cada elemento del array según callback el y retorna un array nuevo con el mismo numero de elementos. Map recorre y manipula segun la funcion que teien, no modifica el original 

const precios = [10, 25, 40];

const preciosIva = precios.map((precio) => {
    return precio * 1.21;
});

console.log(precios, preciosIva);


const nombres = ["Ayuoub", "Leiner", "Davi"];

const nombreLista = nombres.map((nombre, index) => {
    console.log(`${index + 1}.${nombre}`);
});

//filter recorre todos los elemntos aplicando la function de callback a cada elemento, devuelve un array nuevo p


const notes = [3, 7, 9, 1, 8, 5, 10, 2];

const aprovado = notes.filter((nota) => {
    return nota >= 5;
})

console.log(notes, aprovado);


const cara = nombres.filter((nombree) => {
    return nombree.length > 5;

})


console.log(nombres, cara)


// Encadenar metodos

const resultat = notes
    .filter(nota => nota % 2 === 0)
    .map(nota => nota * 10)


console.log(resultat)


const temperaturesC = [12, 18, 25, 30, 2, 8, 0, -10];

const temperaturesAltes = temperaturesC
    .filter(c => c >= 20)
    .map(c => (c * 9 / 5) + 32)

console.log(`Temperatures Celcius: ${temperaturesC}`);
console.log(`Temperatures Faaa: ${temperaturesAltes}`)


