'use strict'

document.getElementById("form_contant").addEventListener("submit", (e)=>{
var name = document.getElementById("full_name").value;
var email = document.getElementById("email").value;
var content = document.getElementById("content").value;
var error = document.getElementsByClassName("err");
var haserr = true;
error[0].innerHTML = '';
error[1].innerHTML = '';
error[2].innerHTML = '';
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.(com|vn|org|gov|co)|fpt\.edu\.vn)$/;
if(name.trim() == ' ' || name.length < 5 ){

    error[0].innerHTML = "Nhập tên trên 5 kí tự";
haserr = false;
}
if(!emailRegex.test(email)){
    error[1].innerHTML = "Nhập đúng email";
haserr = false;
}

if(content.trim() == '' || content.length < 10 ){
    error[2].innerHTML = "Nội dung ít hơn 10 kí tự";
    haserr = false;

}

if(haserr == false){
e.preventDefault();
}

});


document.getElementById("form_feedback").addEventListener('click', (e)=>{
var feedback = document.getElementById("feedback").value;
var loi = document.getElementById("loi");
var err = true;
loi.innerHTML = '';
if(feedback.trim() == ''){
loi.innerHTML = 'Vui lòng nhập';
err = false;
}
if(err === false){
e.preventDefault;
}

});



    