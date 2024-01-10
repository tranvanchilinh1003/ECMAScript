'use strict'


fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students').then(function(response){
response.json().then(function(data){
    let itemApi = '';
    console.log(data);
    
    for(let i = 0; i < data.length; i++){

        itemApi += ` 
        <tr>
        <td>${i+1}</td>
        <td><img src="${data[i].avatar}" alt="" width='50px'></td>

        <td>${data[i].name}</td>
        <td>${data[i].createdAt}</td>
         
        </tr>  `;
    }

    document.getElementById('item').innerHTML = itemApi;
});

})

.catch(function(error){
console.log(error);

});

