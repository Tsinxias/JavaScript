
// initialization

let randomize = function() {
  return Math.ceil(Math.random()*9);
}
console.log(randomize());

// boxes
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');

let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');


let attempt = 3;
let score = 0;



//timer

// let startTimer = function() {
//   if (document.querySelector('bg-red')) {
//
//   }
//
//   setTimeout(function() {
//     one.classList.remove('bg-red');
//     two.classList.remove('bg-red');
//     three.classList.remove('bg-red');
//     four.classList.remove('bg-red');
//     five.classList.remove('bg-red');
//     six.classList.remove('bg-red');
//     seven.classList.remove('bg-red');
//     eight.classList.remove('bg-red');
//     nine.classList.remove('bg-red');
//   }, 1500);
// }




//random colours

let colorize = function() {
  let random = randomize();
  switch(random) {
    case 1 :
      one.classList.add('bg-red');
      break;
    case 2 :
      two.classList.add('bg-red');
      break;
    case 3 :
      three.classList.add('bg-red');
      break;
    case 4 :
      four.classList.add('bg-red');
      break;
    case 5 :
      five.classList.add('bg-red');
      break;
    case 6 :
      six.classList.add('bg-red');
      break;
    case 7 :
      seven.classList.add('bg-red');
      break;
    case 8 :
      eight.classList.add('bg-red');
      break;
    case 9 :
      nine.classList.add('bg-red');
      break;
  }
}

colorize();


let removeRed = function() {
  let reddish = document.querySelector('.red');
  removeRed
  setTimeout(removeRed, 1500);
}


setInterval(colorize, 1000);

console.log(score);

















// tap with mousepad

document.body.addEventListener('keypress', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 49:
      if(seven.classList.contains('bg-red')) {
        score++;
        seven.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        seven.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 50:
      if(eight.classList.contains('bg-red')) {
        score++;
        eight.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        eight.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 51:
      if(nine.classList.contains('bg-red')) {
        score++;
        nine.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        nine.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 52 :
      if(four.classList.contains('bg-red')) {
        score++;
        four.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        four.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 53 :
      if(five.classList.contains('bg-red')) {
        score++;
        five.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        five.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 54 :
      if(six.classList.contains('bg-red')) {
        score++;
        six.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        six.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 55 :
      if(one.classList.contains('bg-red')) {
        score++;
        one.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        one.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 56 :
      if(two.classList.contains('bg-red')) {
        score++;
        two.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        two.classList.remove('bg-red');
        console.log(score);
      }
      break;
    case 57 :
      if(three.classList.contains('bg-red')) {
        score++;
        three.classList.remove('bg-red');
        console.log(score);
      } else {
        score--;
        three.classList.remove('bg-red');
        console.log(score);
      }
      break;
    }
}, false)


// // tap with click
//
// one.addEventListener('click', function(event) {
//   if(redOne == true) {
//     one.classList.remove('bg-red');
//   }
// }, false)
//
//
//
//
// for (var i = 0; i < attempt; i++) {
//
// }



// document.body.addEventListener('keypress', function(event) {
//   let keys = event.keyCode;
//   switch(keys) {
//     case 49:
//       if(seven.classList.contains('bg-red')) {
//         score++;
//         seven.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         seven.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 50:
//       if(eight.classList.contains('bg-red')) {
//         score++;
//         eight.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         eight.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 51:
//       if(nine.classList.contains('bg-red')) {
//         score++;
//         nine.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         nine.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 52 :
//       if(four.classList.contains('bg-red')) {
//         score++;
//         four.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         four.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 53 :
//       if(five.classList.contains('bg-red')) {
//         score++;
//         five.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         five.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 54 :
//       if(six.classList.contains('bg-red')) {
//         score++;
//         six.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         six.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 55 :
//       if(one.classList.contains('bg-red')) {
//         score++;
//         one.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         one.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 56 :
//       if(two.classList.contains('bg-red')) {
//         score++;
//         two.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         two.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
//     case 57 :
//       if(three.classList.contains('bg-red')) {
//         score++;
//         three.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       } else {
//         score--;
//         three.classList.remove('bg-red');
//         console.log(score);
//         colorize();
//       }
//       break;
// }
// }, false)
