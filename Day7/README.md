# Day 7: Debouncing and Throttling in JavaScript – Optimizing Performance Like a Pro 🚀

## Why Do We Need Debouncing & Throttling?

In frontend development, events like `scroll`, `resize`, and `input` can fire multiple times in milliseconds.  
Without control, this can slow down your app and lead to performance issues.

---

## 🧠 What is Debouncing?

Debouncing ensures that a function is called **only after a specified delay**, and **only once**, no matter how many times the event is triggered during that delay.

### 💡 Use-case: Search input where API is called only when user stops typing.

### 🔧 Debounce Example:

```js
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleInput = debounce((e) => {
  console.log("Searching for:", e.target.value);
}, 500);

document.getElementById("search").addEventListener("input", handleInput);
