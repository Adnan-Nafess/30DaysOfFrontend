# Day 10: Currying in JavaScript – Deep Dive with Multiple Examples 🎯

## What is Currying?

Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

## In simple words:
Instead of writing sum(a, b, c), we write sum(a)(b)(c).

## 🔥 Why use Currying?

✅ Makes functions more reusable and modular

✅ Helps in function composition

✅ Useful in creating configurable functions

✅ Improves readability and maintainability in functional programming

## 📚 Deep Dive
Normally, we call a function like this:

### Example
```js
function sum(a, b, c) {
return a + b + c;
}
console.log(sum(2, 3, 5)); // Output: 10
```

## Example
```js
function currySum(a) {
return function(b) {
return function(c) {
return a + b + c;
};
};
}
console.log(currySum(2)(3)(5)); // Output: 10
```

## 🔥 Real-World Example 1: Greeting Message
```js
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
```

## 🔥 Real-World Example 2: Dynamic Multiplier
```js
function multiply(a) {
return function(b) {
return a \* b;
};
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```


## 📌 Important Points to Remember
Currying does not execute the function immediately.

It returns a new function at each step until all arguments are received.

Currying improves code reusability.

Mostly used in Functional Programming style coding (e.g., in libraries like Lodash, Ramda).

## 🌟 Advanced Currying – Recursive Currying Deep Dive in JavaScript
## 🧠 What is Recursive Currying?
## Recursive currying ka matlab hai — hum ek unknown number of arguments accept kar sakein dynamic way me, bina pehle se pata hone ke kitne arguments aayenge.
## Aur jab sab arguments mil jayein, tab calculation karein.

## ⚡ Real-World Recursive Currying Example
```js
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
```

## 🔥 Dry Explanation:
curry(fn) ek function return karta hai (curried).

curried check karta hai — kya humne sufficient arguments diye hai?

Agar diye hain, to original fn call kar do.

Nahi diye hain, to ek naya function return karo jo aur arguments accept kare.

Jab tak saare arguments nahi milte, function chain hota rehta hai.

## 📚 Real Life Usage:
Functional programming me aise curry functions help karte hain dynamic APIs banane me.

Currying ka use hota hai lodash.curry, ramda, and recompose jaise libraries me.

## 📌 Important Points for Interview:
Recursive curry functions ko arguments length ke basis pe control kiya jaata hai.

Har baar ek naya function return hota hai jab tak saare arguments nahi milte.

Helps in building partial functions and dynamic composition.

## 🌟 Infinite Currying in JavaScript – When Functions Chain Forever! 🔥
## 🧠 What is Infinite Currying?
## Infinite currying ka matlab hai — ek function repeatedly arguments accept karta hai jab tak ek empty call () nahi hota.
## Aur jaise hi empty call hota hai, wo sab arguments ka final calculation return karta hai. 

## ⚡ Infinite Currying Example
```js
function sum(a) {
return function (b) {
if (b !== undefined) {
return sum(a + b); // keep adding
} else {
return a; // final result
}
};
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(10)(-2)(5)()); // 13
console.log(sum(100)()); // 100
```

## 🔥 Dry Explanation:
sum(1) returns a new function.

sum(1)(2) — again returns a new function adding 2.

Ye chain chalta rehta hai jab tak hum ek empty call () nahi kar dete.

Jab no argument diya jaata hai, tab final a ka value return hota hai.

## 🎯 Infinite Currying Flow
```js
sum(1) ➔ returns function
↳ sum(1+2) ➔ returns function
↳ sum(3+3) ➔ returns function
↳ sum(6+4) ➔ returns function
↳ sum(10+5) ➔ returns function
↳ sum(15)() ➔ returns final 15
🛠️ Interview Trick
Question:
"How will you build a function where you can keep calling like f(1)(2)(3)(4)() and get the sum?"

Answer:
👉 Infinite currying using recursion + closure.

📌 Important Points:
Currying is not only about fixed parameters — it can be open-ended.

Infinite currying ends only when no argument is passed (detect undefined).

📚 Learn More:
MDN: Currying

JavaScript.info: Currying and Partial Application
