const heroes = [
  { name: 'Hulk', strength: 90000, sex: 'm' },
  { name: 'Spider-Man', strength: 25000, sex: 'm' },
  { name: 'Hawk Eye', strength: 136, sex: 'm' },
  { name: 'Thor', strength: 100000, sex: 'm' },
  { name: 'Black Widow', strength: 136, sex: 'f' },
  { name: 'Vision', strength: 5000, sex: 'm' },
  { name: 'Scarlet Witch', strength: 60, sex: 'f' },
  { name: 'Mystique', strength: 120, sex: 'f' },
  { name: 'Namora', strength: 75000, sex: 'f' },
];

let nums = [ 1, 2, 3, 4 ];

let getSum = 0;

for (let i = 0; i < nums.length; i++) {
  getSum += nums[i];
}

let sumReduce = nums.reduce((previous, current) => previous + current, 0);

console.log(sumReduce);

let names = ["Bob", "Alice", "Alex"];

// "BobAliceAlex"

let combined = names.reduce((previous, name) => previous + name, "");
console.log(combined);

let combinedStrength = heroes.reduce((accumulatedStrength, hero) => {
  return accumulatedStrength + hero.strength;
}, 0);

console.log(combinedStrength);