// var name = "Linh Trần";
// var gender = 18;



fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(function(response){
response.json().then(function(data){
    let itemApi = '';
    console.log(data);
    const apiData = data.data;
    
    for(let i = 0; i < apiData.length; i++){

        itemApi += ` 
        <tr>
        <td>${apiData[i]["ID Nation"]}</td>
        <td>${apiData[i].Nation}</td>
        <td>${apiData[i]["ID Year"]}</td>
        <td>${apiData[i].Year}</td>
        <td>${apiData[i].Population}</td>    
        </tr>  `;
    }

    document.getElementById('item').innerHTML = itemApi;
});

})

.catch(function(error){
console.log(error);

});
