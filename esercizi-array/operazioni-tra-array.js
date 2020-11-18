/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/
var array1 = [];
var array2 = [];
var array3 = [];
var operazione = 'addizione';
for ( var i = 0; i < 10; i++) {
  array1[i] = Math.round(Math.random() * (10-1) + 1);
  array2[i] = Math.round(Math.random() * (10-1) + 1);
  switch (operazione) {
    case 'addizione':
    array3[i] = array1[i] + array2[i];
    break;
    case 'sottrazione':
    array3[i] = array1[i] - array2[i];
    break;
    case 'moltiplicazione':
    array3[i] = array1[i] * array2[i];
    break;
    case 'divisione':
    array3[i] = array1[i] / array2[i];
    break;
    default:
    console.log('Operazione non consentita');
  }
}
console.log(array1);
console.log(array2);
console.log(array3);
