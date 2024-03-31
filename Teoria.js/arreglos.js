/* Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0. */

// Arreglo (vector) vacio
let numerosSorteados = [];

// Longitud(dimensión) del arreglo
console.log(numerosSorteados.length);

// Agregar número al final del arreglo
console.log(numerosSorteados.push(5));

// Indice (posición) para acceder al arreglo desde la posición 0.
console.log(numerosSorteados[0]);

// Agregar mas numeros al final del arreglo
console.log(numerosSorteados.push(6, 7));

// Conocer la el elemento de la ultima posición cuando hay un longitud del arreglo muy grande
console.log(numerosSorteados[numerosSorteados.length - 1]);

// Eliminar el utlimo elemento del arreglo
console.log(numerosSorteados.pop());



