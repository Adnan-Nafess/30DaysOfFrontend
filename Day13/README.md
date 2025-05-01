# Day 13: Shallow vs Deep Copy in JavaScript – Deep Dive 🧐

Copying objects and arrays is a common task in JavaScript—but not understanding **how** it works can introduce hard-to-spot bugs. Let's dive into **shallow vs deep copy**, how they differ, and how JavaScript handles them behind the scenes.

---

## 🔍 What is a Shallow Copy?

A **shallow copy** copies the immediate values of an object or array but **does not copy nested objects**. Instead, it copies the reference to those nested objects.

### 🔧 Example – Shallow Copy Using Spread (`...`)
```js
const original = {
  name: "Adnan",
  address: {
    city: "Najibabad",
    state: "UP"
  }
};

const shallowCopy = { ...original };

shallowCopy.address.city = "Delhi";

console.log(original.address.city); // Output: "Delhi"
```

📌 **Why?**
Because `address` is a nested object, both `original` and `shallowCopy` point to the **same address object in memory**.

---

## 🧠 Behind the Scenes: How Spread Works

```js
const shallowCopy = { ...original };
```

This copies **only one level deep**:
- Primitive values (`name: "Adnan"`) are copied by value ✅
- Object values (`address`) are copied by reference ❌

---

## 🗪 Other Ways to Create Shallow Copies

### 1. `Object.assign()`
```js
const copy = Object.assign({}, original);
```

### 2. Array `.slice()`
```js
const arr = [1, 2, 3];
const shallowArr = arr.slice();
```

Again, it copies only top-level values.

---

## 🌊 What is a Deep Copy?

A **deep copy** duplicates **all nested levels**, creating new memory references for nested objects or arrays.

### 🔧 Example – Deep Copy Using `structuredClone()`
```js
const original = {
  name: "Adnan",
  address: {
    city: "Najibabad",
    state: "UP"
  }
};

const deepCopy = structuredClone(original);

deepCopy.address.city = "Delhi";

console.log(original.address.city); // Output: "Najibabad"
```

✅ Now the `original` object remains unaffected because the nested `address` was also copied.

---

## 💡 Deep Copy with JSON (Caution ⚠️)
```js
const deepCopy = JSON.parse(JSON.stringify(original));
```

- ✅ Works for many cases
- ❌ Fails for:
  - `undefined`
  - functions
  - circular references
  - Date, RegExp, Map, Set

---

## ⚙️ Behind the Scenes: structuredClone

`structuredClone()` is a browser-native API that:
- Copies complex nested structures
- Supports all types like `Date`, `Map`, `Set`, etc.
- Works recursively and avoids circular reference issues

```js
const cloned = structuredClone(obj);
```

✅ Safer and modern way to do deep copies.

---

## 🏋️ Comparison Table

| Method                | Copy Type  | Nested Objects Handled? | Safe for Complex Data? |
|-----------------------|------------|--------------------------|-------------------------|
| Spread (`...`)        | Shallow    | ❌ Shared references      | ❌                      |
| `Object.assign()`     | Shallow    | ❌ Shared references      | ❌                      |
| JSON.parse/stringify  | Deep*      | ✅ (with caveats)         | ⚠️ Limited types        |
| `structuredClone()`   | Deep       | ✅ Fully cloned           | ✅ Yes                  |

---

## 🧪 Bonus Example – Nested Arrays and Objects

```js
const obj = {
  users: [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 }
  ]
};

const shallow = { ...obj };
const deep = structuredClone(obj);

shallow.users[0].age = 30;
console.log(obj.users[0].age); // 30 ❌ (shallow copy)

deep.users[0].age = 40;
console.log(obj.users[0].age); // Still 30 ✅ (deep copy)
```

---

## ⮏️ Summary

- **Shallow Copy**: Top-level copy only. Nested objects share memory.
- **Deep Copy**: Recursive full copy. Each level is independently copied.
- ✅ Use `structuredClone()` (modern)
- ⚠️ Avoid using JSON for complex structures

---

## 🔗 GitHub Repository (All Articles):

📁 https://lnkd.in/g7SyFPAb

