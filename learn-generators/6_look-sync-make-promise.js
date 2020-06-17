'use strict';

function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  let it = generator();

  it.next().value
    .then((res) => it.next(res))
    .catch((err) => it.throw(err));
}

run(function* () {
  try {
    var foo = yield askFoo();
    console.log(foo);
  } catch(e) {
    console.error(e);
  }
});
