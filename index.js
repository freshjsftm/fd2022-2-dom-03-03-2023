"use strict";

// setTimeout(callback, 100)
// timeout(200).then(callback)

function timeout(time){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time);
  })
}

timeout(1500)
  .then(()=>{console.log('resolve')})
  .catch(()=>{console.log('reject')})
  .finally(()=>{console.log('finally')})

  