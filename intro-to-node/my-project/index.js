const ms = require('ms');
const isPalindrome = require('is-palindrome');

const millis = ms('1d');
const dayString = ms(86400000, { long: true });

console.log(millis);
console.log(dayString);


