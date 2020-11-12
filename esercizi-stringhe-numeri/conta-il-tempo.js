/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var seconds = 32657;
var hour = seconds/3600;
var h = Math.floor(hour)
var appoggio = hour - h;
var minutes = appoggio*60;
var m = Math.floor(minutes);
if (m>59) {
  h = h + 1
  m = 0
}
var appoggio2 = minutes - m;
var s = Math.round(appoggio2*60);
if (s>59) {
  m = m + 1
  s = 0
}
console.log(`${seconds} secondi corrispondono a ${h} ore, ${m} minuti e ${s} secondi`);
