/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
var input = 12;
var result = [];
var count = 0;
for ( var i = 0; i <= 10; i++) {
  result[count] = input * i;
  count++;
  }
console.log(result.join(' ') + '\n');
