
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




// Nicolay : https://github.com/yadrychnikovNicolay/JavaScript/blob/master/06-HANGMAN/index.html
// let wordToGuess = ["B", "O", "N", "J", "O", "U", "R"]; // create an array with the word to guess
//     let guessedLetters = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]; // create an array with the 'hidden' letters to guess
//     let allLetters = [" "]; // create an array to store already used letters
//     let failed = 0; // counter of wrong letters
//     let guessLetter = function(){ // definition of the function
//       /* while loop that runs until the arrays wordToGuess and guessedLetters, both converted to
//       strings, are the same.
//       launch a prompt that asks for the letter the user wants to try, puts it in uppercase */
//       while (guessedLetters.toString() !== wordToGuess.toString()) {
//         let letterGuessed = window.prompt("Enter a letter").toUpperCase();
//       /* for loop that goes from 0 to the length of the array with the word to guess.
//       Checks if the letter from the input exists in the word to guess, if so, puts it in the
//       array with the 'hidden' letters. */
//       for (var i = 0; i < wordToGuess.length; i++) {
//         if (letterGuessed === wordToGuess[i]) {
//           guessedLetters[i] = letterGuessed;
//           }
//       }
//       /* checks if the letter from the prompt was already used, if not, the failed counter goes up.
//
//       include method checks if a value is included in an array, returns true or false.*/
//       if (guessedLetters.includes(letterGuessed) !== true) {
//         failed++;
//         console.log(failed + " wrong letters");
//       }
//       console.log(guessedLetters); // shows the array with the so far guessed letters.
//     }
//   }
//   guessLetter(); //function relaunch




// Laurenhu : https://github.com/laurenthu/JavaScript/blob/master/06-GAME_HANGMAN/main.js
// // we initialiaze the variables
// let word = ['B', 'O', 'N', 'J', 'O', 'U', 'R']; // we store the words as an array
// let foundLetters = ['_', '_', '_', '_', '_', '_', '_']; // we create the array to store the letter already found by the user
// let alreadyUsed = []; // BONUS: we store the already used letters
// let countFoundLetters = countWrongLetters = countAlreadyUsedLetters = 0; // we initialiaze three variables to count the attempts.
//
//
// // we create the function
// let guessLetter = function () {
//
//   let userInput = String(prompt('Which letter do you want to test?')).toUpperCase(); // we request a letter to the user and store it in the variable userInput
//   let response = 0; // we initialiaze the response that the function will return. By default, it is 0. We use this variable as a statut code
//
//   //console.log(alreadyInserted);
//   // We check in the already used letters array thanks to the prototype/function "includes".
//   // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//   if (alreadyUsed.includes(userInput)) { // if the letter is alreay used.
//     response = 2; // we change the response to the status "2"
//   } else { // if it is a new letter
//     alreadyUsed.push(userInput); // we store this letter in the already used letters array
//     word.forEach(function (item, index) { // we loop the array
//       // item is the current value
//       // index is the current position
//       if (userInput === item) { // if the user input is = to the current value
//         // we save the current value in the "already found letters" array at the current position
//         // the both array as always the same number of elements (it's a kind of empty mirror). So the current position is the same
//         foundLetters[index] = userInput;
//         response = 1; // we change the response status code to 1
//       }
//     });
//   }
//
//   return response; // we return the status code
//
// };
//
// /**********
// * Program *
// **********/
//
// // Welcome message to display in the log
// console.log('Welcome in this hangman game');
//
// // While we don't find all the elements, we continue the loop
// // We test thanks to the every() prototype/function if there are still some _ in the foundLetters array
// // in the () of the every, we test each value (aka item) in the foundLetters array with the condition inside the () (aka if item is not a '_')
// // if every return "true", we found all the letters, so we must reverse the answer (thanks to !) to continue the loop
// while (!foundLetters.every(item => (item != '_'))) {
//
//   let response = guessLetter(); // we store the status return by guestLetter() function. Reminder: it's 0, 1 or 2
//
//   if (response == 0) { // The letter is not in the current word
//     console.log('✗ Sorry this letter is not in the word');
//     countWrongLetters++; // we increase the "bad answer" counter by 1
//   } else if (response == 1) { // the letter is in the current word
//     console.log('✓ This letter is in the word');
//     countFoundLetters++;  // we increase the "good answer" counter by 1
//   } else { // the status is not 0 or 1, so it's 2 => we already used this letter
//     console.log('✗ You already used this letter');
//     countAlreadyUsedLetters++; // we increase the "already user letter" counter by 1
//   }
//
//   console.log(foundLetters); // we display the already found letters to the user
//
// };
//
// // as the trials are unlimited, we will never see this message except if we found the words.
// console.log('************************\n* ☻ Congrats! You win! *\n************************'); // cosmetic message to announce the victory
// // we display the different counters inside the text.
// // I used some \n (new line) and some \t (tab) for a more cosmetic display
// console.log('You typed\n\t- ' + countFoundLetters + ' correct letters\n\t- ' + countWrongLetters + ' wrong letters\n\t- ' + countAlreadyUsedLetters + ' already used letters');
//



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
