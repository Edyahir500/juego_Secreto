/*
    Template strings

    Ofrecen una manera eficiente de crear cadenas de texto donde es posible incluir marcadores o espacios reservados que posteriormente serán reemplazados por valores concretos.

    Estos marcadores, por lo general, se encuentran delimitados por caracteres especiales, como llaves, corchetes o signos de dólar, y desempeñan el papel de puntos de inserción para datos dinámicos.

    Simplifican la tarea de concatenar valores variables en una cadena, sin requerir concatenación manual de cadenas o conversiones explícitas de tipos.

    Es valioso en diversas situaciones, como la generación de mensajes de usuario, la construcción de consultas SQL dinámicas o la creación de documentos HTML.

    Un ejemplo ilustrativo de esto se encuentra en JavaScript, donde puedes emplear las comillas invertidas (backticks) para crear plantillas de cadenas. Esto te permite incrustar expresiones dentro de la cadena utilizando el formato ${}.

    Ejemplo:
*/
const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.

// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals

