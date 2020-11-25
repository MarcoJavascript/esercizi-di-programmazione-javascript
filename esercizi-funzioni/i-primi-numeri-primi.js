/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/
var number = 19;
var check;
var prime = 0;
function primo (n) {
  if (n == 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (var i = 2; i < n; i++) {
    if (n % i !== 0) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  return check;
}
  var j = 2;
function elenco (n) {
  for ( var i = 0; i < n; i++){
if (primo(j) == true) {
  prime = j;
  j++;
console.log(prime);
} else {
  j++;
  i--;
}
 }
}
console.log(`The input number is ${number}.`);
console.log(`It's ${primo(number)} that ${number} is a prime number.`);
console.log(`These are the first ${number} prime numbers:`);
elenco(number);
