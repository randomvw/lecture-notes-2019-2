const fs = require('fs'); // uses callbacks
const fsPromise = require('fs').promises;

fs.readFile('port.txt', 'utf-8', (error, data) => {
  console.log(data); // 3000
});

const filePromise = fsPromise.readFile('port.txt', 'utf-8');

filePromise.then(
  (data) => { console.log(data); },
  (error) => { console.log(error); }
)

console.log("Still reading the file");

/**
*  Write a file called hello.txt with the contents "hello world"
*  using the fs promise library. After the file is written, console
*  log "Wrote the file hello.txt".
*/

const newFilePromise = fsPromise.writeFile('hello.txt', 'hello world', 'utf8');

newFilePromise.then(
  () => {
    console.log('Wrote the file hello.txt');
    return 'Abracadabra';
  },
  (error) => { console.log(error) } // optional
).then(
  (resolvedValue) => { console.log(resolvedValue) }, // Abracadabra
  (error) => { console.log(error) } // optional
)


/*
1. Create an empty file
2. Once the file is created, append some text to that file
3. Read the file
4. Console log the contents of the file
*/

fsPromise.writeFile('promise-file.txt', '').then(
  () => {
    return fsPromise.appendFile('promise-file.txt', 'some text');
  }
).then(
  () => {
    return fsPromise.readFile('promise-file.txt', 'utf-8')
  }
).then(
  (fileContents) => {
    console.log(fileContents);
  }
)
console.log('End of file');