'use strict'

function func(a) {
  let result = a;
  return (value, operator) => {
    (operator === '+') && (result += value);
    (operator === '-') && (result -= value);
    (operator === '*') && (result *= value);
    (operator === '/') && (result /= value);
    return result;
  }
}

let calc = func(0);
console.log(calc(5, "+"));
console.log(calc(2, "*"));
console.log(calc(3, "-"));
console.log(calc(2, "*"));
console.log(calc(7, "/"));