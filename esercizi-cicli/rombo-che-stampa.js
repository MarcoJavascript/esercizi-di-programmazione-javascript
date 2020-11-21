/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.

  http://www.imparareaprogrammare.it
*/
var input = 3;
var tabella = '';
var spazi;
for ( var i=1; i <= input*2; i+=2) {
  if ( input >= i) {
  spazi = input - i;
}else spazi = i - input;
for ( var j = 1; j <= spazi/2; j++) {
  tabella += ' ';
}
for (var j = 1; j <= input - spazi; j++) {
  tabella += 'x';
}
  tabella += '\n';
}
console.log(tabella);
