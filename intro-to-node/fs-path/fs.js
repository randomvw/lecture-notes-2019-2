const fs = require('fs');
const path = require('path');

const myHtmlFilePath = path.join(__dirname, 'index.html');

// Read the html file
const contents = fs.readFileSync(myHtmlFilePath, { encoding: 'utf-8' });

console.log(contents);

console.log('Started reading file asynchronously');
// Read the html file asynchronously
fs.readFile(myHtmlFilePath, 'utf-8', (err, data) => {
  console.log(data);
  console.log('Finished reading file');
})

console.log('Reached end of code');

// Write a file
fs.writeFileSync('new-file.txt', 'Mmmm, pancakes!');
console.log("Created a file named new-file.txt");

// Update a file
fs.appendFileSync('new-file.txt', '\nBut don\'t forget about waffles!');
console.log("Added a line about waffles to new-file.txt");

// Delete a file
fs.unlinkSync('new-file.txt');
console.log("Deleted new-file.txt");
