// Desustructuracion de Arrays

const colors = ["vermell", "verd", "blau"];

const [primerColor, segonColor, tercerColor] = colors;

// console.log(primerColor);
// console.log(segonColor);
// console.log(tercerColor);

//Omitir Elementos
const valors = [10, 20, 30, 40];

const [primer, , tercer] = valors;

// console.log(primer)
// console.log(tercer)


//valors predetermiados
const dades = ["Anna"];
const [nom, ciutat = "Mao"] = dades;

console.log(`Hola ${dades} eres de ${ciutat}`);

//Intercambiar variables
let a = 5;
let b = 9;

[a, b] = [b, a];

console.log(a, b)

//Rest aplicant a Arrays

const puntuaciones = [12, 25, 37, 40, 90];

const [millor, segons, ...resta] = puntuaciones;

console.log(millor, segons, resta)


// Spread aplicant a Arrays ... EXPANDIRSE 

const original = [3, 1, 8];
const copia = [...original];
// console.log(copia);
// copia.sort((a,b)=> a-b);
// console.log(`original: ${original}`);
// console.log(`copia: ${copia}`);


//Combinar Arrays
const grupA = ["Ainna", "Biel"];
const grupB = ["Carla", "Martin"];

const alumnat = [...grupA, ...grupB];
console.log(alumnat);

//Passar elements com a arguments 

const valorInici = [3, 5, 6, 7, 8];

console.log(Math.max(...valorInici))

//crear una funcion que dentro tenga un ucle que sume todo los numeros que lleguen 

const numeros = [2, 3, 4]

// const sumar = (...nums) => {
//     let sumado = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sumado += nums[i];
//     }
//     return sumado;
// }

// console.log(sumar(...numeros));

const sumar = (...numeros) => {                                                                                                                                                                                                                                                  b                                  b b                                                
    return numeros.reduce((suma, numero) => suma + numero, 0);
}
console.log(sumar(...numeros))
//Afegir elemento sense modificar el original 

const tasques = ["Estudiar", "Practica"];
const novesTasques = ["Planificar", ...tasques, "Revisar"];
console.log(novesTasques);
console.log(tasques);