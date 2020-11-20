/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/
var riga = 2;
var colonna = 3;
var matrix = [];
var somma = 0;
for ( var i = 0; i < riga; i++) {
  matrix[i] = [];
for ( var j = 0; j < colonna; j++) {
  matrix[i][j] = Math.round(Math.random() * (100-1) + 1);
  }
  }
  for ( var i = 0; i < riga; i++) {
  var m = 0;
do {
  somma += matrix[i][m]
  m++
} while (m < colonna);
}

console.log(matrix);
console.log(somma);
