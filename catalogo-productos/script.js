const productes = [
  {
    id: 1,
    nom: "Teclat mecànic",
    preu: 49.95,
    estoc: 8,
  },
  {
    id: 2,
    nom: "Ratolí sense fils",
    preu: 24.5,
    estoc: 0,
  },
  {
    id: 3,
    nom: "Monitor de 24 polzades",
    preu: 189.9,
    estoc: 3,
  },
  {
    id: 4,
    nom: "Auriculars",
    preu: 35,
    estoc: 0,
  },
];




const llistaProductes = document.getElementById('llistaProductes');



function crearTargeta(productes){
    const article = document.createElement("article");
    article.classList.add('producte');
    article.id= productes.id;
    const disponible = productes.estoc > 0;
    article.classList.toggle('producte-esgotat', !disponible);

    const titol = document.createElement('h2');
    titol.textContent = productes.nom;

    const preu = document.createElement("p");
    preu.classList.add('producte_preu');
    preu.textContent = `${productes.preu.toFixed(2)}€`;

    const estoc = document.createElement('p');
    estoc.classList.add('producte_estoc');
    estoc.textContent = disponible ? `${productes.estoc} unitat disponibles` : "Producte esgotat";

    const boto = document.createElement('button');
    boto.id = productes.id;
    boto.textContent = disponible ? "Afegir" : "Senese estoc";
    boto.disabled = !disponible;

    article.append(titol, preu, estoc, boto);

    return article;

}


function renderitzarProductes(productes){
    llistaProductes.replaceChildren();

    productes.forEach(producte => {
        const targeta= crearTargeta(producte);
        llistaProductes.append(targeta)
    });
}

renderitzarProductes(productes)

