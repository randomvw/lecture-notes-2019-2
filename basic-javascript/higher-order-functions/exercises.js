
// DRY - Don't Repeat Yourself

let nums = [3, 4, 5, 8];
let moreNums = [10, 20, 30];

let sum = nums.reduce((previous, current) => previous + current, 0);
let anotherSum = moreNums.reduce((previous, current) => previous + current, 0);

let people = [
  { name: "Bob" },
  { name: "Alice" },
  { name: "Jane" }
]

//*  [ "Bob", "Alice", "Jane" ]

let list = people.reduce((previous, current) => {
  previous.push(current.name);
  return previous;
}, []);
console.log(list);

/**
 * Write a function that has one array parameter and returns the
 * sum of the array.
 */
function getSum(nums) {
  let sum = nums.reduce((previous, current) => previous + current, 0);
  return sum;
}

console.log(getSum(moreNums));
console.log(getSum([1, 2, 3]));
console.log(getSum([10, 20, 30, 40]));

/**
 * Create a function that filters out an array to include numbers who only
 * have a certain number of digits.
 */

function filterDigitLength(nums, digits) {
  return nums.filter(num => num.toString().length === digits);
}

console.log(filterDigitLength([2, 7, 9, 1012], 1)); //* [2, 7, 9]
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); //* [232, 555]

let myNumber = 300;

myNumber.toString().length; // 3
`${myNumber}`.length; // 3
"" + myNumber.length; // 3
