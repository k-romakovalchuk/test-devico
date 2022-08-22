'use strict'

function foo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === Object) {
      foo(obj[key]);
    } else {
      if (obj[key] === 1) {
        obj[key] = 0;
      } else {
        obj[key] === 1;
      }
    }
  }

  return obj;
}

let d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
}

foo(d);
console.log(d);
