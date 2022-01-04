'use strict';

///////////////////////////////////////
// Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let lines = text.toLowerCase().split('\n');
  for (let [i, line] of lines.entries()) {
    const [first, second] = line.trim().split('_');
    let outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
  // console.log(lines);
});

/*   const baggage = words.toString().toLowerCase();
 */

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA ------------(pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT  ------------ (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

  const text = document.querySelector('textarea').value;


// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const hours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES2 Enhanced object literal;
//   hours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // we set values for line 52 function. if we dont have values for certain variables
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here's your delish pasta w/ ${ing1} , ${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmentdan'.split(' '));

// const [firstName, lastName] = 'Jonas Schmentdan'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // slice everything except for letter at [1]
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('Jessina ann smith davis');
// capitalizeName('jonas schmentdan');

// //padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '+');
// };

// console.log(maskCreditCard(12345678));

// maskCreditCard(3453452423423);
// maskCreditCard('3453452423423');

// // repeat

// const message2 = 'Bad weather.. all departure delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
// const airLine = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('8737'[0]);
// console.log(airLine.length);
// console.log('8737'.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));

// console.log(airLine.slice(4, 7));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -2));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('you got middle seat :(');
//   else console.log('you got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(new String('jonas'));
// console.log(typeof new String('jonas').slice());

// console.log(airLine.toLocaleLowerCase());
// console.log('jonas'.toLocaleUpperCase());

// // fix Capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@Jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// /* const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); */

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);

// // replacing
// const priceGB = '288,97%';
// const priceUS = priceGB.replace('%', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passense come tto boarding door 23. Boarding door 23';

// console.log(announcement.replace('door', 'gate'));
// /* console.log(announcement.replaceAll('door', 'gate')); */

// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans

// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('Boring'));
// console.log(plane1.startsWith('A'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('youre NOT allowed');
//   } else {
//     console.log('youre  allowed');
//   }
// };
// checkBaggage('I have a laptop, some food an a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('got some snacks and a gun for proteciton lol wtf');

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'correct :D'],
//   [false, 'try again :/'],
// ]);
// console.log(question);
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// //QIIZZ APP

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   // same thing as Object.entries(), but Maps are iterable unline objects so we dont need to Ob.entt
//   if (typeof key === 'number') console.log(`answer & ${key}: ${value}`);
// }

// /* const answer = Number(prompt('your answer'));
// console.log(answer);
// let correctAnswer = function () {
//   answer === 3
//     ? console.log(question.get(true))
//     : console.log(question.get(false));
// };
// correctAnswer(question.get(false));
//  */
// // CONVERT MAP TO ARRAY
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'italy');
// console.log(rest.set(2, 'france'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :) ')
//   .set(false, 'we are close :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// rest.set([1, 2], 'Testt'); // <
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// console.log(rest.size);
// console.log(rest.get([1, 2])); // this and line 79 ARE NOT THE SAME OBJECT in the heap.
// printing string saying how many days restaurant is open
// const ordersSet = new Set([
//   'Pasta',
//   'pizza',
//   'pizza',
//   'risottot',
//   'Pasta',
//   'pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('risottot');
// console.log(ordersSet);

// for (let order of ordersSet) console.log(order);

// // EXAMPLE - use sets to remove duplicates from arrays
// const staff = ['waiter', 'cheif', 'waiter', 'manager', 'cheif', 'waiter'];
// const stuffUnique = [...new Set(staff)];
// console.log(stuffUnique);

// // if we wanted to know how many positions there are:
// console.log(
//   new Set(['waiter', 'cheif', 'waiter', 'manager', 'cheif', 'waiter']).size)
// // key values
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property values
// const values = Object.values(hours);
// console.log(values);

// // Entries object
// const entries = Object.entries(hours);
// /* console.log(entries); */

// for (const [day, { open, close }] of entries) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`)};

// if (restaurant.hours && restaurant.hours.mon) {
//   console.log(restaurant.hours.mon.open);
// }
// // recreate with optional chaining
// /* console.log(restaurant.hours.mon.open); */
// console.log(restaurant.hours?.mon?.open);
// /* if (restaurant.hours.fri.open) {
//   console.log(restaurant.hours.fri.open);} */

// // example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'method doest exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method doest exists');

// const users = [{ name: 'jonas', email: 'hello@gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// LINE 71 ------------ cant do .day bc its not object variable
// const rest1 = {
//   name: 'capri',
//   /*   numGuests: 20, */
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'la pizzzaaaa',
//   owner: 'giovanni',
// };

// // OR ASSIGNMENT OPERATOR - assigns a value to a variable if a variable is falsy
// /* rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; */
// /*
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10; */

// // nullish assignment operators --> null or undefined
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND ASSIGNMENT OPERATOR -> assign a value to a variable if it is currently trtuthy
// /* rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>'; */
// rest2.owner &&= '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// //DESTRUCTURING
// // SPREAD bc on right side of assingment operator  =
// const arr = [1, 2, ...[3, 4]];
// // REST, bc on left side of equal sign
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(restaurant.openingHours);
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   /// PACK THE VALUES FOR ...x
//   let total = 0;
//   for (let i of numbers) {
//     total += i;
//   }
//   console.log(total);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); /// UNPACK THE VALUE

// restaurant.orderPizza('mushroom', 'onion', 'olices', 'spinach');
// restaurant.orderPizza('mushroom');

// console.log('-----------OR--------------');
// //use ANY types, return ANY data type, short-ciructing
// console.log(3 || 'jonas');
// console.log('' || 'jonas'); // doesnt have to be a boolean, will return the truthy value
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 23);

// /* restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); */

// console.log('-----------AND--------------');

// console.log(0 && 'Jonas');
// console.log(6 && 'Jonas'); // <---- evaluation continues and last elements is returned
// console.log('Hello' && 23 && 0 && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('spinch', 'mushroom');

// const singleTrck = function (single, ...nonSingles) {
//   console.log(single);
//   console.log(nonSingles);
// };

// singleTrck('say so', 'addiction', 'wont bite');

// let single = 'say so';
// let addiction = false;
// console.log('the single is....', single || addiction || betterThanMe);
// console.log(
//   'The album non-single tracks are',
//   single && addiction && betterThanMe
// );

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nullish:  null and undefined (not 0 or "")
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // to print the individual elemnts instead of the ARRAY itself
// console.log(...newArr);

// // writing a new Array by adding a value
// const newMenu = [...restaurant.mainMenu, 'Gnochi'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // JOIN ARRAYS
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// //

// /* const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients); */

// // Objects

// const newRestaurant = { foundedIN: 1998, ...restaurant, founder: 'Gioseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant, name: 'Italiaaannnnoo' };
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
// join 2 arrays
// restaurant.orderDelivery({
//   time: '22:30',
//   address: '110 HFGC AVe',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '110 HFGC AVe',

//   starterIndex: 1,
// });
// // OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // destructing using different variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: text,
// } = restaurant;
// console.log(restaurantName, hours, text);

// // settting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VLAUE/ SWITCHING VALUES

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // NESTED OBJECTS

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// // ////////////////
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr; // destructuring array from the right side/ declaring 3 variables at the same time --> make sure to declare using const
// // console.log(x, y, z);
// // console.log(arr);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // __________switching the variables without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // // switching the variables WITH destructuring MUTATING
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // // NESTED DESTRUCTURING
// // const nested = [2, 4, [5, 6]];
// // /* const [i, , j] = nested;
// // console.log(i, j); */

// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // default values (USEFUL WHEN U GET DATA FROM AN API )
// // const [p = 1, q = 1, r = 1] = [8];
// // console.log(p, q, r);
