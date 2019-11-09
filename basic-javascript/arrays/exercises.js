
function printArray(myArray) {
  console.log(myArray[0]);
}

printArray(['red', 'white', 'blue']);

//* Write a function called endsSwap that takes a single array parameter. Output the same array, but with the first and the last elements swapped.

console.log(endsSwap(['a', 'b', 'c'])); // [ 'c', 'b', 'a' ]
console.log(endsSwap([1, 2, 3])); // [ 3, 2, 1 ]
console.log(endsSwap([1, 2])); // [ 2, 1 ]

function endsSwap(myArray) {
  let first = myArray[0];
  let last = myArray[myArray.length - 1];

  myArray[0] = last;
  myArray[myArray.length - 1] = first;

  return myArray;
}

//* Create a function called firstLast7 that takes a single array parameter. Return true if the first and last elements are 7. Otherwise, return false.

console.log(firstLast7([7, 2, 3, 7])); // true
console.log(firstLast7([7, 6])); // false
console.log(firstLast7([7, 6, 3, 2, 5, 7])); // true

function firstLast7(myArray) {
  return myArray[0] === 7 && myArray[myArray.length - 1] === 7;
}

//* Create a function called sum that takes an array of integers as a parameter. Return the sum of all of the integers within the array.

console.log(sum([1, 2, 3])); // 6
console.log(sum([5, 5])); // 10
console.log(sum([2, 3, 4, 5])); // 14

function sum(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

function firstLastEven(nums) {
  let first = nums[0];
  let last = nums[nums.length - 1];

  return first % 2 === 0 && last % 2 === 0;
}

console.log(firstLastEven([3,2,1])); // returns false
console.log(firstLastEven([4,5,6,7,8])); // returns true
console.log(firstLastEven([2])); // returns true

function myJoin(words, separator) {
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (result != "") {
      result += separator + word;
    }
    else {
      // This is called the first time
      result += word;
    }
  }

  return result;
}

console.log(myJoin(["blue"], "*"));

