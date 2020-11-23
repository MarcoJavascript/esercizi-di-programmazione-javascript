/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var n = 16;
var min = 0;
function casual (input) {
  return (Math.random() * (input - min) + min);
}
function random (input) {
  return (Math.random() * (input - min) + min);
}
console.log(random(casual(n)));
