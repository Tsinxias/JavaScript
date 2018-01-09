
let word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let guess = [' _', ' _', ' _', ' _', ' _', ' _', ' _'];
let enter = [];
let failTries = 0;

console.log(guess)

let guessLetter = function() {
  while (word.toString() !== guess.toString()) {
    let input = prompt('Put a letter here').toUpperCase();
    if (enter.includes(input) === false) {
      enter.push(input);
      for (let i = 0; i < word.length; i++) {
        if (input === word[i]) {
          guess[i] = word[i];
        }
      }
      if (word.includes(input) === false) {
        failTries++
        console.log('Lettre(s) entrée(s): ' + enter);
        console.log(failTries + ' tentative(s) ratée(s)');
      }
      console.log(guess);
    }
  }
};

guessLetter();
alert('C\'est gagné!')
if (confirm('Veux-tu rejouer ?')) {
  open(location.reload(), 'Bye alors!');
};
