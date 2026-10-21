// 3.4.1 Mostra amb forEach els elements d’un array de noms precedits per la seva posició..

const noms = ['Ayoub', 'Leiner', 'David', 'Sergi'];

noms.forEach((nom, index) => {
    console.log(`${nom}: ${index}`)
})



// 3.4.2 A partir d’un array de preus, crea amb map un array amb un descompte del 15 %..

const precios = [30, 50, 20, 60];

const descuento = precios.map((precios) => {
    return precios - ((precios / 100) * 15)
})
console.log(descuento)

// 3.4.3 A partir d’un array de paraules, conserva amb filter les que tenguin cinc caràcters o més.


const paraules = ['Casa', 'estofado', 'Iphone', 'peluss'];

const paraulesFiltradas = paraules.filter((paraules) => {
    return paraules.length > 5;
})
console.log(paraulesFiltradas)

// 3.4.4 Converteix un array de minuts en textos del tipus “2 h 15 min” mitjançant map.

const minutos = [122, 95, 70];

const minutosHoras = minutos.map((minutos) => {
    const hora = Math.floor(minutos / 60);
    const minu = minutos % 60;

    return `${hora} y ${minu}`;
})

console.log(minutosHoras)


// 3.4.5 Encadena filter i map per obtenir el quadrat de tots els nombres positius d’un array.

const numeros = [2, 4, 5, 6, -7, 8];

const numerosPosi = numeros.filter((numeros) => {
    return numeros > 0;
})

const numerosQua = numerosPosi.map((numerosPosi) => {
    return numerosPosi * numerosPosi;
})
console.log(numerosQua)

// 3.4.6 Demana una paraula i filtra totes les cadenes d’un array que la contenguin, ignorant
// majúscules i minúscules.


//frases
const frases = ["Hola Mundo", "Mi hola nombre es Ayoub", "Mi profesor es Joan"];


document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const palabra = document.getElementById('palabra').value;

    const encontrada = frases.filter((frases) => {
        return frases.toLocaleLowerCase().includes(palabra.toLocaleLowerCase());
    })

    const res = document.getElementById('resultado');

    res.textContent = encontrada.join(", ");
})

