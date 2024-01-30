'use strict'

class Person {
    constructor(first_name, last_name){
        this.first_name = "Chí";
        this.last_name = "Linh";
    }

    set firstName(new_FirstName){
        this.first_name = new_FirstName;
    };
    set lastName(new_Last_name){
        this.last_name = new_Last_name;
    };
    get fullName(){
        return this.first_name + ' ' + this.last_name;
    }
}

let person = new Person();

person.firstName = "Linh";
person.lastName = "Trần";
console.log(person.fullName);