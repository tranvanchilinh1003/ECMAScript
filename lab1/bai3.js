
var sayhello = function(name , gender){
    console.log(`Hello tên tui là: ${name}. \n Tổi: ${gender}`);

}
sayhello(name = "Linh", gender = 19);


fetch('https://api.publicapis.org/entries').then(function(response){
response.json().then(function(data){
    let itemApi = '';
    console.log(data);
    const apiData = data.entries;
    for(let i = 0; i < 15; i++){

        itemApi += ` 
        <tr>
        <td>${i+1}</td>

        <td>${apiData[i].API}</td>

        <td>${apiData[i].Auth}</td>
        <td>${apiData[i].Category}</td>
        <td>${apiData[i].Description}</td>
        <td>${apiData[i].Link}</td>
         
        </tr>  `;
    }

    document.getElementById('api3').innerHTML = itemApi;
});

})

.catch(function(error){
console.log(error);

});
