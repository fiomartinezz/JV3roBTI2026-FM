const miTitulo = document.querySelector("h1");
// miTitulo.textContent = "Hello World";

// Creacion de variables
let nombreUsuario = "Fiorella"
let num1 = 40;
let num2 = 50;

if(num1 > num2){
    nombreUsuario = 'Tiago Ortega';
}else{
    nombreUsuario = 'Nahuel Montiel';
}

miTitulo.textContent = "USUARIO: " + nombreUsuario;

// Funciones en JS
const miTitulo2 = document.querySelector("h2");
function comparar(n1, n2){
    let resultado =  n1 > n2;
    return resultado;
}

if(comparar(num1, num2)){
    miTitulo2.textContent = "Is true!";
}

// Eventos
document.querySelector("html").onclick = function (){
    alert("Deja de pincharme!");
}