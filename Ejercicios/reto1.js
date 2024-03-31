
/* En este código, se genera un número aleatorio para elegir un libro y luego se verifica si se ha alcanzado el límite de libros sorteados. Si es así, la lista de libros sorteados se reinicia para comenzar de nuevo el sorteo. */

function sortearLibro() {
  let libroElegido = parseInt(Math.random() * numeroLimite + 1);
  let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
  if (cantidadDeLibrosSorteados == numeroLimite) {
    listaDeLibrosSorteados = [];
  }
  // Código omitido
}
