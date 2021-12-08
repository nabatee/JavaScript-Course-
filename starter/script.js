'use strict';

// ?
const numberRandom = Math.trunc(Math.random() * 20) + 1;
const number = (document.querySelector('.number').textContent = numberRandom);
let message = document.querySelector('.message');

console.log(number);

// score
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// btn check
const button = document.getElementById('checkbtn');

button.addEventListener('click', function (event) {
  let guess = document.querySelector('.guess').value;
  //winning
  if (guess == number) {
    message.textContent = 'correct!! you win';
    highScore.textContent = score.textContent;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40vh';
    // number too high
  } else if (guess >= number) {
    message.textContent = 'too high, guess lower';
    score.textContent -= 1;

    // number too low
  } else if (guess <= number) {
    message.textContent = 'too low, guess higher';
    score.textContent -= 1;
  }
  console.log();
});
/////// clikcing on check
// btn check
/* let button = document.getElementById('checkbtn');
button.addEventListener('click', function (event) {
  button = numberRandom;
  console.log(button);
}); */
