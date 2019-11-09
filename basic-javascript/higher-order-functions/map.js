let names = [ 'Amy', 'Bob', 'jill' ];

let lowerCaseNames = names.map(name => name.toLowerCase());

console.log(lowerCaseNames);

// Use .map to convert an array of names as strings
// to an array of objects that have a name property
// set to the name string.

console.log(names.map(name => ({ 'name': name })));

/*
[
  { name: 'Amy' },
  { name: 'Bob' },
  { name: 'jill' }
]
*/

let hundreds = [ 100, 200, 300, 400 ]
// Use .map to divide each element in hundreds by 100
// Resulting array === [ 1, 2, 3, 4 ]

console.log(hundreds.map(num => num / 100));

let words = ["clever", "meek", "hurried", "nice"];

// Use .map to add "ly" to the end of each word.
// ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(words.map(word => `${word}ly`));

let bigWords = words
  .filter(word => word.length > 4)
  .map(word => word.toUpperCase());

console.log(bigWords);

// Use .map to return an array of booleans
// indicating whether the word contains the
// letter 'r'.
//
// [ true, false, true, false ]

let wordsWithR = words.map(word => word.indexOf("r") != -1);
console.log(wordsWithR);

let age = 57

if (true) {
  let age;

  if (true) {
    console.log(age);
  }
}

console.log(age);