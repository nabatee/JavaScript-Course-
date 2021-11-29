'use strict';
/* let hasDriversLicemse = false;
const passTest = true;

if (passTest) hasDriversLicemse = true;
if (hasDriversLicemse) console.log('i ca drive'); */

/* const interface = 'audio'; */
/* const private = 534; */

/* function logger() {
  console.log('my name is jonasn');
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function blender(greens, seeds) {
  const smoothie = `strengthening healthy smoothie with ${greens} greens and ${seeds} seeds.`;
  return smoothie;
}

const smoothieshit = blender(1, 2);
console.log(smoothieshit); */

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1994);

console.log(age1, age2);

function age1(birthYear) {
  return 2030 - birthYear;
}

console.log(age1(1994));
