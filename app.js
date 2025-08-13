let numeroSecreto = generarNuemeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `¡Felicidades! Adivinaste el número secreto en: ${intentos} ${(intentos === 1) ? "intento" : "intentos"}.`);
    } else {
        if (numeroDeUsuario > numeroDeUsuario) {
            asignarTextoElemento("p", "El número secreto es menor");  
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#ValorUsuario").value = "";
}

function generarNuemeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
    
}


asignarTextoElemento("h1","Juego del número secreto!"); 
asignarTextoElemento("p","Adivina el número secreto entre 1 y 10"); 
