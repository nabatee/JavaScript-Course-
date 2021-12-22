'use strict';

// // selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const curent1El = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// // starting condition

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   curent1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// init();
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// //rolling dice functionalitty
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. generate a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);

//     // 2. display dice

//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     // 3. check foor rolled 1: if true

//     if (dice !== 1) {
//       // add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       //switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   // 1 - add current score to active player's score
//   if (playing) {
//     scores[activePlayer] += currentScore; //   < means -> scores[1] = scores[1] + currentScore
//     console.log(scores[activePlayer]);
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     //2 - check if player's score is >= 100
//     if (scores[activePlayer] >= 20) {
//       // finish he game
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('.player--active');
//     } else {
//       // if ot switch to the next play
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

let score = document.querySelector('.score');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// BUTTONS
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//idk

//starting

score = [0, 0];
score[0] = 0;

let activeScore = 0;
let currentScore = 0;
let activePlayer = 0;
let currentPlayer = 0;
let playing = true;

const gameInit = function () {
  document.querySelector('img').classList.add('hidden');
  score = [0, 0];
  score = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  currentScore = 0;
  activeScore = 0;
  currentPlayer = 0;
  score0El.textContent = score;
  score1El.textContent = score;
  current1El.textContent = activeScore;
  current0El.textContent = `${currentScore}`;
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
};

function disableBttns() {
  if (playing === false) {
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else if (playing === true) {
    btnRoll.disabled = false;
    btnHold.disabled = false;
  }
}

const winningG = function () {
  if (activePlayer) {
    score = activeScore;
  } else if (currentPlayer) {
    score = currentScore;
  } // need to add current :/
  if (score < 20) {
    if (activePlayer) {
      score0El.textContent += current0El.textContent;
      // current0El.textContent = score;
    } else if (currentPlayer) {
      score1El.textContent += current1El.textContent;
      // current1El.textContent = score;
    }
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    score0El.textContent = current0El.textContent;
    score1El.textContent = current1El.textContent;
  } else if (score >= 20) {
    btnRoll.disabled = true;
    btnHold.disabled = true;
    if (activePlayer) {
      player0El.classList.add('player--winner');
      score0El.textContent = current0El.textContent;
    } else if (currentPlayer) {
      player1El.classList.add('player--winner');
      score1El.textContent = current1El.textContent;
    }
  }
};
gameInit();

btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  /*  current0El.textContent = currentScore; */
  document.querySelector('img').classList.remove('hidden');
  document.querySelector('img').src = `dice-${dice}.png`;
  if (activePlayer) {
    score = activeScore;
  } else if (currentPlayer) {
    score = currentScore;
  } //
  activePlayer = player0El.classList.contains('player--active');
  currentPlayer = player1El.classList.contains('player--active');
  if (dice > 1) {
    /*     score = currentScore; */

    if (activePlayer) {
      // current0El.textContent = currentScore;
      activeScore += dice;
      current0El.textContent = activeScore;
    } else if (currentPlayer) {
      currentScore += dice;
      current1El.textContent = currentScore;
    }
  } else if (dice === 1 && activePlayer) {
    activeScore = 0;
    score0El.textContent = activeScore;
    current0El.textContent = activeScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else if (dice === 1 && currentPlayer) {
    currentScore = 0;
    score1El.textContent = currentScore;
    current1El.textContent = currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  if (score >= 20) {
    winningG();
  }

  /*     if (activePlayer) {
      score0El.textContent = activeScore;
    } else if (currentPlayer) {
  
    } */

  console.log(
    'DICE ---',
    dice,
    'activeScore---',
    activeScore,
    'currentScore----',
    currentScore
  );
});

btnHold.addEventListener('click', function () {
  if (activePlayer) {
    score = activeScore;
  } else if (currentPlayer) {
    score = currentScore;
  } // need to add current :/

  activePlayer = player0El.classList.contains('player--active');
  currentPlayer = player1El.classList.contains('player--active');
  if (score < 20) {
    if (activePlayer) {
      score0El.textContent += current0El.textContent;
      // current0El.textContent = score;
    } else if (currentPlayer) {
      score1El.textContent += current1El.textContent;
      // current1El.textContent = score;
    }
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    score0El.textContent = current0El.textContent;
    score1El.textContent = current1El.textContent;
  } else if (score >= 20) {
    btnRoll.disabled = true;
    btnHold.disabled = true;
    if (activePlayer) {
      player0El.classList.add('player--winner');
      score0El.textContent = current0El.textContent;
    } else if (currentPlayer) {
      player1El.classList.add('player--winner');
      score1El.textContent = current1El.textContent;
    }
  }
});
btnNew.addEventListener('click', gameInit);
