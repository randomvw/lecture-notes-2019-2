let myName = require('./lib/name');
let car = require('./lib/car');
let drive = require('./lib/car').drive;

console.log(myName);
console.log(car.make, car.color, car.wheels);
car.drive();
drive();
