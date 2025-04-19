# 📅 Day 1: Mastering `this` in JavaScript

Understanding `this` is **one of the trickiest yet most powerful concepts** in JavaScript. Let’s break it down like you're learning from a friend — with clear examples, fun analogies, and pro tips! 😉

---

## 🔍 What is `this`?

`this` refers to the object **that is currently executing the function**. Its value depends on **how the function is called** — not where it's defined.

---

## 1️⃣ `this` in Global Scope

- **Non-strict mode**: `this` refers to the **global object** (`window` in browsers).
- **Strict mode**: `this` is **undefined**.

```js
function showThis() {
  console.log(this);
}
showThis(); // Non-strict: Window | Strict: undefined
```

---

## 2️⃣ `this` in Object Methods

- Refers to the object that **calls the method**.

```js
const chef = {
  name: 'Mohd Adnan',
  cook() {
    console.log(this.name + ' is cooking!');
  },
};

chef.cook(); // Output: Mohd Adnan is cooking!
```

### 🔁 Losing Context
```js
const cookFunc = chef.cook;
cookFunc(); // Output: undefined
```

### ✅ Fix: Use `bind`
```js
const boundCook = chef.cook.bind(chef);
boundCook(); // Output: Mohd Adnan is cooking!
```

---

## 3️⃣ `this` in Arrow Functions

- Arrow functions **do not have their own `this`** — they inherit it from the **enclosing lexical scope**.

```js
const parrotOwner = {
  name: 'Mohd Adnan',
  talk() {
    const parrot = () => console.log(this.name + "'s parrot is talking!");
    parrot();
  },
};

parrotOwner.talk(); // Output: Mohd Adnan's parrot is talking!
```

---

## 4️⃣ `this` in Constructors and Classes

### Function Constructor
```js
function Robot(name) {
  this.name = name;
}

const wallE = new Robot('Iron-man');
console.log(wallE.name); // Output: Iron-man
```

### ES6 Class
```js
class Spaceship {
  constructor(name) {
    this.name = name;
  }

  launch() {
    console.log(this.name + ' is launching!');
  }
}

const falcon = new Spaceship('Falcon 9');
falcon.launch(); // Output: Falcon 9 is launching!
```

---

## 5️⃣ `this` in Event Handlers

- In a regular function: `this` refers to the **DOM element** that triggered the event.
- In arrow functions: `this` is inherited from the **parent scope**.

```js
document.querySelector('button').addEventListener('click', function () {
  console.log(this); // Refers to the button element
});

// Arrow function version

document.querySelector('button').addEventListener('click', () => {
  console.log(this); // Refers to the global object (Window)
});
```

---

## 6️⃣ Common Pitfalls and Fixes

### 🧩 Losing Context in Callbacks
```js
const cat = {
  name: 'Lilly',
  meow() {
    console.log(this.name + ' says Meow!');
  },
};

setTimeout(cat.meow, 1000); // Output: undefined

// ✅ Fix:
setTimeout(cat.meow.bind(cat), 1000); // Output: Lilly says Meow!
```

### 🌌 `this` in Closures

```js
const adventurer = {
  name: 'Mohd Adnan',
  explore() {
    function innerEcho() {
      console.log(this.name + ' is lost!');
    }
    innerEcho(); // Output: undefined
  },
};

adventurer.explore();

// ✅ Fix 1: Using self
const adventurer1 = {
  name: 'Mohd Adnan',
  explore() {
    const self = this;
    function innerEcho() {
      console.log(self.name + ' found the treasure!');
    }
    innerEcho();
  },
};

adventurer1.explore();

// ✅ Fix 2: Using arrow function
const adventurer2 = {
  name: 'Mohd Adnan',
  explore() {
    const innerEcho = () => console.log(this.name + ' found the treasure!');
    innerEcho();
  },
};

adventurer2.explore();
```

---

## 7️⃣ Explicitly Setting `this`: `call`, `apply`, and `bind`

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const wizard = { name: 'Adnan the Wise' };
greet.call(wizard, 'Hello'); // Output: Hello, Adnan the Wise
greet.apply(wizard, ['Hi']); // Output: Hi, Adnan the Wise

const boundGreet = greet.bind(wizard, 'Hey');
boundGreet(); // Output: Hey, Adnan the Wise
```

---

## 8️⃣ Borrowing Methods

```js
const hero1 = { powers: [100, 200, 300], avgPower: null };
const hero2 = { powers: [50, 75, 125], avgPower: null };

function calculateAvgPower() {
  const sum = this.powers.reduce((a, b) => a + b, 0);
  this.avgPower = sum / this.powers.length;
}

calculateAvgPower.call(hero1);
console.log(hero1.avgPower); // Output: 200

calculateAvgPower.apply(hero2);
console.log(hero2.avgPower); // Output: 83.33
```

---

## 📋 Summary Table

| Context | What `this` Refers To |
|--------|-------------------------|
| Global Scope (non-strict) | Global object (window/global) |
| Global Scope (strict)     | `undefined`                   |
| Object Method             | The object that invoked the method |
| Regular Function          | Depends on caller (global or undefined) |
| Arrow Function            | Inherited from parent lexical scope |
| Constructor Function      | The new instance being created |
| Event Handler (regular fn)| The DOM element triggering the event |
| Event Handler (arrow fn)  | Inherited from parent scope (usually `window`) |
| call/apply/bind           | Explicitly defined object |

---

## 🧠 Key Takeaways

- `this` depends on **how** a function is called, not **where** it’s defined.
- Arrow functions don’t have their own `this` — they inherit it.
- Use `bind`, `call`, or `apply` to manually control `this`.
- Be cautious with callbacks and closures — use arrow functions or `bind` to fix context loss.

---

## 📚 References

- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [JavaScript is Sexy - Understand this](https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [Medium - The complete guide to this](https://medium.com/codex/understanding-this-in-javascript-the-complete-guide-c4c21fe15ff8)
- [JavaScript.info - Object Methods](https://javascript.info/object-methods)

