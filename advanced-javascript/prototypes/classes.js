class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log("VROOM!");
  }
}
let sienna = new Car('Toyota', 'Sienna');
let mustang = new Car('Ford', 'Mustang');

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }
}
let mySquare = new Square(2);
console.log(mySquare.getArea());






