/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
var input = 3;
var one = 'tiramisù';
var two = 'cheesecake';
var three = 'panna cotta';
var four = 'macedonia';
console.log('MENU:');
console.log('1.TIRAMISU;');
console.log('2.CHEESECAKE;');
console.log('3.PANNA COTTA;');
console.log('4.MACEDONIA.');
console.log(`Ha inserito il numero ${input}, quindi`);
switch (input) {
  case 1:
    console.log(`Lei ha scelto il ${one}`);
    break;
  case 2:
  console.log(`Lei ha scelto la ${two}`);
  break;
  case 3:
  console.log(`Lei ha scelto la ${three}`);
  break;
  case 4:
  console.log(`Lei ha scelto la ${four}`);
  break;
  default:
    console.log('Dolce non disponibile');
}
