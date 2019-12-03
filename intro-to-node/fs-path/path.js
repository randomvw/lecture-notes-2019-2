const path = require('path');

const filePath = '/Users/arobin3/my-file.txt';

const base = path.basename(filePath);
console.log(base);

const dir = path.dirname(filePath);
console.log(dir);

console.log(__dirname);

const parentDir = path.join(__dirname, "..")
console.log(parentDir);

// '~/backend-class/lecture-notes/intro-to-node/fs-path'
// '~/backend-class/lecture-notes/intro-to-node/fs-path/child1/child2'
// __dirname + "/child1" + "/child2"
const childPath = path.join(__dirname, "child1", "child2");

// Use path.parse to console log the directory name and file name with
// its extension to the console.
const myPath = '/Users/<your-user-name>/my-file.js'

const { dir: directory, base: fileName } = path.parse(myPath);

console.log(directory);
console.log(fileName);
// console: '/Users/<your-user-name>'
// console: 'my-file.js'
