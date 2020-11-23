/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/
var n = 8;
function tof ( input ) {
  if ( input > 0 && input <= 7) {
    return true;
  } else return false;
}
function day (input) {
  if (tof(input) === true) {
    switch (input) {
      case 1:
      console.log('Lunedi');
      break;
      case 2:
      console.log('Martedì');
      break;
      case 3:
      console.log('Mercoledì');
      break;
      case 4:
      console.log('Giovedì');
      break;
      case 5:
      console.log('Venerdì');
      break;
      case 6:
      console.log('Sabato');
      break;
      case 7:
      console.log('Domenica');
      break;
    }
  } else console.log('Numero non valido');
}
tof(n);
day(n);
