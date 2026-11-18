//Actividad 3.8


class CuentaBancaria {
    constructor(titular,saldo){
        if(!titular || !titular.trim()){
            throw new Error('El titular no puede estar vacio');
        }
        if(typeof saldo!=='number' || saldo<0){
            throw new Error('El saldo inicial debe ser un numero mayor o igual a cero');
        }
        this.titular=titular;
        this.saldo=saldo;
    }


    ingresar(importe){
        if(!(importe>0)){
            throw new Error('El importe debe ser positivo');
        }
        this.saldo+=importe;
    }

    retirar(importe){
        if(!(importe>0)){
            throw new Error('El importe debe ser positivo');
        }
        if(importe>this.saldo){
            throw new Error(`${this.titular} no tiene saldo suficiente`);
        }
        this.saldo-=importe;
    }

    transferirA(otraCuenta,importe){
        this.retirar(importe);
        otraCuenta.ingresar(importe);
    }


    get resumen(){
        return `${this.titular} - ${this.saldo}€`;
    }

    //solo guardo titular y saldo
    toJSON(){
        return {
            titular:this.titular,
            saldo:this.saldo
        }
    }

    static desdeObjeto(obj){
        return new CuentaBancaria(obj.titular,obj.saldo);
    }
}




//Crear cuentas
const cuenta1 = new CuentaBancaria('Jose',100);
const cuenta2 = new CuentaBancaria('Maria',50);
const cuenta3 = new CuentaBancaria('Pedro',0);


//Operaciones
try {
    cuenta1.ingresar(50);
    cuenta2.retirar(20);
    cuenta1.transferirA(cuenta3,70);
    cuenta2.retirar(500);
} catch (error) {
    console.log(error.message);
}

try {
    cuenta3.ingresar(-10);
} catch (error) {
    console.log(error.message);
}


const cuentas = [cuenta1,cuenta2,cuenta3];

cuentas.forEach(cuenta => {
    console.log(cuenta.resumen);
});


//Saldo total
const total = cuentas.reduce((suma,cuenta) => {
    return suma + cuenta.saldo;
}, 0);
console.log(`Saldo total: ${total}€`);


//Serializar y reconstruir
const textJSON = JSON.stringify(cuentas);
console.log(textJSON);

const cuentasNuevas = JSON.parse(textJSON).map(obj => CuentaBancaria.desdeObjeto(obj));
console.log(cuentasNuevas);