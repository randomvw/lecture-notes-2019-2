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

let blackWidow = heroes.find(hero => hero.name === 'Black Widow');
let strength25 = heroes.find(hero => hero.strength === 25000);
let strongLady = heroes.find(hero => hero.strength === 136 && hero.sex === 'f');

console.log(strongLady);

let allFemaleHeroes = heroes.filter(hero => hero.sex === 'f');

console.log(allFemaleHeroes);



