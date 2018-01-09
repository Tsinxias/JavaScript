let word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let guess = [' _', ' _', ' _', ' _', ' _', ' _', ' _'];
let enter = 0;

console.log(guess)

// let input = prompt('Put a letter here');

let guessLetter = function(input) {
  while (word !== guess) {
    let input = prompt('Put a letter here').toUpperCase();
    for (let i = 0; i < word.length; i++) {
      if (input === word[i]) {
        guess[i] = word[i];
      }
    }
    console.log(guess);
  }
};


console.log(guessLetter());


/*
for (let i = 0; i < word.length; i++) {
let input = prompt('Put a letter here');

}




if (guess === word) {
console.log('Bravo ! Tu as réussi à trouver le mot');
break;
}
let input = prompt('Put a letter here');
if (input === 'b') {
guess[0] = word[0];
} else if (input === 'o') {
guess[1] = guess[4] = word[1];
} else if (input === 'n') {
guess[2] = word[2];
} else if (input === 'j') {
guess[3] = word[3];
} else if (input === 'u') {
guess[5] = word[5];
} else if (input === 'r') {
guess[6] = word[6];
} else {
alert('Nope. Try Again');
}

console.log(guess);

*/





// let letters = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
//
// let guessedLetters = ['', '', '', '', '', '', ''];
//
// let reachedValue = 0;
//
// let letter = prompt('Enter letter:');
//
// function guessedLetter (letter) {
//   for (let i = 0; i < letters.length; i++) {
//     if (letter === letters[i]) {
//       guessedLetters[i] = letters[i];
//     }
//   }
//   console.log(guessedLetters);
// }
//
//
// console.log(guessedLetters);
//
// while (guessedLetter !== letters) {
//   let letter = prompt('Enter letter:');
//
// }





// let motADeviner = ["B", "O", "N", "J", "O", "U", "R"];
// let lettresDevinees = ["_", "_", "_", "_", "_", "_", "_"];
// let lettresEntrees = [];
// let tentativesRatees = 0;
//
// let guessLetter = function() {
//   while (motADeviner.toString() != lettresDevinees.toString()) {
//     let letterInput = prompt("Entrez une lettre:").toUpperCase();
//     if (lettresEntrees.includes(letterInput) === false) {
//       console.log(letterInput);
//       lettresEntrees.push(letterInput);
//       for (i = 0; i < motADeviner.length; i++) {
//         if (letterInput === motADeviner[i]) {
//           lettresDevinees[i] = letterInput;
//         };
//       };
//       if (lettresDevinees.includes(letterInput) === false) {
//         tentativesRatees++;
//         console.log(tentativesRatees + " tentatives ratées");
//       };
//       console.log(lettresDevinees);
//     };
//   };
// };
//
// console.log(lettresDevinees);
// guessLetter();
// window.alert("C'est gagné !");
