'use strict'

let promise = new Promise((resolve, reject) => {
    resolve(1);
 setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//  code này hiểu đơn giản là sao 1s thì nó hiện lên cửa sổ alert có kết quả bằng 1 