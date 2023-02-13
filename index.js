"use strict";

const btn = document.getElementById("btn");

//написати функцію, яка буде послідовно через 1 секунду
//виводити в консоль числа від 0 до 10
// setTimeout - recursion
// setInterval - condition

function counterInterval(n = 10) {
  let count = 0;
  return function () {
    const idInterval = setInterval(() => {
      console.log(count++);
      for (let i = 0; i < 1000000000; i++) {}
      if (count >= n) {
        clearInterval(idInterval);
        ///console.timeEnd("marker");
      }
    }, 1000);
  };
}
const counter1 = counterInterval();
// console.time('marker')
// counter1();

function counterTimout(count = 0) {
  console.log(count);
  const idTimeout = setTimeout(()=>counterTimout(count + 1), 1000);
  if (count >= 9) {
    clearTimeout(idTimeout);
    console.timeEnd("marker");
    return;
  }
}
console.time('marker')
counterTimout();
