'use strict';

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
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
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
// };

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
// // join 2 arrays
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: '110 HFGC AVe',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: '110 HFGC AVe',

// //   starterIndex: 1,
// // });
// // // OBJECTS
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // // destructing using different variable names
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: text,
// // } = restaurant;
// // console.log(restaurantName, hours, text);

// // // settting default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // MUTATING VLAUE/ SWITCHING VALUES

// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// // // NESTED OBJECTS

// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);
// // // ////////////////
// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x, y, z] = arr; // destructuring array from the right side/ declaring 3 variables at the same time --> make sure to declare using const
// // // console.log(x, y, z);
// // // console.log(arr);

// // // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);

// // // __________switching the variables without destructuring
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // // // switching the variables WITH destructuring MUTATING
// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // // // RECEIVE 2 RETURN VALUES FROM A FUNCTION
// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // // NESTED DESTRUCTURING
// // // const nested = [2, 4, [5, 6]];
// // // /* const [i, , j] = nested;
// // // console.log(i, j); */

// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// // // // default values (USEFUL WHEN U GET DATA FROM AN API )
// // // const [p = 1, q = 1, r = 1] = [8];
// // // console.log(p, q, r);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log('-----NUMBER 1');
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
let gameScoredEntries = Object.entries(game.scored);

for (let [goal, player] of gameScoredEntries) {
  console.log(`GOAL: ${goal + 1} : ${player}`);
}

/* console.log(Object.entries(game.scored));
console.log(Object.keys(game.scored));
console.log(Object.values(game.scored)); */

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) (DIRECRTLY USE OBJECTT, DONT DESTTRUCTURE INTO VARIABLES. CALC AVERAGE OF THE ELEMENTS IN TTHE OBJET)

console.log('-----NUMBER 2');
// 2. with DESTRUCTURING
let gameOddsValue = Object.values(game.odds);
let average = 0;

for (let x in gameOddsValue) {
  average += gameOddsValue[x] / gameOddsValue.length;
}

console.log(`Odd average is ${average}`);

// 2. WITHOUT DESTRUCTURING:
let newAverage = 0;
for (let score of Object.values(game.odds)) {
  newAverage += score / Object.values(game.odds).length;
}
console.log(`Deconstructed Odd average is ${newAverage}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
console.log('-----NUMBER 3');
const gameOddsEntries = Object.entries(game.odds);
for (let [team, score] of gameOddsEntries) {
  console.log(
    `Odd of`,
    (team = 'x' ? `draw: ${score}` : `victory ${game[team]}: ${score}`)
  );
}

// ^ HINT: Note how the odds and the game objects have the same property names 😉

/* 


BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }  

*/

// REDUCE
/* console.log('----- BONUS');
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
 */
console.log('^----------------BONUS ?');

// var occurrence = function (array) {
//   let result = {};
//   array.forEach(function (v, i) {
//     if (!result[v]) {
//       // Initial object property creation.
//       result[v] = [i]; // Create an array for that property.
//     } else {
//       // Same occurrences found.
//       result[v].push(i); // Fill the array.
//       console.log(v, i);
//     }
//   });

//   console.log(result);
//   return result;
// };
// occurrence(game.scored);

/* var repeat = function (array) {
  let result = {};
  array.forEach(function (playerName, goal) {
    if (!result[playerName]) {
      result[playerName] = [goal];
      console.log('no1------', playerName, goal);
    } else {
      result[playerName].push(goal);
      console.log(playerName, goal);
    }
  });

  console.log(result);
  console.log();

  return result;
}; */

const scores = {};
for (let player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);
/* function goalsAmount(players, value) {
  let count = 0;
  players.forEach(x => x === count++);
  console.log(players, count);
}
goalsAmount(gameScoredValues); */

/* for (let x of gameScoredValues) {
  console.log(x);
} */

// function f(...array) {
//   var n = 0;
//   for (let i = 0; i < array.length; i++) {
//     {
//       if (array[i] === array[i]) {
//         n++;
//         console.log(n);
//       } else {
//         n === 1;
//       }
//     }
//     console.log(...array, n);
//   }
// }
// f(gameScoredValues);

// function c(array) {
//  let {scores[]}
//   for (let x in array) {
//     console.log(array[x]);
//     console.log(repeat);
//   }
// }
// c(gameScoredValues);

// console.log(gameScoredValues.split());
/* for (let name of gameScoredValues) {
  let n = 0;
  console.log(`${name} ${n++}`);
} */
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 

^ HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }  */
