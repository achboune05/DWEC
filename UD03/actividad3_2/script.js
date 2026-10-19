        
        document.getElementById('formulario').addEventListener("submit", function(e){
            e.preventDefault();


            const entrada= document.getElementById("entrada").value;
            const salida= document.getElementById("salida").value;
            const descuento= document.getElementById("descuento").value
            const resultado = document.getElementById("resultado");
            
            if(!esHoraValida(entrada) || !esHoraValida(salida)){
                resultado.textContent = "Hora invalida. Usa el formato HH:MM";
                return;
            }

            const minutos=calcularDuracion(entrada,salida);

            resultado.textContent= "Duracion: "+formatearDuracion(minutos);


            const importeBase= calcularImporteBase(minutos);

            let functionDescuento = sinDescuento;
            let nombreDescuento = "Sin Descuento";

            if(descuento === "2"){
                functionDescuento= descuentoElectrico;
                nombreDescuento = "Descuento Electrico";
            }else if(descuento === "3"){
                functionDescuento= descuentoResidente;
                nombreDescuento= "Descuento Residente";
            }


            // Aplicar Descuento 

            const ImporteFinal = calcularImporteFinal(importeBase,functionDescuento);
            const descontado = importeBase-ImporteFinal;

            resultado.innerHTML =

            "<h2>RESUMEN</h2>"+
            "Entrada: "+entrada+"<br>"+
            "Salida: "+salida+"<br>"+
            "Duracion: "+formatearDuracion(minutos)+"<br>"+
            "Importe Base: "+importeBase.toFixed(2)+"<br>"+
            nombreDescuento+": "+descontado.toFixed(2)+"<br>"+
            "Importe Final: "+ImporteFinal.toFixed(2)+"€";


            

        });

      


        
        
        
        
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

            
            return "La duracion fue de: "+horas+"h y "+minutos+"minutos";
        }

        function calcularImporteBase(duracionM){
            let importe= 0;

            for(let i= 0; i<=duracionM; i++){
                if(i>300){
                    importe += 0.01;
                }else if(i>120){
                    importe += 0.02;
                }else if(i>30){
                    importe += 0.03
                }
            }

            if(importe>18){
                importe =18;
            }
            return importe
        }


        function sinDescuento(importe){
            return importe;
        }



        function descuentoElectrico(importe){
            return importe-((importe/100)*20);
        }

        function descuentoResidente(importe){
            return importe-((importe/100)*30);
        }

        function calcularImporteFinal(importeBase,aplicarDescuento){
            return aplicarDescuento(importeBase)
        }