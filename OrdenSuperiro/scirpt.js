//Funciones de orden superior 
//condiciones una o mas funciones como parametros o retorna una funcion como resultado 


function calcular(a,b,operacion){
    return operacion(a,b);
}

const sumar = (a,b) => a+b; 
const multiplicar= (a,b) => a*b;

// console.log(calcular(4,5, sumar));
// console.log(calcular(8,2, multiplicar));


function crearMultiplicador(factor){
    return function(numero){
        return factor*numero;
    };
}

const duplicar= crearMultiplicador(2);
const triplicar= crearMultiplicador(3);

// console.log(duplicar(5));
// console.log(triplicar(5));

//Arrays 
const notes = [7.5, 5.0, 3.5, 10];
// console.log(notes[0]);

const buit= [];
buit[0] =23;
// console.log(buit);  


const colors= new Array("vermell", "groc", "verde", "blau");
const colors2= ["magenta", "turquesa"];
// colors= colors2

// for(let i= 0; i<colors.length; i++){
//     console.log(colors[i]);
// }

// for(const color of colors){
//     console.log(color)
// }

let index= 0;

while(index<colors.length){
    console.log(colors[index]);
    index++;
}




// const cotxes= new Array(1);
// cotxes[0]= "four";
// cotxes[1]= "tesla";
// cotxes[2]= "tesla";
// console.log(cotxes[1]);


// const multitipo = new Array("iphone", 256, "pro max", 1200);




//mostar cuantos aprobados y nota media suma de notas


let suma=0;
const nota= [2,5,5,9,10,10];
let apro=0;


for(let i= 0; i<nota.length; i++){
    
    suma += nota[i];

    if(nota[i]>=5){
        apro++;
    }

}
const media= suma/nota.length;

console.log('La media de la nota ha sido un: '+media+' aprovados son '+apro);
