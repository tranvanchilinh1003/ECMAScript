'use strict'

const axios = require('axios').default;

// console.log(axios.isCancel('something'));

axios.get("http://localhost:3000/categories").then( resp =>{
console.log(resp.data);

}).catch( err =>{
console.log(err);
})