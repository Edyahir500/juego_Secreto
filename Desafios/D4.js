/* 
    1. Crea una lista vacía llamada "listaGenerica".
*/

let listaGenerica = [];
console.log(listaGenerica);

/* 
    2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajesDeProgramacion);

/* 
    3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/

console.log(lenguajesDeProgramacion.push("Java", "Ruby", "GoLang"));

/* 
    4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarElementosPorSeparado() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);        
    } 
}
mostrarElementosPorSeparado();

/* 
    5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
    }
    console.log(lenguajesDeProgramacion);
}
mostrarLenguagesReversoSeparadamente();
/* 
    6. Crea una función que calcule el promedio de los elementos en una lista de números.
*/
function promedio() {
    let listaNumeros = [1, 2, 4, 5, 6];
    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < listaNumeros.length; i++){
        suma = suma + listaNumeros[i]; 
        console.log(suma);
    }

    console.log(`La suma es: ${suma}`);
    promedio = suma / listaNumeros.length;
    console.log(`El promedio es: ${promedio}`);
}
promedio();

// ForEach accede al elemento, indice y arreglo
let frutas = ["Manzana", "Banana"];

frutas.forEach(function (fruta, index) {
    console.log(`${index}:${fruta}`)
});

/* 
    7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/
function numeroMayorYMenor() {
    let num = [10, 20, 5, 8, 2,3];
    let mayor = num [0];
    let menor = num[0];
    console.log(mayor);
    for (let i = 1; i < num.length; i++){
        if (num[i] > mayor) {
            console.log(mayor);
            mayor = num[i];
            console.log(mayor);
        }
        if (num[i] < menor) {
            menor = num[i];
        }
    }
    console.log("Mayor: ", mayor);
    console.log("Menor: ", menor);
}
numeroMayorYMenor();
/* 
    8. Crea una función que devuelva la suma de todos los elementos en una lista.
*/
function sumaEnLista(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
        //console.log(suma);
    }
    return console.log(suma);
}
let numeros = [2, 5, 4, 3, 30];
sumaEnLista(numeros);
/* 
    9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/
function posicion(lista,elem) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]===elem ) {
            return console.log(`Se encuentra en la posición: ${i}`);
        }
    }
    return console.log(`No se encontro en ninguna posición: ${-1}`);
}
let lista = [1, 2, 4, 2]; // Lista
let elem = 2; // Elemento
posicion(lista, elem);
/*
    10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
*/
function sumaDeListas(lis1, lis2) {
    let suma = [];
    let s1 = 0;

    if (lis1.length == lis2.length) {
        for (let i = 0; i < lis1.length; i++){
            //console.log(lis1[i]);
            for (let j = 0; j < lis2.length; j++) {
                //console.log(lis2[j]);
                if (i==j) {
                    s1 = lis1[i] + lis2[j];
                    suma.push(s1);
                }
            }
        }
        console.log(suma);
    } else {
        console.log(`Las dimensiones de las listas son diferentes`)
    }
}
let lis1 = [1, 2, 3, 4];
let lis2 = [4, 5, 6, 4];

sumaDeListas(lis1, lis2);
/*
    11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/
function cuadradoNumero(lis) {
    let almacen = [];
    let cuadrado = 0;
    for (let i = 0; i < lis.length; i++){
        cuadrado = lis[i] * lis[i];
        almacen.push(cuadrado);
    }
    console.log(almacen);
}
let lis = [1, 2, 3, 4];
cuadradoNumero(lis);


