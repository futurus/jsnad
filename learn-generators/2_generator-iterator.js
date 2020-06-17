'use strict';

function* factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
    yield f;
  }
}

for (let i of factorial(5)) {
  console.log(i);
}
