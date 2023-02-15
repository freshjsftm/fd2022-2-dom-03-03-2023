"use strict";

fetch("./assets/js/data.json")
  .then((response)=>response.json())
  .then((data)=>{
    data.forEach((user)=>{
      console.log(user.lastName, user.age)
    })
  })
  .catch((error)=>{console.log(error)})
  .finally(()=>{console.log('finally')})

