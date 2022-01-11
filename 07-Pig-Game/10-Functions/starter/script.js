'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtman',
//   passport: 23343434,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23343434) {
//     alert('Checked In!');
//   } else {
//     alert('Wrong Passport!');
//   }
// };
// // checkIn(flight, jonas); // flight is a primitice type (string)
// // console.log(flight);
// // console.log(jonas);

// // is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// Passing by value and passing by reference

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER-ORDER FUNCTION: Takes a function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('👋🏽');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const scream = function (str) {
  console.log(str.toUpperCase());
};

const bigBoy = function (str, fn) {
  fn(str);
  console.log(`this is in all caps bc of ${fn.name} function`);
};

bigBoy('can you make me scream', scream);
 */

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}; */
/* 
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('hello')('jonas');
 */

/* const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(239, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah will');
book.call(eurowings, 23, 'Sarah Williams'); // we used the call method and set eurowings as the ".this" keyword
console.log(eurowings);
book.call(lufthansa, 239, 'Merry Cooper');
console.log(lufthansa);

const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Merry Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings); // this is a new  function and it sets the .this keyword to eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Cooper');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('hello')('jon');

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23)); */
//SAME AS:
// const addVAT = (rate, value) => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// DOJA EXAMPLE
/* const hotPink = {
  albumTitle: 'Hot Pink',
  year: 2019,
  song(songName, rating) {
    console.log(
      `the song ${songName} from ${this.albumTitle} released in ${this.year}, and is rated ${rating}`
    );
  },
};

hotPink.song('Say So', '10/10');

const planetHer = {
  albumTitle: 'Planet Her',
  year: 2021,
};

hotPink.song.call(planetHer, 'Kiss Me More', '10/10'); */

//3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     //
//     let options = new String(this.options);

//     let optionsList = options.replaceAll(',', '\n');
//     let guess = prompt(
//       `${this.question} ${'\n'}${optionsList} ${'\n'}(Write option number)`
//     );
//     let answer = prompt(`${this.question}\n${this.options.join('\n')}`);

//     console.log(guess);
//     if (guess >= 0 && guess <= 3) {
//       this.answers[guess]++;
//       // console.log(this.answers);
//       /*       console.log(
//         `You guessed ${guess}, here's what others guessed ${this.answers} )` */
//     }
//     this.displayResults([5, 2, 3]);
//   },

//   displayResults(type) {
//     if (Array.isArray(type) === true) {
//       console.log(this.answers);
//     } else if (typeof type === 'string') {
//       console.log(`STRING -- Poll results are ${this.answers}`);
//     }
//   },
// };
// let arrayD = [1, 2, 3, 4];
// /* poll.displayResults('dd'); */
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
/* document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); */
/* console.log('before------', poll.answers);
poll.registerNewAnswer(1);
console.log('after--------', poll.answers); */

///////////////////////////////////////
// Coding Challenge #1

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number`
      )
    );
    typeof input === 'number' &&
      input < this.answers.length &&
      this.answers[input]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${type}`);
    }
  },
};
// poll.displayResults([3.3]);
// poll.displayResults('this is STRING');
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: ['1, 5, 3, 9, 6, 1'] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); */
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/* const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

(() => console.log('arrow wont run again'))();

{
  var notPrivate = 46;
}

console.log(isPribate);
 */
/* 3. Createamethod'displayResults'whichdisplaysthepollresults.The
method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation? */
/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
 */

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);
 */

/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

// EXAMPLE 2

const boardPassgenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, (wait = 1000));

  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassgenger(180, 3);
 */
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  /*   header.addEventListener('click', function () {
    this.style.color = 'blue';
  }); */
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
