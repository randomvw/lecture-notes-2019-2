let monkeyASmile = true;
let monkeyBSmile = false;

if (monkeyASmile && monkeyBSmile) {
  console.log("trouble")
}
else {
  console.log("no trouble")
}

// Console log "trouble" if both monkeys are smiling, else
// console log "no trouble"

let hour = 1; // 0 ... 23
let isTalking = true; // true or false

/*
We are in trouble if the parrot is talking and the hour is before 7 or after 20.
*/
if (isTalking && (hour < 7 || hour > 20)) {
  console.log("trouble");
}
else {
  console.log("no trouble");
}