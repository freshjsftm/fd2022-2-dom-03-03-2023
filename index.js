"use strict";

function logMessage() {
  console.log("message: click");
}

const [button] = document.getElementsByTagName("button");
button.addEventListener("click", logMessage);
const test = document.getElementById("test");
//const test = document.querySelector('#test');
console.log(test);
const [input] = document.getElementsByName("input");
console.log(input);
const lis = document.getElementsByClassName("item");
console.log(lis);

const h1 = document.querySelector("h1");
console.log(h1);
const ps = document.querySelectorAll("p");
console.log(ps);
