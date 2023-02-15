"use strict";

const promise = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("data") : reject("error");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function timeout(time, word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(word);
    }, time);
  });
}

timeout(1500, "wordqwewqe").then((data) => {
  console.log(data);
});

function loadImage(path) {
  const newImage = new Image();
  newImage.src = path;
  return new Promise((resolve, reject) => {
    newImage.addEventListener("load", () => {
      resolve(newImage);
    });
    newImage.addEventListener("error", () => {
      reject(new Error('path invalid'));
    });
  });
}

loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg')
  .then((elem)=>{document.body.append(elem)})
  .catch((error)=>console.log(error))
