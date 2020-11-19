/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var matrix = [];
var array = [];
var array2 = [];
var array3 = [];
var i = 0;
do {
  array[i] = Math.round(Math.random() * (100-1) +1);
  i++;
}while (array.length < 10);
var j = 0;
do {
  array2[j] = Math.round(Math.random() * (100-1) +1);
  j++;
}while (array2.length < 10);
var t = 0;
do {
  array3[t] = Math.round(Math.random() * (100-1) +1);
  t++;
}while (array3.length < 10);
matrix[0] = array;
matrix[1] = array2;
matrix[2] = array3;
console.log(matrix);
