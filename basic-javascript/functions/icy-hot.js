const icyHot = function (tempA, tempB) {
  return (tempA < 0 && tempB > 100) || (tempA > 100 && tempB < 0);
}

console.log(icyHot(-50, 120)); // true
console.log(icyHot(120, -50)); // true
console.log(icyHot(120, 150)); // false

/* Turn icyHot into an arrow function */
const icyHot = (tempA, tempB) =>
  (tempA < 0 && tempB > 100) || (tempA > 100 && tempB < 0);
