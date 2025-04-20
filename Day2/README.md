# 🚀 Day 2: Dive into `bind`, `call`, and `apply` in JavaScript (with Polyfills)

---

In JavaScript, `this` is a powerful but often misunderstood concept. It dynamically changes based on how a function is called. However, there are times when `this` loses its reference.

## When `this` Loses Its Reference

```js
const user = {
  name: "Adnan Khan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const greetFn = user.greet; // Extract the method
greetFn(); // `this` is lost

Hello, undefined

Here, greetFn no longer refers to the user object. Instead, this becomes undefined in strict mode (or window in non-strict mode).

Solution: bind, call, and apply
These methods allow us to explicitly set the value of this and solve the problem.

1. bind: Create a New Function with Fixed this
The bind method creates a new function where this is permanently set to the specified object.


function.bind(thisArg[, ...args])

Example 1: Basic Binding

const user = {
  name: "Adnan Khan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const boundGreet = user.greet.bind(user);
boundGreet(); // Hello, Adnan Khan

Example 2: Partial Application

const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5)); // 10

Example 3: Using bind with Event Listeners

const button = document.createElement("button");
const user = {
  name: "Adnan Khan",
  greet() {
    alert(`Hello, ${this.name}`);
  },
};

button.addEventListener("click", user.greet.bind(user));
document.body.appendChild(button);

2. call: Invoke a Function Immediately with Specific this
The call method calls a function immediately with the specified this value and individual arguments.

function.call(thisArg, arg1, arg2, ...)

Example 1: Borrowing Methods

const person = { name: "Adnan Khan" };
const greet = function(greeting) {
  console.log(`${greeting}, ${this.name}`);
};

greet.call(person, "Hi"); // Hi, Adnan Khan

Example 2: Calling with Arguments

const sum = function(a, b) {
  return a + b;
};

console.log(sum.call(null, 1, 2)); // 3
Example 3: Calling call on a Method of Another Object

const person1 = { name: "Adnan Khan" };
const person2 = { name: "Ali" };

const greet = function(greeting) {
  console.log(`${greeting}, ${this.name}`);
};

greet.call(person2, "Hello"); // Hello, Ali
greet.call(person1, "Hi"); // Hi, Adnan Khan

3. apply: Similar to call but Takes Arguments as an Array
The apply method is like call, but arguments are passed as an array.


function.apply(thisArg, [argsArray])

Example 1: Using apply for Summing Arguments

function sum(a, b) { return a + b; }
console.log(sum.apply(null, [1, 2])); // 3

Example 2: Using apply with Built-In Methods on Array-Like Data

const numbers = [1, 2, 3];
console.log(Math.max.apply(null, numbers)); // 3

Example 3: Finding Maximum Number with apply

const nums = [1, 2, 3, 4, 5];
const maxNum = Math.max.apply(null, nums);
console.log(maxNum); // 5

Polyfill for call

Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  obj = obj || globalThis;
  const sym = Symbol(); // Create a unique property on the `obj` to avoid overwriting existing properties
  obj[sym] = this; // Assign the function (this) to the unique property
  const res = obj[sym](...args);
  delete obj[sym];
  return res;
};

function sum(a, b) {
  return a + b;
}

const result = sum.myCall(null, 1, 2);
console.log(result); // Output: 3

Polyfill for apply

Function.prototype.myApply = function (obj, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  obj = obj || globalThis;

  const sym = Symbol();
  obj[sym] = this;

  const result = obj[sym](...(argsArray || []));
  delete obj[sym];

  return result;
};

function sum(a, b) {
  return a + b;
}

const result = sum.myApply(null, [1, 2]);
console.log(result); // Output: 3

Polyfill for bind

Function.prototype.myBind = function (obj, ...args1) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  const fn = this; // Save the reference to the original function

  // Return a new function
  return function (...args2) {
    obj = obj || globalThis;
    return fn.apply(obj, [...args1, ...args2]);
  };
};

const person = {
  name: "Adnan Khan",
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!")); // Output: Hello, Adnan Khan!

References

JavaScript Info
Medium Article on Call, Apply, and Bind

