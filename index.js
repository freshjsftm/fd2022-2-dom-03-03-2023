"use strict";

const myPromise1 = new Promise(executor);

function executor(resolve, reject) {
  Math.random() > 0.5 ? resolve() : reject();
}

console.log(myPromise1);
