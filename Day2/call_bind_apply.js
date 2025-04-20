// Example 1: Basic Binding

const user = {
  name: "Adnan Khan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const boundGreet = user.greet.bind(user);
boundGreet(); // Hello, Adnan Khan

// Example 2: Using apply with Built-In Methods on Array-Like Data

const numbers = [1, 2, 3];
console.log(Math.max.apply(null, numbers)); // 3


// Example 3: Finding Maximum Number with apply

const nums = [1, 2, 3, 4, 5];
const maxNum = Math.max.apply(null, nums);
console.log(maxNum); // 5

// polyfill for call

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

// Polyfill for apply

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

// Polyfill for bind

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
