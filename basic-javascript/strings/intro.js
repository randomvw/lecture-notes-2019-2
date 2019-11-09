let firstName = "Aaron";
let lastName = "Robinson";
let fullName = firstName + " " + lastName;

// String template literals use backticks
fullName = `My name:${firstName} ${lastName}`;
console.log(fullName);

let myAddress = `123 Main Street
Bentonville, AR 72712`;

// Escape characters with a backslash
console.log("The title of the book is \"The Hobbit\"");

myAddress = "123 Main Street\nBentonville, AR 72712";
console.log(myAddress);

let columns = "column1\tcolumn2";
let values = "val1\tval2";
console.log(columns);
console.log(values);

fullName = "Robert Smith";
console.log(fullName.substring(fullName.indexOf(" ") + 1));

function endsWithOther(stringA, stringB) {
  let shortString;
  let longString;

  if (stringA.length > stringB.length) {
    shortString = stringB;
    longString = stringA;
  }
  else {
    shortString = stringA;
    longString = stringB;
  }
  // The end of the long string, which is the length of the short string.
  let ending = longString.slice(-shortString.length);

  return ending.toLowerCase() === shortString.toLowerCase();
}
console.log(endsWithOther('yyy', 'HelloYyy')); //true
console.log(endsWithOther('HelloYyy', 'Yyy')); //true
console.log(endsWithOther('Zzzy', 'Helloxxy')); //false

function endsWithOther2(stringA, stringB) {
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();
  return stringA.endsWith(stringB) || stringB.endsWith(stringA);
}

function isPlural(word) {
  return word.charAt(word.length - 1) === 's';
}

console.log(isPlural("changes")) // ➞ true
console.log(isPlural("change")) // ➞ false
console.log(isPlural("dudes")) // ➞ true
console.log(isPlural("magic")) //➞ false

console.log("dudes".charAt(0));
console.log("dudes"[0]);

function isEmpty(word) {
  // return word.length === 0;
  // return word[0] === undefined;
  // return word === "";
  // return !word;
}

console.log(isEmpty("")) //➞ true
console.log(isEmpty(" ")) // ➞ false
console.log(isEmpty("a")) // ➞ false

function hasSpaces(word) {
  // return word.indexOf(" ") >= 0;
  return word.includes(" ");
}

console.log(hasSpaces("hello")); // false
console.log(hasSpaces(" ")); // true
console.log(hasSpaces("hello, world")) // true
