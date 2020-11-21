/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
var a = -3;
var b = 6;
var c = 10;
function max (first, second, third) {
  return Math.max(first,second,third);
}
function min (first, second, third) {
  return Math.min(first,second,third);
}
console.log(`Il numero più grande è ${max(a,b,c)} e il più piccolo è ${min(a,b,c)}`);
