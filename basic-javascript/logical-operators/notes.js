let a = 300;
let b = 300;
let c = a == b;

console.log(c);

let x = 5;
let y = "5";
let z = x === y;

console.log(z);

//   AND    &&
let isOld;
let hasWrinkles = true;
let over90 = false;
isOld = hasWrinkles && over90;

console.log(isOld);

//  OR    ||
let ownsBeanieBabies = false;
let ownsRollerblades = false;
let isCool = ownsBeanieBabies || ownsRollerblades;

console.log(isCool);

console.log(true || false && false);

console.log( 1 == 2 && 4 == 2 );  // false
console.log( 2 == 2 && 4 == "4" );  // true

2 > 3;   // false
2 >= 3;  // false
5 < 2;   // false
5 <= 2;  // false

(3 > 2) && (2 < 3);  // true

console.log(!true); // false

let isBrown = true;
let isBlack = true;

console.log(!isBrown && isBlack); // false

1 !== 3; // true
1 !== "1"; // true
1 !== 1; // false
"1" != 1; // false
