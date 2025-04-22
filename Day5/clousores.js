// ✅ What is a Closure?
// A closure is a function that "remembers" the variables from its lexical scope even when the function is executed outside that scope.

// "Function ke andar dusra function bana ho, aur andar wala function bahar ke variables ko access karta ho — toh woh Closure ban jaata hai."

// ✅ Why do we use Closures?
// Data Privacy: Maintain private variables (like encapsulation).

// Callbacks & Event Handlers: Use variables even after parent function finishes.

// Function Factories: Return functions with preserved state.

// Memoization/Caching: Store results of expensive function calls.

// ✅ Code Example

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count is", count);
  }

  return inner;
}

const counter = outer();
counter(); // Count is 1
counter(); // Count is 2
outer() 

inner() // ko return kar diya, lekin uske saath count ka reference bhi yaad rakh liya.

// Jab bhi counter() call hota hai, woh count ko access karta hai — even though outer() has finished.

// ✅ Real-World Use Case: Data Privacy
t
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ₹${amount}`);
    },
    checkBalance() {
      console.log(`Balance: ₹${balance}`);
    }
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);     // Deposited: ₹500
myAccount.checkBalance();   // Balance: ₹1500

// 🔒 balance variable private ho gaya – koi direct access nahi kar sakta. Sirf methods ke through access hoga.

// ✅ Closure Interview Question Tip
// Q: What will be the output?


for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 3 3 3 ❌ Not 0 1 2
// Reason: var is function-scoped, not block-scoped. Closure captures reference, not value.

// ✅ Fix using let:


for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}