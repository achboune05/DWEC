const barra = document.querySelector('#barra');
const selectorPercentatge = document.querySelector('#selectorPercentatge');
const valorPercentatge= document.querySelector('#valorPercentatge');


const formulari= document.querySelector('#formulari');
const nom= document.querySelector('#nom');
const missatge = document.querySelector('#missatge');

function actualizarProgres(percentatge){
    const percentatgeValid= Math.max(0, Math.min(100,percentatge));
    barra.style.width= `${percentatgeValid}%`;
    barra.style.setProperty("--progres", percentatgeValid);
    valorPercentatge.textContent = percentatgeValid;
}


function mostrarMissatge(text,hiHaError){
    missatge.textContent = text;
    missatge.classList.toggle("missatge-error", hiHaError);
}

selectorPercentatge.addEventListener("input", () => {
    const percentatge = Number(selectorPercentatge.value);
    actualizarProgres(percentatge);
} );

formulari.addEventListener("submit", (event) =>{
    event.preventDefault();

    const nomForm = nom.value.trim();

    const hiHaError= nomForm === "";

    if(hiHaError){
        mostrarMissatge("El nom és obligatori", true);
        nom.focus();
        return;
    }
    
    mostrarMissatge(`Dades correctes. Hola, ${nomForm}!`, false);

    actualizarProgres(0);
})

