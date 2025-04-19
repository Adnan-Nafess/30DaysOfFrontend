// Day 1: Everything You Need to Know About this in JavaScript

// 1. this in Global Scope.

function showThis() {
  console.log(this);
}

showThis(); // Non-strict: Window | Strict: undefined

// 2. this in Object Methods

const chef = {
  name: 'Mohd Adnan',
  cook() {
    console.log(this.name + ' is cooking!');
  },
};

chef.cook(); // Output: Mohd Adnan is cooking!


const cookFunc = chef.cook;
cookFunc(); // Output: undefined

// Fix: Adnan binds the recipe back to himself.

const boundCook = chef.cook.bind(chef);
boundCook(); // Output: Mohd Adnan is cooking!

// 3. this in Arrow Functions

const parrotOwner = {
  name: 'Mohd Adnan',
  talk() {
    const parrot = () => console.log(this.name + "'s parrot is talking!");
    parrot();
  },
};

parrotOwner.talk(); // Output: Mohd Adnan's parrot is talking!

// 4. this in Constructors and Classes


function Robot(name) {
  this.name = name;
}

const wallE = new Robot('Iron-man');
console.log(wallE.name); // Output: Iron man

// ES6 Classes: Adnan builds spaceships now.

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

// 5. this in Event Handlers
// Refers to the element that triggered the event.

// Example (Adnan presses a button):

document.querySelector('button').addEventListener('click', function () {
  console.log(this); // Refers to the button element
});

// Arrow Functions: Inherit this from the surrounding scope.

document.querySelector('button').addEventListener('click', () => {
  console.log(this); // Refers to the global object (Window)
});
// Fix: Use regular functions to keep this as the button element.

// 6. Common Pitfalls and Fixes
// 6.1. Losing Context in Callbacks
// When a method is passed as a callback, this often loses its original context.

// Example (Adnan’s cat Lilly):

const cat = {
  name: 'Lilly',
  meow() {
    console.log(this.name + ' says Meow!');
  },
};

setTimeout(cat.meow, 1000); // Output: undefined
// Fix: Adnan binds Lilly’s meow method.

setTimeout(cat.meow.bind(cat), 1000); // Output: Lilly says Meow!
// 6.2. this in Closures
// Inner functions lose access to the outer function’s this.

// Example (Adnan gets lost in a cave):

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
// Fix 1: Adnan carries a compass (self).

const adventurer = {
  name: 'Mohd Adnan',
  explore() {
    const self = this;
    function innerEcho() {
      console.log(self.name + ' found the treasure!');
    }
    innerEcho(); // Output: Mohd Adnan found the treasure!
  },
};

adventurer.explore();
// Fix 2: Use arrow functions.

const adventurer = {
  name: 'Mohd Adnan',
  explore() {
    const innerEcho = () => console.log(this.name + ' found the treasure!');
    innerEcho(); // Output: Mohd Adnan found the treasure!
  },
};

adventurer.explore();

// 7. Explicitly Setting this: call, apply, and bind
// 7.1. call
// Invokes a function and explicitly sets this.

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const wizard = { name: 'Adnan the Wise' };
greet.call(wizard, 'Hello'); // Output: Hello, Adnan the Wise

// 7.2. apply
// Similar to call, but arguments are passed as an array.

greet.apply(wizard, ['Hi']); // Output: Hi, Adnan the Wise

// 7.3. bind
// Creates a new function with this set to a specific object.

const boundGreet = greet.bind(wizard, 'Hey');
boundGreet(); // Output: Hey, Adnan the Wise

// 8. Borrowing Methods
// Borrow methods from one object to use in another by explicitly setting this.

// Example (Adnan and superhero calculations):

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

