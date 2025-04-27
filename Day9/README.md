# Day 9: Deep Dive into JavaScript's Event Loop System 🔄

JavaScript is **single-threaded**, yet it handles asynchronous operations like magic. This magic is powered by the **Event Loop** and its surrounding components like the Call Stack, Web APIs, Microtask Queue, and Callback Queue.

---

## 🧠 Components of the Event Loop

### 1. 🧮 Call Stack
The execution stack that keeps track of all function calls. It follows the **LIFO (Last-In, First-Out)** principle — the last function pushed to the stack is the first to finish.

#### 🔧 Example:
```js
function first() {
  console.log("First function");
}

function second() {
  console.log("Second function");
}

function third() {
  console.log("Third function");
}

first();
second();
third();
```
**Explanation:**
Each function is pushed onto the call stack and executed in order. Since there's no async code, execution is top to bottom.

**Output:**
```
First function
Second function
Third function
```

---

### 2. 🌐 Web APIs
Provided by the browser (or Node.js) to handle asynchronous operations like `setTimeout`, `fetch`, `DOM events`, etc.

#### 🔧 Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Timer done!");
}, 2000);

console.log("End");
```
**Explanation:**
`setTimeout` is handled by Web APIs. It waits 2 seconds in the background while the script continues executing.

**Output:**
```
Start
End
Timer done!
```

---

### 3. 📥 Callback Queue (Task Queue)
Once a Web API completes (like a timer or event), the callback is placed in the Callback Queue. The Event Loop then pushes it to the Call Stack **only when it's empty**.

#### 🔧 Example:
```js
console.log("Script start");

setTimeout(() => {
  console.log("Callback Queue - setTimeout");
}, 0);

console.log("Script end");
```
**Explanation:**
Even though the timer is set to 0ms, it still waits until the current call stack is empty.

**Output:**
```
Script start
Script end
Callback Queue - setTimeout
```

---

### 4. 🌀 Microtask Queue
Holds microtasks like `Promise.then`, `queueMicrotask`, and `MutationObserver`. These run **before** the callback queue tasks.

#### 🔧 Example:
```js
console.log("Script start");

Promise.resolve().then(() => {
  console.log("Microtask Queue - Promise resolved");
});

console.log("Script end");
```
**Explanation:**
Promise's `.then` callback goes to the microtask queue and runs before any callbacks from the task queue.

**Output:**
```
Script start
Script end
Microtask Queue - Promise resolved
```

---

### 5. 🔁 Event Loop
This loop checks whether the call stack is empty. If it is, it first processes all microtasks, then tasks from the callback queue.

#### 🔧 Combined Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Callback Queue: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask Queue: Promise");
});

console.log("End");
```
**Explanation:**
1. "Start" is logged.
2. `setTimeout` is scheduled.
3. Promise goes to microtask queue.
4. "End" is logged.
5. Microtask runs — "Promise".
6. Callback runs — "setTimeout".

**Output:**
```
Start
End
Microtask Queue: Promise
Callback Queue: setTimeout
```

---

### 6. 🧪 Blocking the Call Stack
Even with async code, if synchronous code blocks the stack, nothing else executes.

#### 🔧 Example:
```js
setTimeout(() => {
  console.log("Inside Timeout");
}, 1000);

// Heavy synchronous task
for (let i = 0; i < 1e9; i++) {
  // Blocking loop
}

console.log("After Blocking");
```
**Explanation:**
The blocking `for` loop keeps the call stack busy, so even though the timer is ready, it can’t run.

**Output:**
```
After Blocking
Inside Timeout
```

---

## 📌 Summary Table

| Component         | Role                                                         |
|------------------|--------------------------------------------------------------|
| Call Stack        | Executes current functions (LIFO)                            |
| Web APIs          | Browser-provided async services                              |
| Callback Queue    | Stores tasks from Web APIs like setTimeout                   |
| Microtask Queue   | Stores microtasks (Promise callbacks)                        |
| Event Loop        | Orchestrates the order of task execution                     |

---


---

## 📚 Learn More:
- [MDN Docs on Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [JavaScript.info Guide](https://javascript.info/event-loop)

---


