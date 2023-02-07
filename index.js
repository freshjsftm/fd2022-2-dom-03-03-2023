"use strict";

const uniq = document.getElementById("uniq");

//uniq.disabled = true

//uniq.innerText = "new text"
//uniq.outerText = "new text"

uniq.addEventListener('click', (event)=>{
  console.log(uniq.innerText)
  console.log(uniq.outerText)
  console.log(uniq.textContent)
})