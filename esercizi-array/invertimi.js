/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/
var array = [];
var input = 7;
var max = 100;
var min = 1;
for ( i = 0; i < input; i++) {
var r = (Math.random() * (max - min) + min);
var random = Math.floor(r);
  array[i] = random;
}
console.log(array);
console.log(array.reverse());
