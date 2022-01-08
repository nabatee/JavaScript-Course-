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

const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flightNum: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(239, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah will');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
