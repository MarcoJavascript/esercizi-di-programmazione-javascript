/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.


  http://www.imparareaprogrammare.it
*/
var anno = [31,29,31,30,31,30,31,31,30,31,30,31];
var giorno = 10; //giorno mese
var mese = 3; //numero mese
var somma = 0;
  var i = 0;
do {
somma += anno[i];
i++
}while (i < mese);
function genius (item,index) {
  if (item > 31) {
    return 'Giorno del mese non valido';
  }
  if (index > 12) {
    return 'Mese non valido';
  }
  if(item > 30 && index == 4) {
    return 'Questo mese ha 30 giorni! Reinserisci il numero di giorni';
  }
  if(item > 30 && index == 6) {
    return 'Questo mese ha 30 giorni! Reinserisci il numero di giorni';
  }
  if(item > 30 && index == 9) {
    return 'Questo mese ha 30 giorni! Reinserisci il numero di giorni';
  }
  if(item > 30 && index == 11) {
    return 'Questo mese ha 30 giorni! Reinserisci il numero di giorni';
  }
  return somma - anno[index-1] + item;
}
console.log(`Il giorno da te scelto è ${giorno}`);
switch(mese) {
  case 1:
  console.log('Il mese da te scelto è Gennaio');
  break;
  case 2:
  console.log('Il mese da te scelto è Febbraio');
  break;
  case 3:
  console.log('Il mese da te scelto è Marzo');
  break;
  case 4:
  console.log('Il mese da te scelto è Aprile');
  break;
  case 5:
  console.log('Il mese da te scelto è Maggio');
  break;
  case 6:
  console.log('Il mese da te scelto è Giugno');
  break;
  case 7:
  console.log('Il mese da te scelto è Luglio');
  break;
  case 8:
  console.log('Il mese da te scelto è Agosto');
  break;
  case 9:
  console.log('Il mese da te scelto è Settembre');
  break;
  case 10:
  console.log('Il mese da te scelto è Ottobre');
  break;
  case 11:
  console.log('Il mese da te scelto è Novembre');
  break;
  case 12:
  console.log('Il mese da te scelto è Dicembre');
  break;
}
console.log(genius(giorno,mese));
console.log(`Se hai inserito i dati correttamente, il numero sopra indicato corrisponde al ennesimo giorno dell'anno! Altrimenti reinserisci i dati.`);
