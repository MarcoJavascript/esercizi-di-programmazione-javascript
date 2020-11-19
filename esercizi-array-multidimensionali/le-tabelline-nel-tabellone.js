/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/
var riga = [0,1,2,3,4,5,6,7,8,9,10];
var colonna = riga.slice();
var matrix1 = [];
var s = 'x ';
for ( var t = 0; t < riga.length; t++){
  s += `| ${t} `;
}
  console.log(s);
for ( var j = 0; j < riga.length; j++) {
for ( var i = 0; i < riga.length; i++) {
matrix1[i] = riga[i] * colonna[j];
}
console.log(`${j} | ${matrix1.join(' | ')}`);
}
