/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 2;
var b = 23;
var c = 42;
var d = 3;
var e = 28;
var f = 25;
var g = 21;
/*
if (a>b && a>c && a>d && a>e && a>f && a>g)
  console.log(`la giornata più calda ha raggiunto ${a} gradi`);
  else if (b>a && b>c && b>d && b>e && b>f && b>g) {
    console.log(`la giornata più calda ha raggiunto ${b} gradi`);
  }
     else if (c>a && c>b && c>d && c>e && c>f && c>g) {
      console.log(`la giornata più calda ha raggiunto ${c} gradi`);
    }
    ...
*/
console.log('La giornata più fredda ha raggiunto ' +Math.min(a,b,c,d,e,f,g) +' gradi');
console.log('La giornata più calda ha raggiunto ' +Math.max(a,b,c,d,e,f,g) +' gradi');
