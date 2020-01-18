let char = "University of Arkansas".charAt(0); // "U"

String.prototype.sayHello = () => { console.log("Hello") };

"University of Arkansas".sayHello();

"ABC".sayHello();

let myBeetle = {
  make: "Volkswagen",
  model: "Beetle",
  drive: () => { console.log("VROOM") },
  toString: function() { return this.make + " " + this.model },
}
console.log(myBeetle.toString());

myBeetle.drive();

let prius = {
  make: "Toyota",
  model: "Prius"
}

function Car (make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.drive = function () { console.log(this.model + " VROOM") };

let hummer = new Car('Hummer', 'H3'); // { make: "Hummer", model: "H3" }
let mustang = new Car('Ford', 'Mustang');
let sienna = new Car('Toyota', 'Sienna');
console.log(sienna.make); // Toyota

// Create a function on the sienna instance
sienna.drive = function() { console.log("SCOOTS") };

sienna.drive();
// Call drive on the Car prototype
mustang.drive();
hummer.drive();

console.log(sienna.hasOwnProperty('make'));

function Shape(width, height) {
  this.width = width;
  this.height = height;
}
Shape.prototype.getArea = function () {
  return this.width * this.height;
}

function Rectangle(width, height) {
  Shape.call(this, width, height);
}
Rectangle.prototype = Object.create(Shape.prototype);

let myRectangle = new Rectangle(2, 4);
console.log(myRectangle.getArea());
