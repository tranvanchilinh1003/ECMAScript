'use strict'

class Shape{
    move(x, y){
        this.x = x;
        this.y = y;
        console.log(`${this.x} ${this.y}`);
    }
}

let a = new Shape();
a.move("Hàm x", "Hàm y");
