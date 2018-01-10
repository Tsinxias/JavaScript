
let word = ['B', 'O', 'N', 'J', 'O', 'U', 'R']; // Word to be guessed
let guess = [' _', ' _', ' _', ' _', ' _', ' _', ' _']; // Array that will be displayed when guessing the word
let enter = []; // Empty array that will contain all letter tried.
let failTries = 0; // Count of failed tries when entering a bad answer

console.log(guess) //displaying the number of letter people have to guess

let guessLetter = function() { // Initializing the function
  while (word.toString() !== guess.toString()) {
    // While loop that will run until the array: word 'BONJOUR' is not the same as the array: guess.
    // The 'toString()' transform the array to a string.
    // The 'guess' array will be filled with the right answer inputted by people.
    let input = prompt('Put a letter here').toUpperCase(); // Initializing people's answers. All letter inputed will be transformed into Upper Casing.
    if (enter.includes(input) === false) {
      // Here we verify if the input entered by people is included inside the empty array: enter.
      // If the input is not included inside (translated with the false statement), the code beneath will run. Otherwise, nothing will happen.
      // This will prevent same answers to be inputted many times in the array: enter. Each letter will be entered once.
      enter.push(input); // This will enter people's input inside the array: enter.
      for (let i = 0; i < word.length; i++) {
        // For loop that will run every time the if statement above is working.
        if (input === word[i]) { // If the input is equal to one of the argument inside the array: word, run the code beneath.
          guess[i] = input; // If the if statement is true, the input will be placed in the right position inside the array: guess.
        }
      } // This loop will compare the input to all arguments inside the array: word. This process will occur 7 times (thanks to the for loop).
      if (word.includes(input) === false) { // Here is the same as the first if statement but with the array: word.
        failTries++ // This will add 1 failTries whenever the inputted word is a bad answer.
        console.log('Lettre(s) entrée(s): ' + enter); // Bad answer will occur this display
        console.log(failTries + ' tentative(s) ratée(s)'); // Bad answer will occur this display
      }
      console.log(guess); // This will display the array: guess every inputted word.
    }
  }
};

guessLetter();
console.log(`Bravo ! Tu as réussi à trouver le mot! \n Tu as ${failTries}.`)
alert('C\'est gagné!')
if (confirm('Veux-tu rejouer ?')) {
  open(location.reload());
} else {
   alert('Bye alors!');
}
