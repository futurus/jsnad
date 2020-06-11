'use strict';

const promise = Promise.reject(new Error("D'oh"));

promise.catch(console.error);

