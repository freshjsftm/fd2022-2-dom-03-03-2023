"use strict";

function handlerBtnUniq(event) {
  // event.cancelBubble = true;
  event.stopPropagation();
  console.group();
  //елемент на якому згенерувалася подія
  console.log('target',event.target);
  //елемент чий обробник виконується
  console.log('currentTarget',event.currentTarget);
  console.groupEnd();
}

const uniq = document.getElementById("uniq");
uniq.addEventListener("click", handlerBtnUniq);
window.addEventListener("click", handlerBtnUniq, true);
document.addEventListener("click", handlerBtnUniq);
document.body.addEventListener("click", handlerBtnUniq);
