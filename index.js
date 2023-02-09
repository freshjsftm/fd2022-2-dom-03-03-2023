"use strict";

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', (event)=>{
  //console.log(event.type)
})

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {target:{login}} = event;
  console.dir(login.value);
});
// form.addEventListener("reset", (event) => {
//   event.preventDefault();
//   console.dir(event);
// });

