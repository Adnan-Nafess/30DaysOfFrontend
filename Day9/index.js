// ## 🧠 Components of the Event Loop

// ### 1. 🧮 Call Stack
// The execution stack that keeps track of all function calls. It follows the **LIFO (Last-In, First-Out)** principle — the last function pushed to the stack is the first to finish.

// #### 🔧 Example:

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

// **Output:**

// First function
// Second function
// Third function


// ### 2. 🌐 Web APIs
// Provided by the browser (or Node.js) to handle asynchronous operations like `setTimeout`, `fetch`, `DOM events`, etc.

// #### 🔧 Example:

console.log("Start");

setTimeout(() => {
  console.log("Timer done!");
}, 2000);

console.log("End");


// **Output:**

// Start
// End
// Timer done!


// ### 3. 📥 Callback Queue (Task Queue)
// Once a Web API completes (like a timer or event), the callback is placed in the Callback Queue. The Event Loop then pushes it to the Call Stack **only when it's empty**.

// #### 🔧 Example:

console.log("Script start");

setTimeout(() => {
  console.log("Callback Queue - setTimeout");
}, 0);

console.log("Script end");


// **Output:**

// Script start
// Script end
// Callback Queue - setTimeout


// ### 4. 🌀 Microtask Queue
// Holds microtasks like `Promise.then`, `queueMicrotask`, and `MutationObserver`. These run **before** the callback queue tasks.

// #### 🔧 Example:

console.log("Script start");

Promise.resolve().then(() => {
  console.log("Microtask Queue - Promise resolved");
});

console.log("Script end");


// **Output:**

// Script start
// Script end
// Microtask Queue - Promise resolved


// ### 5. 🔁 Event Loop
// This loop checks whether the call stack is empty. If it is, it first processes all microtasks, then tasks from the callback queue.

// #### 🔧 Combined Example:

console.log("Start");

setTimeout(() => {
  console.log("Callback Queue: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask Queue: Promise");
});

console.log("End");



// **Output:**

// Start
// End
// Microtask Queue: Promise
// Callback Queue: setTimeout


// ### 6. 🧪 Blocking the Call Stack
// Even with async code, if synchronous code blocks the stack, nothing else executes.

// #### 🔧 Example:

setTimeout(() => {
  console.log("Inside Timeout");
}, 1000);

// Heavy synchronous task
for (let i = 0; i < 1e9; i++) {
  // Blocking loop
}

console.log("After Blocking");


// **Output:**

// After Blocking
// Inside Timeout
