/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/
var str = 'race car';
var check;
var frase = str.replace(/\W/g, '');
function palindromo (stringa) {
for ( var i = 0; i < Math.floor(stringa.length/2); i++) {
  if (stringa[i] === stringa[stringa.length - 1 - i]) {
    check = true;
  }else if (stringa[i] !== stringa[stringa.length - 1 - i]){
    check = false;
    break;
   }
  }
  return check;
}
console.log(str);
console.log(`It's ${palindromo(frase)} that the string is a palindrome.`);
