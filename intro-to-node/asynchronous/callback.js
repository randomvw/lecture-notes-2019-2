
function greet(callback) {
  console.log('hello');
  callback();
}

greet(() => console.log('The callback was invoked'));
greet(() => console.log('A different callback was invoked'));

setTimeout(() => { console.log('I ran after 5 seconds.') }, 5000);
console.log('I ran immediately');

const fs = require('fs');

fs.readFile('name.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log("ERROR");
    return;
  }
  console.log(data);
});
