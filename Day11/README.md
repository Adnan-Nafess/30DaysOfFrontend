# Day 11: JavaScript Hoisting – Deep Dive with Examples 🎣

Hoisting is one of the most **fundamental but misunderstood** concepts in JavaScript. In this post, we'll break it down with multiple examples and dry-run style explanations.

---

## 🚀 What is Hoisting?
Hoisting is JavaScript's **default behavior of moving declarations to the top** of the current scope (script or function).

But it's important to remember:
> **Only declarations are hoisted, not initializations.**

---

## 🧠 What Gets Hoisted?
| Keyword     | Hoisted? | Initialized with? |
|-------------|----------|-------------------|
| `var`       | ✅ Yes    | `undefined`       |
| `let` / `const` | ✅ Yes    | ❌ No (Temporal Dead Zone) |
| Function Declaration | ✅ Yes | Fully hoisted |
| Function Expression (var/let/const) | ❌ No | Not hoisted |

---

## 🛠️ Example 1: `var` Hoisting
```js
console.log(a); // undefined
var a = 10;
```
### 💡 Explanation:
JS interprets this as:
```js
var a;
console.log(a); // undefined
a = 10;
```

---

## 🛠️ Example 2: `let` and `const` Hoisting
```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
### 💡 Explanation:
Even though `b` is hoisted, it is in the **Temporal Dead Zone (TDZ)** — the time between the hoisting and actual initialization.

Same applies to `const`, and you must initialize `const` when declared:
```js
const x; // ❌ SyntaxError: Missing initializer
```

---

## 🛠️ Example 3: Function Declaration Hoisting
```js
greet(); // Hello World

function greet() {
  console.log("Hello World");
}
```
### 💡 Explanation:
Function declarations are hoisted with their **entire definition**, so you can call them before they are defined.

---

## 🛠️ Example 4: Function Expression (Not Hoisted)
```js
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};
```
### 💡 Why?
Only `var sayHi;` is hoisted as `undefined`. The function assignment isn’t hoisted.

---

## 🛠️ Example 5: `let` and `const` in Function Scope
```js
function test() {
  console.log(num); // ReferenceError
  let num = 5;
}

test();
```

### 💡 TDZ Again
Even inside functions, `let`/`const` are hoisted but not initialized — hence `ReferenceError`.

---

## 📚 Summary
- Hoisting moves **declarations**, not **initializations**, to the top.
- `var` → hoisted and initialized as `undefined`
- `let` & `const` → hoisted but remain uninitialized (TDZ)
- Function **declarations** are fully hoisted
- Function **expressions** are not hoisted (even if declared with `var`)

---



