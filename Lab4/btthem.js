async function showProduct() {
    let response = await fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students");
    let products = await response.json();
    const itemApi = products.map(({ id, avatar, name, createdAt }, i) => `
      <tr>
        <td>${id}</td>
        <td><img src="${avatar}" alt="" width="50px"></td>
        <td>${name}</td>
        <td>${createdAt}</td>
        <td><button id="product_${id}" class="btn btn-outline-danger"><i class="bi bi-eye-slash"></i></button></td>
      </tr>`
    ).join("");
    document.getElementById('item').innerHTML = itemApi;

    
    for (let i = 0; i < products.length; i++) {
      (function(index) {
        document.getElementById('product_' + products[index].id).addEventListener('click', async () => {
          console.log(products[index].id);
          let wait3s = new Promise((resolve, reject) => setTimeout(resolve, 3000));
          await wait3s;
          document.getElementById('product_' + products[index].id).parentNode.parentNode.remove(); //xóa phần tử cha id button td tr
        });
      })(i);
    }
  }
  
  showProduct();
// fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
//     .then( (response) =>  {
//         response.json()
//             .then( (data) =>{
//                 const itemApi = data.map(({id, avatar, name, createdAt }, i) => `
//                  <tr>
//                 <td>${id}</td>
//                 <td><img src="${avatar}" alt="" width='50px'></td>
//                 <td>${name}</td>
//                 <td>${createdAt}</td>
//                 <td><button class="btn btn-outline-danger"><i class="bi bi-eye-slash"></i></button></td>
//                 </tr>` ).join("");
//                 document.getElementById('item').innerHTML = itemApi;
//                 console.log(data);
//             });
            
//     }),((error) => {
//         console.log(error);
//     });

//     function multiply(a, b) {
//         console.log(a * b );
//         }
        
//         multiply(5);


