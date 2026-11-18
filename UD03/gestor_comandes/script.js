class LiniaComanda {
    constructor(producte, preu, quantitat) {
        if (producte === "" || producte.trim() === "") {
            throw new Error('El producte ha de contenir text')
        }
        if (preu <= 0) {
            throw new Error('El preu ha de ser positiu');
        }
        if (quantitat <= 0) {
            throw new Error('La quantitat ha de ser positiu');
        } if (!Number.isInteger(quantitat)) {
            throw new Error('La quantitat ha de ser un enter');
        }



        this.producte = producte;
        this.preu = preu;
        this.quantitat = quantitat;
    }

    subtotal() {
        return this.quantitat * this.preu;
    }


    static desDeObjecte(datos) {
        return new LiniaComanda(datos.producte, datos.preu, datos.quantitat);
    }

}

class Comanda {
    constructor(id, client, estat, linies) {
        this.id = id;
        this.client = client;
        this.estat = estat;
        this.linies = linies;
    }



    total() {
        return this.linies.reduce((acumulador, valor) => {
            return acumulador + valor.subtotal();
        }, 0)
    }

    totalUnitats() {
        return this.linies.reduce((acumulador, valor) => {
            return acumulador + valor.quantitat;
        }, 0)
    }


    resum() {

        //Transformamos el array de objetos a un array de texto

        const texto = this.linies.map((linia) => {
            return `    -${linia.producte} - Preu: ${linia.preu} - Stock: ${linia.quantitat}`
        }).join("\n");


        return `Comanda #:${this.id}
Client: ${this.client}
Estat: ${this.estat}
Linies 
${texto}`

    }

    static desDeObjecte(datos) {
        const linies = datos.linies.map(l => LiniaComanda.desDeObjecte(l));
        return new Comanda(datos.id, datos.client, datos.estat, linies);
    }
}

const l1 = new LiniaComanda("Teclat", 39.95, 2);
const l2 = new LiniaComanda("Ratoli", 29.95, 4);
const l3 = new LiniaComanda("Ratoli", 29.95, 4);

const c1 = new Comanda(1, "Juan", "pendiente", [l1, l2, l3]);
console.log("El subtotal es " + l1.subtotal());
console.log("hola" + c1.total());
console.log("Quantitats: " + c1.totalUnitats());
console.log(c1.resum());


const textInicial =
    `[{"id":101,"client":"Aina","estat":"pendent","linies":[{"producte":"Teclat","preu":39.95,"quantitat":2}, {"producte":"Ratolí","preu":24.5,"quantitat":1}]},
{"id":102,"client":"Biel","estat":"enviada","linies":[{"producte":"Monitor","preu":189.9,"quantitat":1}]}]`;


const datos = JSON.parse(textInicial);


function importarComandes(text) {
    try {
        const info = JSON.parse(text);

        if (!Array.isArray(info)) {
            throw new Error('El valor introducido debe de ser un array')
        }

        return info.map((c) => {
            return Comanda.desDeObjecte(c);
        })
    } catch (error) {
        console.log("Ha fallado:" + error.message);
        return [];
    }
}


    function afegirComanda(comandes, nova){
        return [...comandes, nova]
    }

    function eliminarComanda(comandes, id) {
    return comandes.filter(c => c.id !== id);
    }

    function canviarEstat(comandes, id, nouEstat) {
    return comandes.map(c => {
        if (c.id === id) {
            return new Comanda(c.id, c.client, nouEstat, c.linies);
        }
        return c;
    });
    }


    function cercarPerClient(comandes, nom) {
    return comandes.filter((c) => {
        return c.client === nom;
    })
}

function filtrarPerEstat(comandes, estat) {
    return comandes.filter((c) => {
        return c.estat === estat;
    })
}

function ordenarPerTotal(comandes) {
    return [...comandes].sort((a, b) => {
        return b.total() - a.total();
    })
}

function informe(comandes) {
    const facturacio = comandes.reduce((acumulador, valor) => {
        return acumulador + valor.total();
    }, 0)

    const mesCara = ordenarPerTotal(comandes)[0];

    const perEstat = comandes.reduce((acumulador, valor) => {
        acumulador[valor.estat] = (acumulador[valor.estat] || 0) + 1;
        return acumulador;
    }, {})

    const productes = comandes.reduce((acumulador, valor) => {
        valor.linies.forEach((linia) => {
            acumulador[linia.producte] = (acumulador[linia.producte] || 0) + linia.quantitat;
        })
        return acumulador;
    }, {})

    return `Facturació total: ${facturacio.toFixed(2)} €
        Comanda més cara: #${mesCara.id} (${mesCara.total().toFixed(2)} €)
        Comandes per estat: ${JSON.stringify(perEstat)}
        Productes venuts: ${JSON.stringify(productes)}`
        }


        const comandes = importarComandes(textInicial);

        console.log(comandes[0].total().toFixed(2) + " € - " + comandes[0].totalUnitats() + " unitats");
        console.log(comandes[1].total().toFixed(2) + " €");
        console.log(informe(comandes));

        const canviades = canviarEstat(comandes, 101, "enviada");
        console.log("Original: " + comandes[0].estat + " / Nou: " + canviades[0].estat);

        const exportat = JSON.stringify(comandes, null, 2);
        console.log(exportat);

        const reimportades = importarComandes(exportat);
        console.log(reimportades.every((c) => {
            return c instanceof Comanda;
        }))
// const linia = LiniaComanda.desDeObjecte(datos[0].linies[0])

// const customer = Comanda.desDeObjecte(datos[0])


// console.log(customer.total());

// console.log('provaaaaa');


