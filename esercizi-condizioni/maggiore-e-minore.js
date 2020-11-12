/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 3, b = 5, c = 20, d = 1;
/*
console.log(Math.min(a,b,c,d));
console.log(Math.max(a,b,c,d));
*/
if (a>b && a>c && a>d)
console.log(`${a} è il numero maggiore`);
else if (b>c && b>a && b>d) {
  console.log(`${b} è il numero maggiore`);
}
else if (c>a && c>b && c>d) {
  console.log(`${c} è il numero maggiore`);
}
else if (d>a && d>b && d>c) {
  console.log(`${d} è il numero maggiore`);
}
if (a<b && a<c && a<d)
console.log(`${a} è il numero minore`);
else if (b<a && b<c && b<d) {
  console.log(`${b} è il numero minore`);
}
else if (c<a && c<b && c<d) {
  console.log(`${c} è il numero minore`);
}
else if (d<a && d<c && d<b) {
  console.log(`${d} è il numero minore`);
}
