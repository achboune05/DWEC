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

// const sumar = (...numeros) => {                                                                                                                                                                                                                                                  b                                  b b                                                
//     return numeros.reduce((suma, numero) => suma + numero, 0);
// }
// console.log(sumar(...numeros))
//Afegir elemento sense modificar el original 

const tasques = ["Estudiar", "Practica"];
const novesTasques = ["Planificar", ...tasques, "Revisar"];
// console.log(novesTasques);
// console.log(tasques);

//OBJECTES 

const alumne = {
    nom: "Anna",
    edat: 19,
    curs: "DAW B",
    centre: "IES Joan Ramis i Ramis",
    "telefon mobil": 5555555,
    "+-+-+-+-+-+-": 68686
};

// console.log(alumne["+-+-+-+-+-+-"]);
// console.log(alumne.nom);
// const propietat= "telefon mobil";
// console.log(alumne[propietat]);
// alumne.nom= "Enric";
// console.log(alumne.nom);

// alumne.direccio = "Carrer de per Alla";
// console.log(alumne["direccio"]);
// delete alumne["+-+-+-+-+-+-"];
// console.log(alumne["+-+-+-+-+-+-"]);

const compte = {
    titular: "Aina",
    saldo: 100,
    direccion: {
        calle: "Por alli",
        numero: 7,
    },
    ingresar(quantita){
        this.saldo += quantita;
    },
    mostrarSaldo: function(){
        console.log(`${this.titular}: ${this.saldo} €`);
    }


}

console.log(compte.saldo);
compte.ingresar(25);
console.log(compte.saldo);

compte.mostrarSaldo();


const referenteCompte = compte;

console.log(referenteCompte.titular);
const copiarCompte = {...referenteCompte};

console.log(copiarCompte.saldo)

copiarCompte.nom= "Leiner";

console.log(copiarCompte.nom)
console.log(referenteCompte.nom)

console.log(compte.direccion.calle)
referenteCompte.direccion.calle= "TU pu";
console.log(copiarCompte.direccion.calle);
console.log(compte.direccion.calle)

//cada elemento sera un obejcto que tendra clave nom clave preu

const productos= [
    {nom: "Teclado", preu: 25},
    {nom: "Raton", preu: 50},
    {nom: "Pantalla", preu: 10}
]


const pSuperior =  productos.filter(productos =>
    productos.preu > 20
)

console.log(pSuperior)

const persona= {
    nom2: "Joana",
    edat: 35
}

const {otro,edat} = persona;

console.log(otro)


const matricula = "56565XCV";
const modelo= "Ford";

const cotxe = {matricula,modelo};
console.log(cotxe);

//crear una funcion que muestre el titular en vez de usar function usar un arow function 

