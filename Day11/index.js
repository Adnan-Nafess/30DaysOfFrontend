// Day 11: JavaScript Hoisting – Deep Dive with Examples

// Hoisting is one of the most **fundamental but misunderstood** concepts in JavaScript. In this post, we'll break it down with multiple examples and dry-run style explanations.

// Example 1: var Hoisting

console.log(a); // undefined
var a = 10;

// Explanation:
// JS interprets this as:

var a;
console.log(a); // undefined
a = 10;

// Example 2: let and const Hoisting
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// Example 3: Function Declaration Hoisting

greet(); // Hello World

function greet() {
  console.log("Hello World");
}

// Example 4: Function Expression (Not Hoisted)

sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};

// Example 5: let and const in Function Scope

function test() {
    console.log(num); // ReferenceError
    let num = 5;
}
  
test();