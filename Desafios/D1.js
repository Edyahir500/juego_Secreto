/*
    1. Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function hola() {
    console.log("¡Hola, mundo!");
}
hola();

/*
    2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function saludo(nombre) {
    console.log(`!Hola, ${nombre}!`);
}
saludo("Edya");
/*
    3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
function doubleNumber(number) {
    return number * 2;
}
let numero = doubleNumber(6);
console.log(numero);
/*
    4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
// Funcion con parametros y retorno
function promedio(n1, n2, n3) {
    return [n1 + n2 + n3] / 3;
}
let promedio1 = promedio(10, 10, 10);
console.log(promedio1);

//Funcion con parametros, sin retorno
function prom(n4, n5, n6) {
    console.log([n4 + n5 + n6] / 3);
}
prom(5, 5, 5);
/*
    5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
function numeroMayor(n7, n8) {
    if (n7 > n8) {
        console.log(n7);
    } else {
        console.log(n8);
    }
}
numeroMayor(7, 9);

function encontrarMayor(a, b) {
  return a > b ? a : b; //Operador ternario
}

let numeroMayor1 = encontrarMayor(15, 9);
console.log(numeroMayor1);
/*
    6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function producto(n9) {
    console.log(n9 * n9);
}
producto(9);

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);