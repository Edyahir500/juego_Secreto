/*  1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

function IMC(altura, peso) {
    let IMC = peso * altura;
    console.log(`Tu indice de masa corporal es ${IMC} de acuerdo a tu peso de ${peso} y estatura ${altura}.`)
}

IMC(10, 1.71);

/*  2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
// Uso de recursividad
function factorial(numero) {
    if (numero == 0) {
        return 1;   //Caso base (Rompe el ciclo de repetición) 
    } else { 
        return numero * factorial(numero - 1);  // Genera  la llamada recursiva con un argumento menos en cada iteración hasta llegar al caso base
    } 
}
console.log(`El factorial de 5 es: ${factorial(5)}`);

/*
    3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a $18.80.
*/

let dolar = 18.80;
function conversor(valor) {    
    return console.log(valor / dolar);    
}
let  moneda = prompt("¿Cuánto pesos mexicanos tienes?");
console.log(`Tienes ${(parseFloat(conversor(moneda)) <= dolar) ? "dolar" : "dolares"}.`);
/*
    4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function perímetro(largo, ancho) {
    return largo + largo + ancho + ancho;
}
function area(largo, ancho) {
    return  largo * ancho;
}
let largo  = parseInt(prompt("Ingresa la longitud de la sala rectangular:"));
let ancho = parseInt(prompt("Ingresa el ancho de la sala rectangular:"));

console.log(`Perímetro: ${perímetro(largo,ancho)} cm`);
console.log(`Area: ${area(largo, ancho)} cm²`);
/*
    5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function roundToTwo(num) {
  return +(Math.round(num + "e+3") + "e-3");
}

let pi = 3.14;
function area2(radio) {
    return pi * Math.pow(radio, 2);
}
function perimetro2(radio) {
    return 2 * pi * radio;
}
let radioCircunferencia = parseInt(prompt("Dime el radio de la sala circular:"));
console.log(`Tiene un área de: ${roundToTwo(area2(radioCircunferencia))} cm²`);
console.log(`Tiene un perímetro de: ${roundToTwo(perimetro2(radioCircunferencia))} cm.`);

/*
    6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
let num = parseInt(prompt("Dime un número multiplicador :"));
let numMax = parseInt(prompt("Dime un número multiplicando:"));
function tablaDeMultiplicar(num,numMax) {
    for (let i = 1; i <= numMax; i++) {
        console.log(num * i);        
    }  
}
console.log(tablaDeMultiplicar(num,numMax));