// từ khóa this đề cập đến đối tượng hiện tại mà một hàm đang thực thi. Giá trị của this phụ thuộc vào cách hàm được gọi
// VD
var person = {
    firstName: "Linh",
    lastName: "Trần",
    fullName: function() {

        console.log(this.firstName + " " + this.lastName);
    
    }
}

person.fullName();