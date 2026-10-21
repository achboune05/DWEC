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
console.log(`Temperatures Faaa: ${temperaturesAltes}`);

//find some,every reduce i sort devuelve el primer elemento pero cuando no encuentra nada devuelve undefines 
const num = [4, 9, 12, 7, 18];

const primerMajorQue10 = nombres.find((num) => {
    return num > 10;
})


//some: comprueba si al menos un elemento cumple la condición. Devuelve true o false

const notaaaa = [4, 5, 5, 6, 7, 9, 4, 3];

const algunaAprovada = notaaaa.some((nota) => {
    return nota >= 5;
})

console.log(`Alguna aprovada . ${algunaAprovada}`)


//every: comprueba si todos los elementos cumplen la condición. Devuelve true o false

const totesAprovades = notaaaa.every((nota) => {
    return nota >= 5;
})

console.log(`Totes aprovades . ${totesAprovades}`)


const array = [];


// const comprovar = array.true((array) => {
//     return array > 0
// })

// const comprovarr = array.some((array) => {
//     return array > 0
// })




//reduce combina todos los elementos de un array para producir un unico resultado 

// array.reduce((acumulador,element) => {
//     return notaAcumulador
// } valorInicial);


const importss = [10, 25, 8.5, 12];
const total = importss.reduce((acumulador, importActual) => {
    return acumulador + importActual;

}, 0)

console.log(`Total = ${total}`);


// array de tres palabras contruir una variable frase para formar una frase



const palabra = ["Ies", "Joan", "Ramis"];

const fraseee = palabra.reduce((acu, impor) => {
    return acu + ' ' + impor;

})

console.log(fraseee);


//el valor maximo de ese array usando el reduce array de 4 numeros


const numeros4 = [2, 5, 7, 8];

const maximoN = numeros4.reduce((acum, actualll) => {
    if (actualll > acum) {
        return actualll
    }
    return acum

})


console.log(maximoN)


//sort ordena elementos de su propio array osea modifica el array original 
// por defecto compara los valores como si fueran cadenas 

const numeros = [2, 100, 20, 3]
numeros.sort();

console.log(numeros);

//ordenacion numerica

numeros.sort((a, b) => b - a)
console.log(numeros)
numeros.sort((a, b) => a - b)
console.log(numeros)


// ordenacio de cadenas


const noms = ['Úrsula', 'aina', 'Biel', 'carla'];
noms.sort();
console.log(noms);
noms.sort((a, b) => a.localeCompare(b, "ca", { sensitivity: "base" }))
console.log(noms)



const originales = [5,2,56,7,8];
const copia = originales.slice();
copia.sort((a,b)=> a-b)
console.log(originales)
console.log(copia)
