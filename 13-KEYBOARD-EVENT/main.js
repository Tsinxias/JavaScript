
//Exercice 1

let character = document.getElementById('character');

document.body.addEventListener('keypress', function(event) {
  let keys = event.keyCode;
  switch (keys) {
    case 48:
      character.style.backgroundColor = 'red';
      character.style.color = "white";
      break;
    case 49:
      character.style.backgroundColor = 'purple';
      break;
    case 50:
      character.style.backgroundColor = 'green';
      break;
    case 51 :
      character.style.backgroundColor = 'cyan';
      break;
    case 52 :
      character.style.backgroundColor = 'brown';
      break;
    case 53 :
      character.style.backgroundColor = 'grey';
      break;
    case 54 :
      character.style.backgroundColor = 'pink';
      break;
    case 55 :
      character.style.backgroundColor = 'orange';
      break;
    case 56 :
      character.style.backgroundColor = 'black';
      break;
    case 57 :
      character.style.backgroundColor = 'yellow';
      character.style.color = "black";
      break;
    case 13 :
      character.style.backgroundColor = 'white';
      break;
  }
}, false);


//Exercice 2

let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');

document.body.addEventListener('keydown', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 38:
      up.classList.add("highlight");
      break;
    case 40:
      down.classList.add("highlight");
      break;
    case 37:
      left.classList.add("highlight");
      break;
    case 39:
      right.classList.add("highlight");
      break;
  }
}, false)

document.body.addEventListener('keyup', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 38:
      up.classList.remove("highlight");
      break;
    case 40:
      down.classList.remove("highlight");
      break;
    case 37:
      left.classList.remove("highlight");
      break;
    case 39:
      right.classList.remove("highlight");
      break;
  }
}, false)
