# Day 6: JavaScript Event Loop – Behind the Scenes of Async Magic 🎯

## 🧠 What is the Event Loop?
JavaScript is single-threaded, but it handles asynchronous operations (like setTimeout, fetch, etc.) efficiently using the **event loop**, **task queue**, and **microtask queue**.

---

## 📦 Key Components:
1. **Call Stack** – Where code runs line-by-line (synchronously).
2. **Web APIs** – Browser-provided features (like DOM, setTimeout, etc.).
3. **Callback Queue / Task Queue** – Handles tasks from APIs like setTimeout, setInterval.
4. **Microtask Queue** – Handles promises, `queueMicrotask`, `MutationObserver`.

---

## 🔄 How it works:

- JS executes synchronous code first.
- Async tasks (like `setTimeout`) are offloaded to Web APIs.
- Once the **call stack** is empty, the event loop first clears all **microtasks**, then moves on to **task queue**.

---

## 🔧 Example: Event Loop in Action

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
