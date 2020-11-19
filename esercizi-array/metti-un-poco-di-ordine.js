/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/
var array = [];
var min = 0;
var max = 100;
for ( var t = 0; t < 10; t++) {
  array[t] = Math.round(Math.random() * (max-min) + min);
}
var array2 = array.slice();
//decrescente
for ( var i = 0; i < array.length; i++) {
  for ( var j = 0; j < array.length - 1; j++) {
  if (array[j] < array[j+1]) {
    const appoggio = array[j];
    array[j] = array[j+1];
    array[j+1] = appoggio;
  }
}
}
console.log(array);
//crescente
for ( var i = 0; i < array.length; i++) {
  for ( var j = 0; j < array.length - 1; j++) {
  if (array2[j] > array2[j+1]) {
    const appoggio = array2[j];
    array2[j] = array2[j+1];
    array2[j+1] = appoggio;
  }
}
}
console.log(array2);
