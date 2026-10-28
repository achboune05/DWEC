// Activitat 3.5

// 3.5.1 Utiliza find para obtener la primera temperatura inferior a cero y controla el caso en el que
// no exista.

const temperaturas = [10,15,27,0,-2,8,-5];

const inferior=  temperaturas.find(temperaturas => {
    return temperaturas<0;
})

if(inferior === undefined){
    console.log('No se ha encontrado una temperadura a menos 0') 
}else{
    console.log(inferior);
}


// 3.5.2 Comprueba con some si un array contiene algún múltiplo de 5.

const numeros= [2,2,6,7,20,3];

const multiplo5= numeros.some(numeros =>{
    return numeros%5 == 0;
})

console.log(multiplo5);


// 3.5.3 Comprueba con every si todas las contraseñas de un array tienen al menos ocho
// caracteres.

const contraseñas = ["ayoub123","leiner123","juan1234","joa331233"];

const comprobar= contraseñas.every(contraseñas =>{
    return contraseñas.length>=8;
}) 

console.log(comprobar);


// 3.5.4 Calcula con reduce el total y la media de un array de gastos.

const gastos= [20,30,40,80,100];

const total = gastos.reduce((acumulador,gastos)=>{
    return acumulador= acumulador+gastos;
})

const media= total/gastos.length;

console.log(media);

// 3.5.5 Ordena una copia de un array de números de mayor a menor sin modificar el original.

const original= [1,2,3,4,5,6,7,8,9];

const copiaOriginal= [...original];

const ordenar= copiaOriginal.sort((a,b)=>{
    return b-a
})

console.log(ordenar)


// 3.5.6 A partir de un array de palabras, encuentra la primera que empiece por vocal, comprueba
// si todas tienen contenido y calcula el número total de caracteres.


const pala= ["Juan","David","Leiner","byoub","Jordi"];

const vocals= pala.find((pala)=>{
    return pala.toLocaleLowerCase().charAt(0)== 'a' || 'e' || 'i' || 'o' || 'u';
})

console.log(vocals)