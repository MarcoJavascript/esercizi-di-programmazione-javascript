/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var array = [];
var numeri = [4, 12, 25, 37, 46, 55, 62, 69, 72, 81];
var max = 90;
var min = 1;
var winning = [];
var n = Math.round((Math.random()* (max-min)+ min));
for (var i = 0; i < numeri.length; i++) {
while (array.includes(n))
  n = Math.round((Math.random()* (max-min)+ min));
if (numeri.includes(n)) {
  winning.push(n);
  array.push(n);
}else {
  array.push(n);
}
}

console.log('I tuoi numeri sono:' + ' ' + numeri);
console.log('I numeri estratti sono:' + ' ' + array);
var w = winning.length;
switch (w) {
case 1:
console.log(`Peccato! Hai azzeccato solo un numero, cioè ${winning}`);
break;
case 2:
console.log(`Hai fatto ambo! Sono usciti infatti ${winning}`);
break;
case 3:
console.log(`Hai fatto terno! Sono usciti infatti ${winning}`);
break;
case 4:
console.log(`Hai fatto quaterna! Sono usciti infatti ${winning}`);
break;
case 5:
case 6:
case 7:
case 8:
case 9:
console.log(`Hai fatto cinquina! Sono usciti infatti ${winning}`);
break;
case 10:
console.log('Grande! Hai fatto Tombola!');
break;
default:
console.log('Peccato, non ne hai preso nemmeno uno!');
}
