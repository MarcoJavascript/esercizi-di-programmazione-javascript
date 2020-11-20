/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/
var n = 2;
var m = 3;
var matrix = [];
var sommar = [];
var sommac = [];
for ( var i = 0; i < n; i++) {
  matrix[i] = [];
for ( var j = 0; j < m; j++) {
  matrix[i][j] = Math.round(Math.random() * (100-1) + 1);
  }
  }
console.log(matrix);


for ( var i = 0; i < n; i++) {
  var j = 0;
  sommar[i] = 0;
  do {
    sommar[i] += matrix[i][j];
    j++;
  } while ( j < m);
}
for ( var i = 0; i < m; i++) {
  var j = 0;
  sommac[i] = 0;
  do {
    sommac[i] += matrix[j][i];
    j++
  } while (j < n);
}
console.log(sommar);
console.log(sommac);
