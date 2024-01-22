'use strict'
var fs = require('fs');
var axios = require('axios');

fs.readFile(

    './db.json',
    {encoding: 'utf8'},
    function(err, data){
        console.log("Data loaded from disk", data);

        axios.get('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
        .then(function(res){
console.log("Data dowloaded from url", res.data);

        });
    }
)
