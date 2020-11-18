/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
var array2 = [];
for ( var i = 0; i < 100; i ++) {
  array2[i] = Math.round(Math.random() * (50-1) + 1);
  }
    console.log(array2);
    do {
  var numero = prompt('Inserisci un numero');
  var filtered = array2.filter(function(item){
    return item % numero !== 0;
  })
  }while (filtered.length !== 0);
  /*
  Il programma continua a chiedere numeri fino a quando
  non saranno eliminati dall'array tutti i numeri
  multipli del numero inserito. Alla fine verrà stampato
  l'array vuoto
  */
 console.log(filtered);
