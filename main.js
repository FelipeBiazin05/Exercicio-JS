

function verificar(CampoA, CampoB ) {
    var CampoA = document.getElementById ("campoA").value
    
    var CampoB = document.getElementById ("campoB").value
    
    if (CampoB > CampoA) {
        alert ("Formulario valido!")
    } 
    
    else {
        alert ("Formulario invalido!")
    }
}
