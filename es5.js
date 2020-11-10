// 1. ES5 String Concatenation
var name = 'Michelle';
var favoriteColor = 'purple';
var city = 'San Francisco';

// console.log(
//   name +
//     ' lives in ' +
//     city +
//     ' and their favorite color is ' +
//     favoriteColor +
//   '.'
console.log(`${name} lives in ${city} and their favorite color is ${favoriteColor}.`);

// 1. Refactor to ES2015 Template Literals:



// 2. ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// 2. Refactor to ES2015 Global Constants



// 3. ES5 Assigning Variables to Object Properties
var foods = {
  fruits: {
    apple: "red",
    banana: "yellow",
  }
};

var apple = foods.fruits.apple;
var banana = foods.fruits.banana;

// 3. Refactor to ES2015 Object Destructuring



// 4. ES5 Array Swap
var nums = [1, 2];
var temp = nums[0];
nums[0] = nums[1];
nums[1] = temp;

// 4. Refactor to ES2015 Array Swap



// 5. ES5 Map Callback
function double(nums) {
  return nums.map(function (num) {
    return num * 2;
  });
}

// 5. Refactor to ES2015 Arrow Functions Shorthand



// 6. ES5 Default Arguments
function add(a, b) {
  if (a === undefined) {
    a = 10;
  }
  if (b === undefined) {
    b = 10;
  }
  return a + b;
}

// 6. Refactor to ES2015 Default Arguments



// 7. ES5 Function that takes a variable number of arguments
function onlyEvens() {
  // in ES5, this is how we turned something
  // array-like into an actual array
  var nums = Array.prototype.slice.call(arguments); 
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// 7. Refactor to ES2015


