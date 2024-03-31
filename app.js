/*let titulo = document.querySelector("h1");  // Selector de etiquetas(objeto) para el Document Object Model (arroja a todos los elementos de la página) (DOM)
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Inidica un número del 1 al 10:";
h1= etiqueta de Titulo Superior
*/

//Variables globales (inicializar en 0)
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


// Función con parametros sin retorno
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función sin parametros con retorno
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo) {
        // Condición de salida de recursividad
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    } else {
        // Si el numeroGenerado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //includes agrega nuevo numero para adivinar, si aun no aparece procede a generar un nuevo número 
            // Recursividad
            return generarNumeroSecreto();
        } else {
            // Sino el nuevo numero generado se coloca al final del arreglo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }      
    }    
}

//Declaración de función
function verificarIntento() {
    //alert("Activo función");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);// obtiene el ID del input
    /* Tipo de datos de los números
    console.log(numeroDeUsuario);
    console.log(typeof (numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof (numeroSecreto));*/
    //conteno de intentos
    console.log(intentos);  
    //Condicion booleana triple igual(=), es una validación para ambas variables ya quede sus tipos de dato y valores deben ser iguales.
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos}  ${(intentos === 1) ? "vez" : "veces"}`); //Template String y operador ternario dentro de los parametros es posible
        document.getElementById("reiniciar").removeAttribute("disabled"); //Remover atributo disabled para reiniciar el juego despues de acertar
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");            
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        //limpiarCaja();
    }
    limpiarCaja();
    return;
} 
//Función limpiar Caja donde se digita el número
function limpiarCaja() {
  //Seleccionar etiqueta por ID (identificador) agregando un valor vacio
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    //Indicar mensaje de intervalo de números
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica el número del 1 al ${numeroMaximo}`);
    //Generar el número aleatorio (nueva llamada a la funcion)
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();    
/*  Indicar mensaje de intervalo de números
    Generar el número aleatorio (nueva llamada a la funcion)
    Inicializar el número de intentos*/
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);//Para desabilitar el boton ocupamos el metodo setAtrribute (setear=habilitar que el boton este "disabled")
}

condicionesIniciales();