// ## 🔧 Example: Event Loop in Action


console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');


// Why this order?

// console.log('Start') and console.log('End') are synchronous.

// Promise.then() goes to microtask queue → executed after current stack.

// setTimeout() goes to task queue → executed after microtasks.