/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var n = 5;
n = n.toString();
switch (n.length) {
  case 1:
    console.log('il numero è composto da 1 cifra');
    break;
    case 2:
    console.log('il numero è composto da 2 cifre');
    break;
    case 3:
      console.log('il numero è composto da 3 cifre');
      break;
      case 4:
      console.log('il numero è composto da 4 cifre');
        break;
  default:
    console.log('numero troppo grande');
}
