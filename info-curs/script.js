const botoPanell = document.getElementById('botoPanell');
const panellInformacio= document.getElementById('panellInformacio');

function establirPanellObert(botoPanell, panell, obert){
    
    panell.hidden = !obert;

    panellInformacio.classList.togglle("panell-obert", obert);

    if(obert){
        boto.textContent= "ocultar";
    }else{
        boto.textContent= "mostrar info";
    }
}


botoPanell.addEventListener('click', () => {
    const nouEstatObert = panellInformacio.hidden;
    establirPanellObert(botoPanell,panellInformacio,nouEstatObert);
})