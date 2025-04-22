# 📘 Day 6: Closures in JavaScript – The Power of Lexical Scoping 🔐

Closures are one of the most powerful and often misunderstood features of JavaScript. They allow inner functions to access the outer function’s variables even after the outer function has finished execution.

---

## ✅ What is a Closure?

> A **closure** is formed when an inner function retains access to the variables of its **outer (enclosing) function** even after the outer function has returned.

In simple words:  
> "Function ke andar function ho, aur andar wala function bahar wale variables ko access kar raha ho — tabhi Closure banta hai."

---

## ✅ Why Use Closures?

- **Data Privacy** (private variables)
- **Callback & Event Handlers**
- **Function Factories**
- **Memoization & Caching**

---

## ✅ Basic Example

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count is", count);
  }

  return inner;
}

const counter = outer();
counter(); // Count is 1
counter(); // Count is 2
