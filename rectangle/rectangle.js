class Rectangle{

    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    } 

    area(){
        return this.length * this.breadth;
    }
}

module.exports = Rectangle;
