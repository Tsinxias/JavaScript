
// initialization
let randomize = function() {
  return Math.ceil(Math.random()*9);
}

// let randomTime = function() {
//   return Math.ceil(Math.random()*500)+1500;
// }

// attributions
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');

let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let holes = document.getElementsByClassName('box');

let life = document.getElementById('life');
let scoring = document.getElementById('scoring');

let attempt = 10;
let score = 0;

let button = document.querySelector('button');
