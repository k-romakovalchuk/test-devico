'use strict'

function bar(number) {
  let mass = new Array(number);
  for (let i = 0; i < number; i++) {
    mass[i] = new Array(number);
  }

  for (let i = 0, j = number-1; i < number; i++, j--) {
    mass[i][i] = 2;
    mass[i][j] = 2;
    for (let a = i+1; a < j; a++) {
      if (mass[i][a] === 2) continue;
      mass[i][a] = 1;
      mass[j][a] = 1;
      mass[a][i] = 0;
      mass[a][j] = 0;
    }
  }

  return mass;
}

console.log(bar(5));