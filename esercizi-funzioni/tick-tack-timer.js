/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0


  http://www.imparareaprogrammare.it
*/
var n = 18;
function timer (input) {
  for ( var i = n - 1; i >= 0; i--){
    console.log(i);
  }
}
timer(n);
