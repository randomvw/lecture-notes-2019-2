const sayHi = function() {
  let greeting = "Hi";
  console.log(greeting);
};
sayHi();
sayHi();
sayHi();

const say = function(phrase, name) {
  console.log(phrase + " " + name);
}

say('Hello');
say('Goodbye', 'Jane');
say('Hey', 'Jude');
say('Cheers', 'Sarah', '!!!!');

const sum = function (paramA, paramB) {
  return paramA + paramB;
};

const multiply = function(paramA, paramB) {
  return paramA * paramB;
};

const divide = function(paramA, paramB) {
  return paramA / paramB;
}

console.log(sum(3, 5));
let product = multiply(5, 5);
console.log(product);
console.log(divide(4, 3));
