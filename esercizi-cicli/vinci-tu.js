/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var tiri = 12;
const player1 = 'Alberto';
const player2 = 'Lorenzo';
var punteggio1 = 0;
var punteggio2 = 0;
var min = 1;
var max = 6;
for (var i = 0; i < tiri; i++) {
  var m = (Math.random() * (max - min) + min);
  var result1 = Math.floor(m);
  punteggio1 = punteggio1 + result1;
  var v = (Math.random() * (max - min) + min);
  var result2 = Math.floor(v);
  punteggio2 = punteggio2 + result2;
}
console.log(`${player1}, tirando il dado ${tiri} volte, ha ottenuto ${punteggio1} punti.`);
console.log(`${player2}, tirando il dado ${tiri} volte, ha ottenuto ${punteggio2} punti`);
if ( punteggio1 > punteggio2){
console.log(`Il vincitore è ${player1}`);
}else if (punteggio1 < punteggio2) {
  console.log(`Il vincitore è ${player2}`);
} else if (punteggio1 === punteggio2) {
  console.log('Pareggio!');
}
