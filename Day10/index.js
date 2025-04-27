// # Day 10: Currying in JavaScript – Deep Dive with Multiple Examples

// Example 1

function sum(a, b, c) {
    return a + b + c;
  }
  console.log(sum(2, 3, 5)); // Output: 10

// But after Curring

function currySum(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  console.log(currySum(2)(3)(5)); // Output: 10

// Real-World Example 1: Greeting Message

function greet(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const sayHello = greet("Hello");
  sayHello("Adnan"); // Hello, Adnan!
  sayHello("Amaan"); // Hello, Amaan!
  
  const sayGoodMorning = greet("Good Morning");
  sayGoodMorning("Areeb"); // Good Morning, Areeb!

// 🔥 Real-World Example 2: Dynamic Multiplier  

function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  const double = multiply(2);
  const triple = multiply(3);
  
  console.log(double(5)); // 10
  console.log(triple(4)); // 12

// 🌟 Advanced Currying – Recursive Currying Deep Dive in JavaScript

// ⚡ Real-World Recursive Currying Example

function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // Example function
  function sum(a, b, c) {
    return a + b + c;
  }
  
  // Curry the sum function
  const curriedSum = curry(sum);
  
  console.log(curriedSum(2)(3)(5)); // 10
  console.log(curriedSum(1, 2)(3)); // 6
  console.log(curriedSum(4)(5, 6)); // 15
  
  
// 🌟 Infinite Currying in JavaScript – When Functions Chain Forever! 🔥

// ⚡ Infinite Currying Example

function sum(a) {
    return function (b) {
      if (b !== undefined) {
        return sum(a + b); // keep adding
      } else {
        return a; // final result
      }
    };
  }
  
  console.log(sum(1)(2)(3)(4)(5)());   // 15
  console.log(sum(10)(-2)(5)());      // 13
  console.log(sum(100)());           // 100

// Infinite Currying Flow

// sum(1) ➔ returns function
//   ↳ sum(1+2) ➔ returns function
//     ↳ sum(3+3) ➔ returns function
//       ↳ sum(6+4) ➔ returns function
//         ↳ sum(10+5) ➔ returns function
//           ↳ sum(15)() ➔ returns final 15
