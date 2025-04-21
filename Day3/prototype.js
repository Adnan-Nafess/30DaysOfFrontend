// Example 1: Constructor Function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Example 2: Object.create()
const vehicle = {
  move() {
    console.log("The vehicle is moving!");
  },
};

const car = Object.create(vehicle);
car.start = function () {
  console.log("The car has started!");
};

car.start(); // The car has started!
car.move();  // The vehicle is moving!

// Example 3: ES6 class (prototypal under the hood)
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.eat();  // Eating...
dog.bark(); // Woof!
