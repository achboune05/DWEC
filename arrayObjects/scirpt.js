const productes = [
    { id: 1, nom: "Teclat", preu: 39.99, estoc: 8, categoria: "Perifericos" },
    { id: 2, nom: "Monitor", preu: 189.99, estoc: 3, categoria: "Pantallas" },
    { id: 3, nom: "Ratoli", preu: 25.60, estoc: 0, categoria: "Perifericos" }


]

// console.log(productes[0].nom);
// console.log(productes.at(-1).nom);

// for(const {nom,preu,estoc} of productes){
//     const estat = estoc>0 ? "disponible" : "esgotat";
//     console.log(`${nom}:${preu.toFixed(2)}€ - ${estat}`)
// }



const disponibles= productes.filter(productes=> productes.estoc > 0);
const etiquetes= productes.map(({nom,preu})=> `${nom} - ${preu}`)
console.log(disponibles)
console.log(etiquetes)


//usando find buscar un identifcador que sea igual a 2 


const objecte= productes.find(productes => {
    return productes.id= 2;
})

console.log(objecte)

const ob= productes.filter(productes => {
    return productes.categoria === "Perifericos";
})

console.log(ob)


//every datos validos para vender mayor a 0 




//reduce para contar cuantas unidades tenemos

const total= productes.reduce((acumulador,productes) =>{
    return acumulador= acumulador+productes.estoc;
},0)

console.log(total)


//Encadenar operacions

const aparador= productes
    .filter(({estoc}) => estoc >0 )
    .toSorted((a,b)=> a.preu -b.preu)
    .map(({nom,preu})=> ({nom,preuAmbIva: preu * 1.21}));


// console.log(aparador)



//Alternativas imutables

// 1.spread ,slice, concat
// 2.slice, filter, toSpliced
// 3.toSorted, toReversed
// 4.{...obj}, prop,valor



//Patrons de Actualizacion Imutable
//Afegir i eliminar 
const nou = {id: 4, nom: "Webcam", preu: 55.90, estoc: 5};
const ampliats = [...productes,nou];

console.log(ampliats);
console.log(productes);


// Actualizar

function canviarEstoc(llista,id,nouEstoc){
    return llista.map(p => p.id === id ? {...p, estoc: nouEstoc} : p);
}


const actua = canviarEstoc(productes,1,12)

console.log(actua);


//Copia superficial i dades implicadas

const usuari = {
    nom: "Pere",
    contacte: {
        correu: "pep@gmail.com",
        ciutat: "Sevilla"
    }

}

const usuariActualitzat = {
    ...usuari,
      contacte: {
        ...usuari.contracte,ciutat : "Valencia"
    }
}

console.log(usuariActualitzat)