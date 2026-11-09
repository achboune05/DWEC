//Json Javascript Object Notation   
// Representar i intercambiar datos.

// {
//     "id": 5,
//     "nom": "Joan",
//     "preu": 19.3,
//     "disponible": true,
//     "etiquetes": ["audio","blutooth"],
//     "fabricant": null
// }

//Json es un texto no esta en memoria es decir que no existe, Js admite con y sin comillas en cambio JSON solo admite doble comillas 
// el Javascript puede incorporar comentarios en cuanto JSON no puede.



//Serialización con JSON.stringify 
const producte = {
    id: 7,
    nom: "Auriculars",
    preu: 49.99,
};


const text = JSON.stringify(producte);


console.log(typeof text);
console.log(text);
const textLegible = JSON.stringify(producte, null, 2);
console.log(textLegible);

const data = {
    nom: "prova",
    valor: undefined,
    calcular() { return 18 },
    data: new Date("2026-11-05"),

}

console.log(JSON.stringify(data));

//Deserializar con Jason

const nomProudcte = {
    id: 7,
    nom: "auriculars",
    preu: 49.99
};

console.log(esValid(nomProudcte));
try {
    const texto = JSON.stringify(nomProudcte);
    const p = JSON.parse(texto);
    console.log(p)
    // console.log(p.nom);
} catch (error) {
    console.error("Json no valid o incorrecte", error.message);
}
console.log(esValid(nomProudcte));


function esValid(p) {
    return p != null &&
        typeof p === 'object' &&
        Number.isInteger(p.id) &&
        typeof p.nom === 'string' && p.nom.trim() !== "" &&
        typeof p.preu === 'number' && p.preu > 0

}


// Classes 

class Producte {
    constructor(id, nom, preu, estoc) {
        if (!Number.isInteger(id)) throw new TypeError("La id tiene que ser valor entero");
        if (!nom?.trim()) throw new Error(" el nom es obligatori");
        if (preu <= 0 || estoc < 0) throw new RangeError("Valors d'estoc incorrects");
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.estoc = estoc;
    }

    hihaEstoc(unitats = 1) {
        return this.estoc >= unitats;

    }

    valorEstoc() {
        return this.preu * this.estoc;
    }
    get etiqueta() {
        return `${this.nom}-${this.preu.toFixed(2)}€`;
    }
    static desDeProducte() {
        return new Producte(2, "Raton", 29.99, 3)
    }
}

// const teclat = new Producte(1, "Teclat", 29.99, 8);
// teclat.color = "blau";

// console.log(teclat.color);



// console.log(teclat.etiqueta)

// const ratoli = Producte.desDeProducte();
// console.log(ratoli.estoc)


const productes = [
    new Producte(1, "teclat", 29.99, 100),
    new Producte(2, "ratoli", 19, 99, 25)
];

const texto = JSON.stringify(productes);
const dades = JSON.parse(texto);


console.log(productes);
console.log(texto);
console.log(dades);


const nueva = dades.map((p) => {
    return Producte.desDeProducte(p);
})

console.log(nomProudcte);
console.log(nueva)
console.log(nueva[0].valorEstoc());
