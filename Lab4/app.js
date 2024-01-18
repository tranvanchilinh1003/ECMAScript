// 'use strict'
// // vd về promise
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promiss 1!"), 2000)
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promiss 2!"), 1000)
// });

// promise.then(
//     function (value) {
//         console.log(value);
//     }
// )
// promise2.then(
//     function (value) {
//         console.log(value);
//     }
// )


// // vd về async và await

// async function timeout(){
//     try{
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => resolve("Promiss 1!"), 2000)
//         });
//                let promise2 = new Promise((resolve, reject) => {
//             setTimeout(() => resolve("Promiss 2!"), 1000)
//         });
//         const result = await promise;
//         console.log(result);
//         const result1 = await promise2;
//         console.log(result1);
//     }catch(err){
// console.log(err);
//     }
// }

// timeout();

