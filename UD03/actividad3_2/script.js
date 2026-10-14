        
        let entrada = prompt('Introduce la hora de entrada en HH:MM: ');

        while(!esHoraValida(entrada)){
            prompt('Hora no valida.Introduce la hora de entrada en HH:MM: ')
        }

        let salida = prompt('Introduce la hora de salida en HH:MM:  ');

        while(!esHoraValida(salida)){
            prompt('Hora no valida.Introduce la hora de salida en HH:MM: ')
        }

      
        const minutos= calcularDuracion(entrada,salida);
        console.log(formatearDuracion(minutos));


        
        
        
        
        function convertirAMinutos(hora){
            const horas=hora.slice(0,2);
            const minutos=hora.slice(3,5);
            const nHoras= Number(horas);
            const nMinutos= Number(minutos);

            return (nHoras*60)+nMinutos;
        }

        function esHoraValida(hora){
            const horas= Number(hora.slice(0,2));
            const minutos= Number(hora.slice(3,5));
            if(hora.length !==5){
                return false;
            }if(hora.slice(2,3) !==':'){
                return false;
            }if(horas<0 || horas>23){
                return false;
            }if(minutos<0 || minutos>59){
                return false;
            }
            return true;
        }


        function calcularDuracion(entrada,salida){
            const entradaM= convertirAMinutos(entrada);
            const salidaM= convertirAMinutos(salida);

            let duracionM= (salidaM-entradaM);

            if(duracionM<0){
                duracionM += 1440;  
            }
            return duracionM; 
        }

        function formatearDuracion(duracionM){
            let horas= Math.floor(duracionM/60);
            let minutos= duracionM%60;

            
            return console.log(`La duracion fue de: `+horas+`h y `+minutos+` minutos` );
        }