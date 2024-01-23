function car(){
    this.fuel = 50;
    this.distance = 0;

}

car.prototype.move = function(){

    if(this.fuel < 1){
        throw new RangeError("Hết xăng rồi cu mau đổ đi");
        this.fuel --;
        this.distance += 2;
    } if(this.fuel >= 60){
        throw new RangeError("Xe đầy xăng");
        this.fuel ++;
    }
if(this.fuel > 1 && this.fuel < 60){
    throw new RangeError("Xe bthg");
}
}


var carr = new car();

// carr.move();
// carr.addFuel();


class Peson{
    constructor(){
        this.fuel = 5;
        this.distance = 0;
    
    }
    move(){

        if(this.fuel < 1){
            throw new RangeError("Hết xăng rồi cu mau đổ đi");
            this.fuel --;
            this.distance += 2;
        } if(this.fuel >= 60){
            throw new RangeError("Xe đầy xăng");
            this.fuel ++;
        }
    if(this.fuel > 1 && this.fuel < 60){
        throw new RangeError("Xe bthg");
    }
}

}

var p = new Peson();

console.log(p.move());