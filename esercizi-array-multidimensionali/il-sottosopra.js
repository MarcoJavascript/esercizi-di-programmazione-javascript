/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input:
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/
var array = [];
var array1 = [];
array[0] = [1,2];
array[1] = [3,4];
array[2] = [5,6];
array[3] = [7,8];
console.log(array);
for ( var i = 0; i < 2; i++) {
  array1[i] = [];
  for ( var j = 0; j < array.length; j++) {
    array1[i][j] = array[j][i];
  }
}
console.log(array1);
