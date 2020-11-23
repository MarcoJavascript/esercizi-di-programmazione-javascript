/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/
var n = 9999;
number = n.toString();
function length (input) {
  return input.length;
}
console.log(`Il numero inserito è composto da ${length(number)} cifre`);
