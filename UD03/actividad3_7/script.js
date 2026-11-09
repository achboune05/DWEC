//Actividad 3.7


class Producto {
    constructor(id,nom,preu,estoc){
        this.id=id;
        this.nom=nom;
        this.preu=preu;
        this.estoc=estoc;
    }
}




function importarProductes(textJSON) {
    const productos = [];
    const errores = [];


    //Comprobar errores de sintaxis
    try {
        const datos = JSON.parse(textJSON);
        if (!Array.isArray(datos)) {
            errores.push('Json debe contener un array');
            return { productos, errores }
        }


        //ids únicas
        const ids = [];

        datos.forEach((dato,index) => {
            let valido=true;
            if (!Number.isInteger(dato.id)) {
                errores.push(`Error en la posición ${index}, el id debe de ser entero`);
                valido=false;
            } else if (ids.includes(dato.id)) {
                errores.push(`Error en la posicion ${index}, el id ya existe`);
                valido=false;
            } else {
                ids.push(dato.id);
            }
            if(!dato.nom || !dato.nom.trim()){
                errores.push(`Error en la posición ${index}, el nombre esta vacio`);
                valido=false;
            }
            if(!(dato.preu>0)){
                errores.push(`Error en la posición ${index}, el precio debe ser positivo`);
                valido=false;
            }
            if(!Number.isInteger(dato.estoc) || !(dato.estoc>=0)){
                errores.push(`Error en la posición ${index}, el estoc debe ser entero y mayor o igual a cero`);
                valido=false;
            }


            if(valido==true){
                const producto= new Producto(
                    dato.id,
                    dato.nom,
                    dato.preu,
                    dato.estoc
                   
                );
                productos.push(producto);
            }


        })






    } catch (error) {
        errores.push(error.message);
    }



    return { productos, errores }
}


const resultado = importarProductes(`[
    {"id":1,"nom":"Teclado","preu":-20,"estoc":5},
    {"id":1,"nom":"Jose","preu":-20,"estoc":5},
    {"id":2,"nom":"Raton","preu":-20,"estoc":5},
    {"id":3,"nom":"Raton","preu":20,"estoc":5}
    ]`);

    console.log(resultado)