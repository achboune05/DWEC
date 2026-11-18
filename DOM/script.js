
const app = document.querySelector('#app');
// const titol = document.querySelector('main h1')
const missatge= document.querySelector('.missatge');
const missatges= document.querySelectorAll('.missatge');
const avis= document.getElementById('avis');

// console.log(app);
// console.log(titol);
// console.log(missatge);
// console.log(missatges)


// missatges.forEach(m=> console.log(m));

// if(!missatge){
//     throw new Error('El missatge No existeix');
// }else{
//     console.log('El missatge existeix')
// }


// console.log('Avis: ',avis);
// avis.textContent = '<strong>Sense cap missatge important</strong>';
// avis.innerHTML='<strong>Sense cap missatge important</strong>'
// avis.innerText='<strong>Sense cap missatge important</strong>'
// avis.textContent='<strong>Sense cap missatge important</strong>'


// console.log(avis)


const article = document.createElement('article');
article.className = 'targeta';

const titol = document.createElement('h2');
titol.textContent = 'Teclat';

const preu = document.createElement('p');
preu.textContent = '39.99';

article.append(titol,preu);
document.querySelector('#llista-articles').append(article);

const parrafo = document.createElement('p');
parrafo.textContent = 'Hola Mundo';

document.querySelector('#prova').append(parrafo);



//apend inserta al final
//prepend insertar al principio
//before inserta antes del elemento 
//after inserta despues del elemento 
//replaceWith
//remove()

//crear una funcion que cree una receta que recebira 4 parametros un id un nombre para aritucl un precio y un stock 

//cerar un ariculo calsse traslletra esta recesta indicarle un id cerar cabecera vox crear un parrafo mostrar un prcio redondeado decimales y luego el stock

// y retornar el articulo 


// function articulo(){
//     const articulo = document.createElement('article');
//     articulo.className= 'traslletra';

//     const nombre= document.createElement('h3');
    
// }

function crearTargeta(producte) {
    const article = document.createElement('article');
    article.className = 'traslletra';
    article.id = producte.id;

    // Crear título
    const titol = document.createElement('h2');
    titol.textContent = producte.nom;

    // Crear precio
    const preu = document.createElement('p');
    preu.textContent = producte.preu + ' €';

    // Crear stock
    const estoc = document.createElement('p');
    estoc.textContent = 'Estoc: ' + producte.estoc;

    // Añadir elementos al article
    article.append(titol, preu, estoc);

    return article;
}
llistaArticles= document.querySelector('#llista-articles')



const productes = [
    {id: 1, nom: 'Teclat', preu:45.99, estoc: 60},
    {id: 1, nom: 'Monitor', preu:425.99, estoc: 9},
    {id: 1, nom: 'Ratolí', preu:23.99, estoc: 200},

]

function renderizarProductes(productes,contenidor){
    contenidor.replaceChildren()
    const fragment = document.createDocumentFragment();

    productes.forEach(producte => {
        fragment.append(crearTargeta(producte));
    })

    contenidor.append(fragment);

}

renderizarProductes(productes,llistaArticles);



//Navegación per l'arbre 
// parentElement        Element pare o null
//children              Coleccio dels elements fills 
//firstElementChild     Primer element fill
//lastElementChild      Darrer element fil
//nextElementSibling    Germà seguent
//previousElementSibling Germà anterior
//closest('selector')   Ascendente més próxim


// const navegacion= llistaArticles.firstElementChild; //todo el contnido del primer hijo


// console.log(navegacion);

// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);
// console.log(navegacion.nextElementSibling);
// console.log(navegacion.lastElementChild)

// const inputNom = document.getElementById('nom');
// inputNom.value= 'Josep';

// console.log(inputNom.getAttribute('value'));
// console.log(inputNom.value)
// console.log(inputNom.disabled)

// const documentacio = document.querySelector('#documentacio');

// documentacio.setAttribute('href', 'https://fcbarcelona.cat');
// documentacio.setAttribute('target', '_blak');
// documentacio.setAttribute('style', 'color:red');


//hasAttribute
//toggleAttribute

documentacio.toggleAttribute('hidden');
documentacio.hasAttribute('hidden');


const targeta= document.querySelector('.traslletra');
targeta.classList.add('destacada');
targeta.classList.add('oculta');
targeta.classList.remove('oculta')                                                                                                                                                                                                              bh                                                       



