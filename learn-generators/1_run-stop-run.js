'use strict';

function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield `${i}`;
  }
}

for (let i of range(5,10)) {
  console.log(i);
}
