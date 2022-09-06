/* Write a guessing game where the user has to guess a secret number between 1 and 50. 
After every guess the program tells the user whether their number was too large or too small. 
At the end the number of tries attempted should be printed. 
It counts only as one try if they input the same number multiple times consecutively. */

const message = document.querySelector('h1');
let text;

let attempts = 0;
let guess;
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomNumber = randomRange(1, 50);
console.log(randomNumber);

let usedNumbers = [];

// User input guess number
do {
  guess = parseInt(prompt('Guess a number between 1 - 50'));
  
  const repeated = usedNumbers.includes(guess);

  if (repeated) {
    alert('You have already guessed this number');
  } else {
    if (guess < randomNumber) {
      alert('Too low!');
      usedNumbers.push(guess);
      attempts ++;
    } else if (guess > randomNumber) {
      alert('Too high!');
      usedNumbers.push(guess);
      attempts ++;
    } else if (guess === randomNumber) {
      text = `Well done! You took ${attempts} attempt(s)`;
    }
  }

} while (guess !== randomNumber);

message.innerHTML = text;