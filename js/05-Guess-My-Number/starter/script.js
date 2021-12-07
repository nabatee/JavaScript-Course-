'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value) 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when theres no input
  if (!guess) {
    /*  document.querySelector('.message').textContent = '🤚🏽 no number! '; */
    displayMessage('🤚🏽 no number');

    // when player wins
  } else if (guess === secretNumber) {
    /*     document.querySelector('.message').textContent = '🥳 correct number!'; */
    displayMessage('🥳 correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '⬆️ too high' : '⬇️ too low';
      // score--; /*     score = score - 1; */
      displayMessage(guess > secretNumber ? '⬆️ too high' : '⬇️ too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost 🚫';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       guess > secretNumber ? '⬆️ too high' : '⬇️ too low';
  //     score--; /*     score = score - 1; */
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost 🚫';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ too low';
  //     score--; /*     score = score - 1; */
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost 🚫';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing..'; // cmatches
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = '20'; // matches
  document.querySelector('.number').textContent = '?'; // matches
  document.querySelector('body').style.backgroundColor = '#222'; // matches
  document.querySelector('.number').style.width = '15rem'; // matches
});
