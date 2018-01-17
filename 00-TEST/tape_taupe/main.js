
// initialization
let randomize = function() {
  return Math.ceil(Math.random()*9);
}

let randomTime = function() {
  return Math.ceil(Math.random()*500)+1500;
}

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

let attempt = 3;
let score = 0;

let button = document.querySelector('button')


//random colours + click event
let colorize = function() {
  if (attempt > 0) {
    let random = randomize();
    switch(random) {
      case 1 :
        one.classList.add('bg-red');
        one.addEventListener('click', function(event) {
          if(one.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            one.classList.remove('bg-red');
          } else if (!one.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 2 :
        two.classList.add('bg-red');
        two.addEventListener('click', function(event) {
          if(two.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            two.classList.remove('bg-red');
          } else if (!two.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 3 :
        three.classList.add('bg-red');
        three.addEventListener('click', function(event) {
          if(three.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            three.classList.remove('bg-red');
          } else if (!three.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 4 :
        four.classList.add('bg-red');
        four.addEventListener('click', function(event) {
          if(four.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            four.classList.remove('bg-red');
          } else if (!four.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 5 :
        five.classList.add('bg-red');
        five.addEventListener('click', function(event) {
          if(five.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            five.classList.remove('bg-red');
          } else if (!five.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 6 :
        six.classList.add('bg-red');
        six.addEventListener('click', function(event) {
          if(six.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            six.classList.remove('bg-red');
          } else if (!six.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 7 :
        seven.classList.add('bg-red');
        seven.addEventListener('click', function(event) {
          if(seven.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            seven.classList.remove('bg-red');
          } else if (!seven.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 8 :
        eight.classList.add('bg-red');
        eight.addEventListener('click', function(event) {
          if(eight.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            eight.classList.remove('bg-red');
          } else if (!eight.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
      case 9 :
        nine.classList.add('bg-red');
        nine.addEventListener('click', function(event) {
          if(nine.classList.contains('bg-red')) {
            score++;
            scoring.innerText = "Your score : " + score;
            nine.classList.remove('bg-red');
          } else if (!nine.classList.contains('bg-red')) {
            attempt--;
            life.innerText = "You have " + attempt + " lives left"
          }
        });
        break;
    };
  };
};

button.addEventListener("click", function () {
  colorize();
  setInterval(colorize, 1000);
  setTimeout(setInterval(miss, 999), 1950); //
}, false);
// colorize();


// event with numpad
document.body.addEventListener('keypress', function(event) {
  let keys = event.keyCode;
  if(attempt > 0) {
    switch(keys) {
      case 49:
      if(seven.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        seven.classList.remove('bg-red');
      } else if (seven.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 50:
      if(eight.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        eight.classList.remove('bg-red');
      } else if (eight.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 51:
      if(nine.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        nine.classList.remove('bg-red');
      } else if (nine.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 52 :
      if(four.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        four.classList.remove('bg-red');
      } else if (four.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 53 :
      if(five.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        five.classList.remove('bg-red');
      } else if (five.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 54 :
      if(six.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        six.classList.remove('bg-red');
      } else if (six.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 55 :
      if(one.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        one.classList.remove('bg-red');
      } else if (one.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 56 :
      if(two.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        two.classList.remove('bg-red');
      } else if (two.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
      case 57 :
      if(three.classList.contains('bg-red')) {
        score++;
        scoring.innerText = "Your score : " + score;
        three.classList.remove('bg-red');
      } else if (three.classList.contains('bg-red') == false) {
        attempt--;
        life.innerText = "You have " + attempt + " lives left"
      }
      break;
    };
  }
});


let miss = function(event) {
  for (var i = 0; i < holes.length; i++) {
    if (holes[i].classList.contains('bg-red')) {
      holes[i].classList.remove('bg-red');
      attempt--;
    }
    life.innerText = "You have " + attempt + " lives left"
  };
};





// let disappearClick = function(event) {
//   for (var i = 0; i < numpadNumber.length; i++) {
//     if (numpadNumber[i].classList.contains('bg-red')) {
//       score++;
//       holes[i].classList.remove('bg-red');
//     } else if (!numpadNumber[i].classList.contains('bg-red')) {
//       attempt--;
//     };
//   };
//   scoring.innerText = "Your score : " + score;
//   life.innerText = "You have " + attempt + " lives left"
// };
