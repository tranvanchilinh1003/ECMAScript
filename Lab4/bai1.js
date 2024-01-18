// let promise = new Promise(function(resolve, reject) {
// var a = "1";
// var b = 1;
// if(a == b ){
//     resolve();

// }else{
//     reject();
// }

// });

// function minhlo(){

//     console.log("Đúng");
// }
// function kolo(){
// console.log("Sai");
// }
// promise
// .then(  () => {
//     console.log("Đúng");

// }, () =>{
// console.log("Sai");
    
// });

// promise
// .then( minhlo

// ).catch (kolo);
let promise = new Promise(function(resolve, reject){ 

});

fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then( (response) =>  {
        response.json()
            .then( (data) =>{
                const itemApi = data.map(({id, avatar, name, createdAt }, i) => `
                 <tr>
                <td>${id}</td>
                <td><img src="${avatar}" alt="" width='50px'></td>
                <td>${name}</td>
                <td>${createdAt}</td>
                </tr>` ).join("");
                document.getElementById('item').innerHTML = itemApi;
                console.log(data);
            });
            
    }),((error) => {
        console.log(error);
    });

    function multiply(a, b) {
        console.log(a * b );
        }
        
        multiply(5);