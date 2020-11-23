/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4


  http://www.imparareaprogrammare.it
*/
var n = 123456;
number = n.toString();
var k = 4;
var i = number.length - k;
function count ( input, index, ver ) {
  if (ver >= input.length)
  return 0;
  else
 return input[i];
}

console.log(count(number,i,k));
