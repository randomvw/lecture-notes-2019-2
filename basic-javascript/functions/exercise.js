/*
Write a function called countHi that takes two parameters,
a phrase to repeat, and the number of times to repeat.

Return a string from the function in the following format:
countHi('Hi', 3); ----> '1Hi2Hi3Hi'
countHi('Hi', 4); ----> '1Hi2Hi3Hi4Hi'
countHi('Bye', 2); ----> '1Bye2Bye'
*/

const countHi = function (phrase, repeats) {
  let myString = '';

  for (let count = 1; count <= repeats; count++) {
    myString += count + phrase;
  }

  return myString;
}

console.log(countHi('Hi', 3)); // ----> '1Hi2Hi3Hi'
console.log(countHi('Hi', 4)); // ----> '1Hi2Hi3Hi4Hi'
console.log(countHi('Bye', 2)); // ----> '1Bye2Bye'