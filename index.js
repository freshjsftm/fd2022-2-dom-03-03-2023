"use strict";

fetch("./assets/js/data.json")
  .then((response)=>{return response.json()})
  .then((data)=>{console.table(data)})

//const promise = fetch("./assets/js/data.json");

// promise.then(
//   (response) => {
//     const responsePromise = response.json();
//     responsePromise.then(
//       (data) => {
//         console.table(data);
//       },
//       () => {
//         console.log("error responsePromise");
//       }
//     );
//   },
//   () => {
//     console.log("error promise");
//   }
// );

// const responsePromise = promise.then((response) => {
//   return response.json();
// });
// responsePromise.then((data) => {
//   console.table(data);
// });
