function slowFunction() {
  let animals = ['sloth', 'turtle', 'snail'];

  for (let animal of animals) {
    console.log(animal + " is off to the races");
    let finishTime = Math.random() * 10000;
    setTimeout((word, time) => {
        console.log(word + " finished the race after " + (time / 1000) + " seconds")
      }, finishTime, animal, finishTime);
  }
}

function fastFunction() {
  setTimeout(() => { console.log('Fast') }, 2000);
}

slowFunction();
fastFunction();