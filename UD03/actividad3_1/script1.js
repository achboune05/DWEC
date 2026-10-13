//Anlizador de nombres 


let numero= Number(prompt('Introduce un numero positivo: '));

while(numero<=0 || numero % 1 != 0){
    console.log('El numero es invalido')
    numero= Number(prompt('Introduce un numero positivo: '))
}

console.log('El numero es valido'+ numero);

//parell imparell
function esParell(numero){ 
       return numero%2==0;
}
 

//si es prim

function esPrim(numero){
    let contador= 0;

    for(let i=1; i<=numero; i++){
        if(numero%i == 0){
            contador++;
        }
    }

    if(contador==2){
        console.log('el numero'+' '+numero+' es primo')
    }else{
        console.log('el numero'+' '+numero+' no es primo')
    }
}

//Mostrar divisors propis 

function mostrarDivisors(numero){
    let text = '';

    for(let i= 1; i<numero; i++){
        if(numero%i== 0){
            text += i+' '
        }
    }
    console.log(`Divisores propios de ${numero}: ${text}`);

}



//suma de los divores propios 

function sumaDivisoris(numero){
    let suma=0;

    for(let i=1; i<numero; i++){
        if(numero%i==0){
            suma +=i;
        }
    }
    return suma;

}




//si el nombre es perfecte abundant o deficient 

function clasificar(numero,suma){
    if(suma==numero){
        console.log('Es perfecte')
    }else if(suma>numero){
        console.log('Es abundant')
    }else{
        console.log('El numero es deficient')
    }


}

//Mostrar en html 
document.getElementById('resultat').innerHTML =`
<h2>ANALISIS DE NUMERO ${numero}</h2>
<p>${esParell(numero) ? 'Es parell' : 'No es parell'}</p>



`




esParell(numero);
esPrim(numero);
mostrarDivisors(numero);
const suma= sumaDivisoris(numero);
console.log(`Suma de divisores: ${suma}`);
clasificar(numero,suma);
