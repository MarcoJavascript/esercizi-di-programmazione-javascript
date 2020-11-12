/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var max = 100;
var min = 1;
var r = (Math.random() * (max-min) + min);
var casual = Math.floor(r);
var player1 = 72;
var player2 = 55;
console.log(`Il numero del giocatore 1 è ${player1}`);
console.log(`Il numero del giocatore 2 è ${player2}`);
console.log(`Il numero casuale è ${casual}`);
if (player1 == casual)
console.log('Il giocatore 1 ha azzeccato');
else if (player2 == casual) {
  console.log('Il giocatore 2 ha azzeccato');
}
else if (Math.abs(player1 - casual) < (Math.abs(player2 - casual))) {
  console.log('Nessuno dei due giocatori ha azzeccato, ma il giocatore 1 ci si è avvicinato di più');
}
  else if (Math.abs(player1 - casual) > (Math.abs(player2 - casual))) {
    console.log('Nessuno dei due giocatori ha azzeccato, ma il giocatore 2 ci si è avvicinato di più');
  }
  else if (Math.abs(player1 - casual) == (Math.abs(player2 - casual))) {
    console.log('Parità! Entrambi i giocatori sono alla stessa distanza dal numero casuale! ');
  }
