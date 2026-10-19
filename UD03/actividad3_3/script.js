// Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar,
// restar i calcular el màxim.

const a= 5;
const b=6;

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function maxim(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}



function executarOperacio(a,b,callback){
    return callback(a,b);
}

const callsuma= executarOperacio(a,b,sumar);
const callresta= executarOperacio(a,b,restar);
const callmaxim= executarOperacio(a,b,maxim);

console.log(callsuma);
console.log(callresta);
console.log(callmaxim);



// 3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of.

const temp = [12,23,32,16,21];

for(let i = 0; i<temp.length; i++){
    console.log(temp[i]);
}

console.log("hola")
for(const temps of temp){
    console.log(temps);
}

// 3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de
// nombres.


const nombres= [1,2,3,5,6,7,8,9,100];
let suma= 0;
let max= -999;
let min= 999;

for(let i=0; i<nombres.length; i++){
    suma += nombres[i];

    if(nombres[i]>max){
        max= nombres[i];
    }
    if(nombres[i]<min){
        min= nombres[i];
    }
}

const media = suma/nombres.length;

console.log(suma);
console.log(media);
console.log(max);
console.log(min);


// 3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el
// límit.

const valors= [10,5,20,50,2,5,6,7];
let limit= 10;

function comptarMajorsQue(valors,limit){
    let contador= 0;
    for(let i= 0; i<valors.length; i++){
        if(valors[i]>limit)
            contador++;
    }
    return "Hay: "+contador+" elementos que superan el límite";
}

console.log(comptarMajorsQue(valors,limit));


// 3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou
// aplicant el callback a cada element.


function transformarArray(valors,callbacks){
    
}