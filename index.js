"use strict";

const uniq = document.getElementById("uniq");

const attrTitle = document.createAttribute("title");
attrTitle.value = "button uniq";

console.log(attrTitle)

uniq.setAttributeNode(attrTitle)

// uniq.setAttribute('title', 'qweqwe')
// uniq.setAttribute('title', '11111')