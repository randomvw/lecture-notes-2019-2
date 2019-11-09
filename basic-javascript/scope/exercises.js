let sentence = "Four score and eleven years ago.";

// Write a function that returns the longest word in
// a string.
function longestWord(sentence) {
  let words = sentence.split();
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(longestWord(sentence)); // eleven

// Create a function called hasSpaces. Return true if the
// string has one or more spaces. Otherwise, return false.
function hasSpaces(word) {
  return word.indexOf(" ") >= 0;
}

console.log(hasSpaces("test"));
console.log(hasSpaces("b bb"));
