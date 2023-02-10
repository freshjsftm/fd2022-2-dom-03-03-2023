"use strict";

//literal
const pattern1 = /\b\w{2}\b/gi;
//constructor
const pattern2 = new RegExp("\\b\\d+\\b", "gi");

const str = `Yesterday all my troubles 4 seemed so 5 far away.
Now it looks as though they're here to stay.
Oh, I believe in yesterday.`;

if (pattern1.test(str)) {
  console.log("found", ...str.matchAll(pattern1));
} else {
  console.log("not found");
}
if (pattern2.test(str)) {
  console.log("found", ...str.matchAll(pattern2));
} else {
  console.log("not found");
}

/*
.   будь який один символ
[]  будь який один з переліку 
[^]  будь який один окрім  переліку 

{from, to?} 

\d - одна будь яка цифра
\w - один будь який символ слова
\s - один будь який пробільний символ 

*  {0, infinity}
+  {1, infinity}
?  {0, 1}
*/
