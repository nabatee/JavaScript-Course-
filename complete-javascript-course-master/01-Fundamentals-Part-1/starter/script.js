/* // // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);

// // console.log('Jinas');
// // console.log(23);

// // let firstName = 'Jonas';
// // console.log(firstName);

// // let jonas_matidla = 'JM';
// // let $function = 27;

// // let person = 'jonas';
// // let PI = 3.1415;

// // let myFirstJob = 'Programmer';
// // let myCurrentJob = 'Teacher';

// // console.log(myFirstJob);

// // let country = 'US';
// // let continent = 'North America';
// // let population = '350Million';

// // console.log(country, continent, population);

// let JavascriptisFun = true;
// console.log(true);

// // console.log(typeof true);
// console.log(typeof JavascriptisFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// JavascriptisFun = 'YES!';
// console.log(typeof JavascriptisFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

/* let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = 'Al Khars';
console.log(lastName);
 */

/* MATHERMATIC OPERATORS  */
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Al Khars';
console.log(firstName + ' ' + lastName);

/* ASSIGNMENT OPERATORS 
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1;
x--; //x = x - 1;
console.log(x);

/* COMPARISON OPERATORS 
console.log(ageJonas > ageSarah); // >, <, >=, <=;
console.log(ageSarah >= 18); // is she the age of or older 18

const isFullAge = ageSarah >= 18; // boolean

console.log(now - 1991 > now - 2018);
 */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 */

// string and template literal

/* const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(` hey im mohammad`);

console.log('string with\n\
a new line \n\
brrrrr');

console.log(`lll
lll
s
s`);
 */
/* const age = 15;

if (age >= 18) {
  console.log(`sarah can start driving license🔪`);
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. wait anoother ${yearsLeft} years`);
}
 */
// control structure
/* if(){}
else {
}
 */
/* const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

// practice on control structure
/* 
const birthYr = 1994;

let centurarian;
if (birthYr <= 1889) {
  centurarian = 'yes, centurarian';
} else {
  centurarian = 'no, not centurarian';
}
console.log(centurarian); */
/* 
const markHeight1 = 1.69;
const markMass1 = 78;

const markHeight2 = 1.88;
const markMass2 = 95;

const johnHeight1 = 1.95;
const johnMass1 = 92;

const johnHeight2 = 1.76;
const johnMass2 = 85;

markBMI = markMass1 / (markHeight1 * markHeight1);
johnBMI = johnMass1 / (johnHeight1 * johnHeight1);

markBMI2 = markMass2 / (markHeight2 * markHeight2);
johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

markHigherBMI = markBMI > johnBMI;
markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

console.log(markBMI2, johnBMI2);
console.log(markHigherBMI2);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}
 */

/* const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);

console.log(Number('Jonas'));

console.log(String(23), 23); */

// type coercion
/* console.log(' I am' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);
 */

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(null));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log(' yay! height is defined');
} else {
  console.log('Height is UNDEFINED');
}
 */
/* 
const age = 18;
if (age === 18) console.log('yay, you just became an adult (strict)');
if (age == 18) console.log('yay, you just became an adult (loose)');

const favorite = Number(prompt('whats your favorite number?'));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // '23' == 23
  console.log('cool, 23 is an amazing number');
} else if (favorite === 7) {
  console.log('7 is also a cool umber');
} else if (favorite === 9) {
  console.log('9 is also a cool umber');
} else {
  console.log('numbeer is not 23 or 7 or 9');
}

if (favorite !== 23) console.log('Why not 23?');
 */

/* const hasDriversLiscense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLiscense && hasGoodVision);
console.log(hasDriversLiscense || hasGoodVision);
console.log(!hasDriversLiscense); */

/* const shouldDrive = hasDriversLiscense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive');
} else {
  console.log('someone else should drive... ');
} */

/* const isTired = true; // c
console.log(hasDriversLiscense && hasGoodVision && isTired);

if (hasDriversLiscense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('someone else should drive... ');
}
/*  */

// 1 + 2

/* const averageKoala = (88 + 91 + 110) / 3;
const averageDolphins = (96 + 108 + 89) / 3;
console.log(averageKoala, averageDolphins);

if (averageKoala > averageDolphins) {
  console.log('koala wins!');
} else if (averageDolphins > averageKoala) {
  console.log('dolphins win!!');
} else {
  console.log('both win!');
}
 */
//bonus 1

/* const averageKoala = (109 + 95 + 81) / 3;
const averageDolphins = (97 + 112 + 86) / 3;

console.log(averageKoala, averageDolphins);

const winKoala = averageKoala > averageDolphins && averageKoala >= 100;
const winDolphins = averageDolphins > averageDolphins && averageDolphins >= 100;
if (winKoala > winDolphins) {
  console.log('koala wins!', winKoala);
} else if (winDolphins === winKoala) {
  console.log('both win!');
} else {
  console.log('dolphins win!', winDolphins);
} */

//bonus 2

/* const averageKoala = (97 + 112 + 101) / 3;
const averageDolphins = (97 + 112 + 101) / 3;

console.log(averageKoala, averageDolphins);

if (averageDolphins > averageKoala && averageDolphins >= 100) {
  console.log('d wins');
} else if (averageKoala > averageDolphins && averageKoala >= 100) {
  console.log('k wins');
} else if (
  averageKoala === averageDolphins &&
  averageKoala >= 100 &&
  averageDolphins >= 100
) {
  console.log('both win');
} else {
  console.log('no one wins');
}
 */

// switch statement
/* const day = 'Wednesday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('i plan my course structure');
    console.log('go to coding meetup');
    break;
  case 'Tuesday':
    console.log('pre theory vids');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('write code example');
  case 'friday':
    console.log('record vids');
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy weekend');
    break;
  default:
    console.log('not a day');
}

if (day === 'Wednesday' || day === 'Thursday') {
  console.log('its weds or');
} */

/* 3 + 4;
1991;
true && false;

if (23 > 10) {
  const str = '23 is bigger';
}

const se = 'jinas';
console.log(`im' ${5}`);
 */

/* const age = 7; */
/* 
age >= 18
  ? console.log('i like to drink wine🤠')
  : console.log('i like to drink water😔');
 */
/* const drink = age >= 8 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(` i like to drink ${age >= 18 ? 'wine' : 'water'}`);
 */

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
