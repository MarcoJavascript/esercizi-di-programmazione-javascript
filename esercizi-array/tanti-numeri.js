/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var array = [3, 7, 8, 2, 5, 6,3,1];
var count = array.length;
var min;
var max;
var somma = array.reduce(function ( acc, cur) {
  return acc + cur;
})
var media = somma/count;
 var filtered = array.filter(function(item){
   return item < media;
 })
 var filtered2 = array.filter(function(item){
   return item > media;
 })
 min = filtered;
 max = filtered2;
 var lunghezzamin = filtered.length;
 var lunghezzamax = filtered2.length;
console.log(array);
console.log(`La media dei numeri che compongono l'array è ${media}`);
console.log(`Tra i valori dell'array ci sono ${lunghezzamin} valori inferiori alla media e sono ${filtered + '\n'}`);
console.log(`Tra i valori dell'array ci sono ${lunghezzamax} valori superiori alla media e sono ${filtered2 + '\n'}`);
