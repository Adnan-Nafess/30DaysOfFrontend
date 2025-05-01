// What is a Shallow Copy?
// Example – Shallow Copy Using Spread (...)

const original = {
  name: "Adnan",
  address: {
    city: "Najibabad",
    state: "UP",
  },
};

const shallowCopy = { ...original };

shallowCopy.address.city = "Delhi";

console.log(original.address.city); // Output: "Delhi"

// Behind the Scenes: How Spread Works

const shallowCopy = { ...original };

// Other Ways to Create Shallow Copies
// 1. Object.assign()

const copy = Object.assign({}, original);

// 2. Array .slice()

const arr = [1, 2, 3];
const shallowArr = arr.slice();

// What is a Deep Copy?
// Example – Deep Copy Using structuredClone()

const original1 = {
  name: "Adnan",
  address: {
    city: "Najibabad",
    state: "UP",
  },
};

const deepCopy = structuredClone(original1);

deepCopy.address.city = "Delhi";

console.log(original1.address.city); // Output: "Najibabad"

// Deep Copy with JSON (Caution ⚠️)

const deepCopy = JSON.parse(JSON.stringify(original1));

// Behind the Scenes: structuredClone

const cloned = structuredClone(obj);

// Bonus Example – Nested Arrays and Objects

const obj = {
  users: [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
  ],
};

const shallow = { ...obj };
const deep = structuredClone(obj);

shallow.users[0].age = 30;
console.log(obj.users[0].age); // 30 ❌ (shallow copy)

deep.users[0].age = 40;
console.log(obj.users[0].age); // Still 30 ✅ (deep copy)
