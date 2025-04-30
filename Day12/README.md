# Day 12: Temporal Dead Zone (TDZ) in JavaScript – Deep Dive 🔍

## 🧠 What is the Temporal Dead Zone?

The **Temporal Dead Zone (TDZ)** is the time between when a variable is **hoisted** and when it is **initialized**. During this phase, the variable **exists but cannot be accessed** — doing so will throw a `ReferenceError`.

> TDZ applies to variables declared using `let` and `const` — NOT `var`.

---

## 🔬 How is it Different from `var`?

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted **but not initialized** — they remain in TDZ until the line where they are defined.

---

## ❌ Accessing Variables in TDZ

```js
console.log(a); // ❌ ReferenceError
let a = 5;
```

Here, `a` is in the TDZ from the start of the block until the declaration `let a = 5;`.

---

## ✅ Correct Access After Initialization

```js
let a = 5;
console.log(a); // ✅ 5
```

Once initialized, `a` can be accessed safely.

---

## 🧪 Example 1: `let` in TDZ

```js
{
  console.log(msg); // ❌ ReferenceError
  let msg = "Hello TDZ";
}
```

---

## 🧪 Example 2: `var` is NOT in TDZ

```js
{
  console.log(x); // ✅ undefined (not ReferenceError)
  var x = 10;
}
```

This shows how `var` is hoisted and initialized with `undefined`.

---

## 🧪 Example 3: Function Scope and TDZ

```js
function checkTDZ() {
  console.log(typeof value); // ❌ ReferenceError
  let value = 10;
}
checkTDZ();
```

Even though `typeof` usually returns `"undefined"`, it throws an error here because `value` is in the TDZ.

---

## 🧪 Example 4: `const` in TDZ

```js
{
  console.log(counter); // ❌ ReferenceError
  const counter = 0;
}
```

Like `let`, `const` also follows TDZ rules.

---

## ⚠️ TDZ with `if` Block

```js
if (true) {
  console.log(myVar); // ❌ ReferenceError
  let myVar = 42;
}
```

Even inside conditional blocks, TDZ exists.

---

## 🧠 Why Does TDZ Exist?

- To **prevent bugs** from accessing variables before they’re safely initialized
- To make `let` and `const` behave more predictably than `var`

---

## 📌 Summary

| Keyword | Hoisted | Initialized | TDZ Applies | Default Value |
|---------|---------|-------------|-------------|----------------|
| `var`   | Yes     | Yes         | No          | `undefined`     |
| `let`   | Yes     | No          | Yes         | N/A (ReferenceError) |
| `const` | Yes     | No          | Yes         | N/A (ReferenceError) |
