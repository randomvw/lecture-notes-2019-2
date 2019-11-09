let myArray = [];
let myObject = {};

let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 57,
  hasDog: true,
  children: [
    { firstName: "Mary", lastName: "Doe", age: 30 },
    { firstName: "Alex", lastName: "Doe", age: 32 },
  ],
  likes: [ "tennis", "fishing", "hiking" ],
};

// To access properties you can use dot notation
console.log(person.firstName); // Jane
console.log(person.age); // 57
console.log(person.likes[0]); // tennis
console.log(person.children[0].firstName); // Mary

// Or you can use square bracket notation
console.log(person["firstName"]); // Jane
console.log(person["age"]); // 57

// Assignment to properties
person.age = 58;
console.log(person.age); // 58

// Dynamically assign a property
let emptyObj = {};

emptyObj.size = 52;
emptyObj["numWheels"] = 4;

// Working with Objects inside of functions
let pizza = {
  price: 12.99,
  toppings: [ "pepperoni", "sausage" ]
}

function addTip(pizza, percent) {
  pizza.tip = pizza.price * (percent / 100);

  return pizza;
}

console.log(addTip(pizza, 10));

// When passing an object into a function, any modifications to the object within the function will modify the original object.
// That is different from primitive values that are passed into a function as a copy of the original value.

function allCaps(myString) {
  // myString is equal to a copy of "George"
  myString = myString.toUpperCase();
}

let name = "George";

allCaps(name);
console.log(name); // George

function nameAllCaps(personParameter) {
  personParameter.name = personParameter.name.toUpperCase();
}

let personObj = {
  name: "George"
}

nameAllCaps(personObj);
console.log(personObj.name);