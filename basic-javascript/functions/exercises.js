/*
* Create a function called makes10 that takes two parameters that are both numbers. Return true if their sum is 10 else return false.
*/
const makes10 = function (num1, num2) {
  return num1 + num2 === 10;
}

console.log(makes10(3, 7)); // true
console.log(makes10(10, 0)); // true
console.log(makes10(0, 3)); // false

/*
* Create a named function called hasTeen that takes two parameters that are both numbers
* If one of the numbers is in the range of 13..19 inclusive, then return true,
* else return false.
 */
function hasTeen(numA, numB) {
  let value = (numA >= 13 && numA <= 19) || (numB >= 13 && numB <= 19);
  return value;
}

console.log(hasTeen(13, 20));

function hasTeen1(numA, numB) {
  if ((numA >= 13 && numA <= 19) || (numB >= 13 && numB <= 19)) {
    return true;
  }
  else {
    return false;
  }
}

function hasTeen2(numA, numB) {
  if (numA >= 13 && numA <= 19) {
    return true;
  }
  else if (numB >= 13 && numB <= 19) {
    return true;
  }
  else {
    return false;
  }
}

/*
* Create a function called getArea with a parameter of a radius. Return the
* area of a circle. (Use Math.PI for the value of Pi); PI * radius * radius
*/
function getArea(radius = 0) {
  return (radius * radius * Math.PI);
}

console.log(getArea(2));
console.log(getArea());

function getSum(numA = 0, numB = 0) {
  return numA + numB;
}

console.log(getSum()); // 0
console.log(getSum(2)); // 2
console.log(getSum(2, 3)); // 5

/*
* Create an arrow function called add7 that takes a parameter and adds 7
* to it.
*/
const add7 = num => num + 7;

console.log(add7(7));

/*
* Create a function that returns a function that is used to add numbers to
* other numbers.
*/
const add8 = createAddFunction(8);
console.log(add8(3)); // 11

const add9 = createAddFunction(9);
console.log(add9(2)); // 11

function createAddFunction(num) {
  return inputNum => inputNum + num;
}

/*
* Given an int n, return true if it is within 10 of 100. Note: Math.abs(num) computes the absolute value of a number.

* nearHundred(93) → true
* nearHundred(90) → true
* nearHundred(89) → false
*/
function nearHundred(num) {
  return Math.abs(num - 100) <= 10 || Math.abs(num - 200) <= 10;
}

console.log(nearHundred(93)); //→ true
console.log(nearHundred(90)); //→ true
console.log(nearHundred(89)); //→ false
console.log(nearHundred(-90)); //→ false

/*
* Create a function called max that takes three or less number parameters.
* Return the largest number.
*/
console.log(max(1, 2, 3)); // 3
console.log(max(1, 3, 2)); // 3
console.log(max(3, 2, 1)); // 3
console.log(max(3, 2)); // 3
console.log(max(3)); // 3

function max(numA = 0, numB = 0, numC = 0) {
  if (numA > numB && numA > numC) {
    return numA;
  }
  else if (numB > numA && numB > numC) {
    return numB;
  }
  else if (numC > numA && numC > numB) {
    return numC;
  }
  else {
    return numA;
  }
}
console.log(max(3,3,3));

function max(numA, numB, numC) {
  return Math.max(numA, numB, numC);
}

/*
* Write a function called triangleArea that takes
* a base and a height parameter and returns the area.
* (base * height) / 2
*/
function triangleArea(base, height) {
  return (base * height) / 2;
}

//const triangleArea = (base, height) => (base * height) / 2;

/*
* Create a function called concatName that takes two parameters, a first name and a last name.
* Return a string in the form of "Last, First".
*
* concatName("Aaron", "Robinson") --> "Robinson, Aaron"
*/
function concatName(firstName, lastName) {
  return (lastName + ", " + firstName);
}

console.log(concatName("Aaron", "Robinson"));

2^2 --> 2 * 2 --> 4
2^3 --> 2 * 2 * 2 --> 8

/*
* Write your own pow function that calculates the
* power of a base and its exponent.
*/
pow(2, 2); // 4
pow(2, 3); // 8
pow(3, 2); // 9
pow(3, 3); // 27
