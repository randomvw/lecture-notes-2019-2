//* Named functions are hoisted so that you can use them anywhere in your code.
makes10(10, 0);
makes10(0, 3);
icyHot(120, 150);
isGreaterThan100(300); // ERROR - doesn't exist

const isGreaterThan100 = function (num) {
  return num > 100;
}

function makes10 (num1, num2) {
  return num1 + num2 === 10;
}

function icyHot(tempA, tempB) {
  return (tempA > 100 && tempB < 0) || (tempB > 100 && tempA < 0);
}
