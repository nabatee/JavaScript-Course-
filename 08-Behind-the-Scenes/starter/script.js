'use strict';
/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

console.log('///////');

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1994);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f();
 */

/* const calcAge = function (birthYear) {
  let age = 2030 - birthYear;
  console.log(age);
  console.log(this);
};

calcAge(1994);

const calcAgeArrow = birthYear => {
  let age = 2030 - birthYear;
  console.log(age);
  console.log(this);
};

calcAgeArrow(1994);

let mohammad = {
  year: 1994,
  year1: 2002,
  calcAge() {
    console.log(2040 - this.year1);
  },
};

mohammad.calcAge();

let lulu = {
  year1: 2020,
};
lulu.calcAge = mohammad.calcAge;

lulu.calcAge();

console.log(lulu.calcAge);
 */
// !!!!!!!this will create a local property in the global object!!!!!!!!
/* var firstName = 'matilda'; */

// jonas = { ... this is object literal. not a scope}
/* const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () { */
/*  console.log(this); */

// solution one
/*     console.log(2037 - this.year);
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1081 && self.year <= 1996);
    }; */

/// NOOOOOTTTT PRACTICCCEEEEEDDDD
// solution 2 ( USE AN ARROW FUNCNTION WITH THIS INHERITING THE PARENT SCOPE)
/*     const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1081 && this.year <= 1996);
    };

    isMillenial();
  },

  // this will access the window object bc jonas isn't a function, it's a lateral object
  greet: function () {
    console.log(`hey ${this.firstName} `);
  },
};

jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 5, 6);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 3);
 */

// PRIMITVE VS OBJECT
/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;

console.log('Friend:', friend);
console.log('Jonas:', me);
 */

// primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// referemce types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

// copyinig objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Fatima'],
};

const JessicaCopy = Object.assign({}, jessica2);
JessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('After marriage: ', JessicaCopy);

JessicaCopy.family.push('Mary');
JessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', JessicaCopy);
