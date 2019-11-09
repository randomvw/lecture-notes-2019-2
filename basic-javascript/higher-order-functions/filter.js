
let myArray = [1, 2, 3, 4, 5];
let biggerArray = [10, 20, 30, 40, 50];
let myStrings = [ "a", "ab", "abc", "bde" ];

function containsB(letters) {
  let result = [];

  for (let i = 0; i < letters.length; i++) {
    if (letters.indexOf("b") != -1) {
      result.push(letters[i]);
    }
  }

  return result;
}

function greaterThan2(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 2) {
      result.push(nums[i]);
    }
  }

  return result;
}

function greaterThan30(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 30) {
      result.push(nums[i]);
    }
  }

  return result;
}

function filter(predicate, array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

function isGreaterThan2(element) {
  return element > 2;
}

function isGreaterThan30(element) {
  return element > 30;
}

console.log(filter(isGreaterThan2, myArray));
console.log(filter(isGreaterThan30, biggerArray));

console.log(biggerArray.filter(isGreaterThan30));
let bigNums = biggerArray.filter(element => element > 30);

console.log(bigNums);

let names = ["Alice", "Alex", "Bob", "Charlie"];

console.log(names.filter(name => name.slice(0, 1) === 'A'));

let pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
]

console.log(pets.filter(pet => pet.name.length > 5));
console.log(pets.filter(pet => pet.type === 'dog'));

function isDog(pet) {
  return pet.type === 'dog';
}

console.log(pets.filter(isDog));