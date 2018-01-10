
let result = Math.max(-1, 3, 7, 9);
let results = Math.min(-7, 5, 8, 10);
console.log(result);
console.log(results);
// console.log(dir(result));

let random = Math.random()*11;
console.log(random)

let round = Math.round(1.8);
let above = Math.ceil(1.3);
let below = Math.floor(1.3);
console.log(round);
console.log(above);
console.log(below);

console.log('For example: ');
for (var i = 0; i < Math.round(5.6); i++) {
  console.log(i);
}

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits);
for (var i = 0; i < 5; i++) {
  let randomNumber = Math.random()*fruits.length;
  let fruitRound = Math.floor(randomNumber);
  // if we use round, the fruits.length goes to 3 and we might have an 'undefined' item
  console.log(fruits[fruitRound], randomNumber, fruitRound);
}
