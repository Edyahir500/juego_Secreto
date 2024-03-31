/*
    Desarrolla una calculadora que calcule el promedio y así verificar la situación de aprobación de un estudiante en función de sus cuatro notas. El promedio requerido para aprobar es de mínimo 5.
*/
function promedio1 (n1, n2, n3, n4) {
    let promedio = (n1 + n2 + n3 + n4) / 4;
    console.log(promedio);
    return console.log(`${promedio >= 5 ? "aprobado" : "reprodabo"}`);
}
promedio1(7,3,7,2);

