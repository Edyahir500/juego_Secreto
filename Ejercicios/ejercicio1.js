/*
  Desarrolla un código que sigas las mejores prácticas de programación y ayuden a mejorar la legibilidad y mantenibilidad del siguiente código.

*/
function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;

  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}

const numero1 = 5;
const resultado = calcularDobleTriple(numero1);
console.log(resultado);
//--------------------------------------------------------------------------------
/*
  El siguiente código es el correcto porque divide la funcionalidad en dos funciones separadas, calcularDoble y calcularTriple, lo que mejora la modularidad y facilita la comprensión del código. Además, utiliza variables explícitas (doble y triple) para almacenar los resultados, lo que hace que el código sea más legible.
*/
// Establece las funciones
function calcularDoble(numero) {
  return numero * 2;
}

function calcularTriple(numero) {
  return numero * 3;
}
// Establece las variables
const numero2 = 5;
const doble = calcularDoble(numero2);
const triple = calcularTriple(numero2);
// Muestra en la consola
console.log(`El doble de ${numero2} es ${doble} y el triple es ${triple}.`);
//--------------------------------------------------------------------------------
/*
  El siguiente código es incorrecto porque devuelve una cadena de texto que incluye resultados y descripciones en la misma cadena. Esto puede dificultar la reutilización de los valores numéricos en otros cálculos y afecta la legibilidad del código.
*/
function calcularDobleTriple(numero) {
  return numero * 2 + " es el doble y " + numero * 3 + " es el triple.";
}

const numero3 = 5;
const resultado1 = calcularDobleTriple(numero3);
console.log(resultado);

//--------------------------------------------------------------------------------
/*
  El siguiente código es incorrecto porque utiliza un objeto para almacenar los resultados, lo que es innecesario para este cálculo simple. Esto agrega complejidad al código sin ningún beneficio claro en términos de legibilidad o mantenibilidad.
*/
function calcularDobleTriple(numero) {
  const resultado3 = {};
  resultado3.doble = numero * 2;
  resultado3.triple = numero * 3;
  return resultado3;
}

const numero4 = 5;
const resultado3 = calcularDobleTriple(numero4);

console.log(
  `El doble de ${numero4} es ${resultado3.doble} y el triple es ${resultado3.triple}.`
);
