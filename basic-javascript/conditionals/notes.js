if (3 > 20) {
  console.log("ran");
}

let storedPassword = "supersecret123";
let enteredPassword = "wrongPass";

if (storedPassword === enteredPassword) {
  console.log("all of my secrets");
}
else {
  console.log("bad password");
}

let food = "broccoli";

if (food === "broccoli") {
  console.log("healthy");
}
else if (food === "granola") {
  console.log("kinda healthy");
}
else if (food === "cookies") {
  console.log("SHAME");
}
else {
  console.log("that's not even food");
}

let weekday = true;
let vacation = true;

if (vacation || !weekday) {
  console.log("we can sleep in")
}
else {
  console.log("we cannot sleep in")
}
